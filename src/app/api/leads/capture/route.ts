import { NextRequest, NextResponse } from 'next/server';

const CRM_URL = process.env.CRM_API_URL || 'https://crm.epathshalaonline.com/api/v1';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const crmRes = await fetch(`${CRM_URL}/leads/capture`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await crmRes.json();

    return NextResponse.json(data, { status: crmRes.status });
  } catch (error) {
    console.error('CRM proxy error:', error);
    return NextResponse.json(
      { message: 'Failed to submit. Please try again.' },
      { status: 500 }
    );
  }
}
