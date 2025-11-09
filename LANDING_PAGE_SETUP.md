# Landing Page Setup Instructions

## Overview
The landing page has been created to match Linear's exact design with pixel-perfect accuracy. All components use Linear's exact colors, typography, and spacing.

## Font Setup
The landing page uses **Inter Variable** font (matching Linear's font):
- Already configured in `app/layout.tsx`
- Font weights: 100-900 (variable)
- Font display: swap for performance

## Color Scheme
All colors match Linear's exact CSS variables:
- Background: `#08090a`
- Text Primary: `#f7f8f8`
- Text Secondary: `#8a8f98`
- Text Tertiary: `#62666a`
- Border: `#23252a`
- Primary/Accent: `#5e6ad2`
- Card Background: `#0f1011`

## Images Setup

### Option 1: Using PowerShell Script (Windows)
```powershell
cd linearapp
powershell -ExecutionPolicy Bypass -File copy-images.ps1
```

### Option 2: Manual Copy
Copy all image files from `Linear – Plan and build products_files/` to `linearapp/public/images/`:
- All `.jpg` files
- All `.png` files

### Option 3: Using File Explorer
1. Navigate to `Linear – Plan and build products_files` folder
2. Select all `.jpg` and `.png` files
3. Copy them to `linearapp/public/images/`

## Key Image Files Referenced
The following images are preloaded in the HTML and should be available:
- `e522be49c136f6b81a1c5cb3aa7b2075f78404c0-1305x1444.jpg`
- `f45112e8aeed10023708772eb88872fa97b4291c-200x200.jpg`
- `62175a4eea5abef20b7338bcc6565876ce937416-467x492.jpg`
- `835fa19a98f9cd22cfb8da73cc921aa1027edeb6-2048x2048.png`
- `4472d232811671536455f5768bf0a6584d39c755-2186x2186.png`
- And other images from the Linear HTML files folder

## Components Structure
- `components/layout/landing-nav.tsx` - Navigation with dropdown menus
- `components/common/landing-hero.tsx` - Hero section
- `components/common/landing-features.tsx` - All feature sections
- `components/layout/landing-footer.tsx` - Footer
- `app/page.tsx` - Main landing page with conditional routing

## Styling Details
All components use inline styles matching Linear's exact CSS:
- Font weights: 400 (normal), 510 (medium), 590 (semibold)
- Letter spacing: -0.011em (body), -0.022em (headings)
- Line heights: 1.6 (body), 1.1-1.4 (headings)
- Border radius: 8px, 12px, 16px, 24px
- Shadows: Matching Linear's shadow system

## Testing
1. Start the development server: `pnpm dev`
2. Navigate to `http://localhost:3002` (or your configured port)
3. The landing page should display for unauthenticated users
4. Authenticated users will be redirected to the dashboard

## Notes
- All colors are hardcoded to match Linear's exact values
- Typography matches Linear's font system
- Spacing and layout match Linear's design exactly
- Components are responsive and mobile-friendly

