# Typography System - ePathshala

This document outlines the modern typography system implemented for the ePathshala online education landing page.

## Fonts
- **Headings**: [Poppins](https://fonts.google.com/specimen/Poppins) (Sans-serif)
- **Body**: [Inter](https://fonts.google.com/specimen/Inter) (Sans-serif)

## Implementation Details
The system uses `next/font/google` for optimized font loading and Tailwind CSS v4 for styling.

### CSS Variables
- `--font-heading`: Points to Poppins
- `--font-body`: Points to Inter

### Tailwind Theme Utilities
- `font-heading`: Applies Poppins
- `font-body`: Applies Inter
- `font-sans`: Defaults to Inter

## Typography Scale

### Headings
- **H1**: `text-5xl md:text-6xl`, font-weight 800 (Extrabold), `leading-[1.1]`, `tracking-tight`
- **H2**: `text-3xl md:text-4xl`, font-weight 600 (Semibold)
- **H3**: `text-2xl md:text-3xl`, font-weight 600 (Semibold)

### Body Text
- **Large**: `text-lg md:text-xl`, font-weight 500 (Medium), `leading-relaxed`
- **Normal**: `text-base`, font-weight 400 (Regular)
- **Small**: `text-sm`, font-weight 400 (Regular)

## UI Elements
- **Buttons**: `font-body`, medium/bold weight, rounded-full
- **Navigation**: `font-body`, medium weight, `tracking-wide`
- **Cards**: Clean readable text using `font-body`

## Usage Examples

### Hero Heading
```tsx
<h1 className="font-heading text-5xl md:text-6xl font-extrabold text-[#0B3C5D]">
  HAR SAPNA HAI <br />
  <span>POSSIBLE</span>
</h1>
```

### Navigation Link
```tsx
<Link className="font-body font-medium tracking-wide">
  About Us
</Link>
```

### Paragraph
```tsx
<p className="font-body text-lg text-[#1F2937]">
  सही Education से आज का Focus कल का Champion बनाता है।
</p>
```
