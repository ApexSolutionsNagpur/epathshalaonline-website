import { NextRequest, NextResponse } from 'next/server';

const SURVEY_ENDPOINT = process.env.SURVEY_SUBMIT_ENDPOINT || '';

const ALLOWED_ORIGINS = [
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.epathshalaonline.com',
  'http://localhost:3000',
  'http://localhost:3001',
];

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60_000;

function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, remaining: RATE_LIMIT_MAX - 1 };
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return { allowed: false, remaining: 0 };
  }

  entry.count++;
  return { allowed: true, remaining: RATE_LIMIT_MAX - entry.count };
}

export async function POST(req: NextRequest) {
  try {
    // ── Origin check ──
    const origin = req.headers.get('origin') || req.headers.get('referer') || '';
    const isValidOrigin = ALLOWED_ORIGINS.some((allowed) => allowed && origin.startsWith(allowed));
    if (origin && !isValidOrigin) {
      return NextResponse.json({ success: false, message: 'Forbidden' }, { status: 403 });
    }

    // ── Rate limit ──
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('x-real-ip') ||
      'unknown';

    const { allowed } = checkRateLimit(ip);
    if (!allowed) {
      return NextResponse.json(
        { success: false, message: 'Too many requests. Please try again later.' },
        { status: 429 },
      );
    }

    const body = await req.json();

    // ── Server-side validation ──
    const requiredFields = [
      'student_name',
      'grade',
      'school_name',
      'parent_name',
      'relationship',
      'mobile',
    ];
    const missingFields = requiredFields.filter((f) => !body[f]?.toString().trim());

    if (missingFields.length > 0) {
      return NextResponse.json(
        { success: false, message: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 },
      );
    }

    // Sanitize mobile: strip non-digits
    if (body.mobile) {
      body.mobile = body.mobile.replace(/\D/g, '');
    }

    // ── Forward to destination if configured ──
    if (SURVEY_ENDPOINT) {
      const destinationRes = await fetch(SURVEY_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(body),
      });

      const destinationData = await destinationRes.json();

      if (!destinationRes.ok) {
        console.error('Survey submission destination error:', destinationData);
        return NextResponse.json(
          { success: false, message: 'Failed to submit survey. Please try again.' },
          { status: 502 },
        );
      }

      return NextResponse.json({
        success: true,
        message: 'Survey submitted successfully!',
        data: destinationData,
      });
    }

    // ── No endpoint configured; log and acknowledge ──
    console.log('Survey submission (no endpoint configured):', body);
    return NextResponse.json({ success: true, message: 'Survey submitted successfully!' });
  } catch (error) {
    console.error('Survey API error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit survey. Please try again.' },
      { status: 500 },
    );
  }
}
