# Design Guidelines: Luxury Restaurant Website with Gold Accents

## Design Approach: High-End Restaurant Landing Page
**Primary Inspiration**: Sophisticated, immersive dining experience with dark modern aesthetic
**Visual Theme**: Dark luxury with gold accent highlights and neon-style lighting

---

## Core Design Principles

1. **Immersive Hero Experience**: Wide atmospheric restaurant interior image as main focal point
2. **Layered Content Blocks**: Right-side vertical content cards for Menu, Reservation, and Restaurant info
3. **Sophisticated Dark Luxury**: Deep blacks with strategic gold accent lighting
4. **Clean Modern Typography**: Elegant, readable fonts with proper hierarchy
5. **Accessible CTAs**: Clear, distinct call-to-action buttons throughout

---

## Color Palette

### Dark Mode Base
- **Background Base**: 12 8% 8% (deep charcoal, near-black)
- **Surface Elevated**: 12 8% 12% (slightly lighter panels)
- **Primary Text**: 0 0% 95% (off-white for readability)
- **Secondary Text**: 0 0% 65% (muted gray for supporting content)

### Gold Accent System
- **Primary Gold**: 42 85% 55% (vibrant gold - signature accent)
- **Gold Glow**: 45 90% 60% (bright gold for highlights)
- **Hover Gold**: 42 90% 65% (brighter gold on interaction)
- **Metallic Gold**: 35 40% 65% (warm metallic for premium details)

### Supporting Colors
- **Divider Lines**: 0 0% 20% (subtle separators)
- **Card Background**: 12 8% 10% (elevated card surface)

---

## Typography System

### Font Families
- **Primary Display**: Playfair Display (serif) - for brand name and hero headlines
- **Secondary Headings**: Montserrat (sans-serif, 300-500 weights) - for navigation and section titles
- **Body Text**: Inter (sans-serif, 400-500 weights) - for descriptions and content

### Hierarchy
- **Brand Logo**: Playfair Display, 48px, letter-spacing: 0.1em, uppercase
- **Section Headings**: Montserrat Light, 42px, letter-spacing: 0.05em
- **Card Titles**: Montserrat Medium, 24px, letter-spacing: 0.02em
- **Navigation**: Montserrat Medium, 14px, letter-spacing: 0.15em, uppercase
- **Body**: Inter Regular, 16px, line-height: 1.7
- **Captions**: Inter Regular, 13px, opacity: 0.7

---

## Layout System

### Spacing Primitives
**Consistent units**: 2, 4, 6, 8, 12, 16, 24 (Tailwind scale)
- **Section padding**: py-16 (desktop), py-12 (mobile)
- **Card spacing**: gap-6 between cards
- **Edge margins**: px-8 (desktop), px-6 (mobile)

### Main Layout Structure
**Hero Section with Right-Side Blocks**:
- Left: Main hero image occupying majority of viewport (70%)
- Right: Three vertical content blocks (30%)
  - Menu block (top) - with plating photo
  - Reservation block (middle) - with dining atmosphere photo
  - Our Restaurant block (bottom) - with bar area photo
- Mobile: Stacked full-width sections

---

## Component Library

### Navigation Bar
- **Fixed Position**: Top of viewport, backdrop-blur-md with dark transparent background
- **Logo**: Left-aligned, Playfair Display
- **Menu Items**: Center/Right-aligned, horizontal layout, gold underline on hover (2px height, animated)
- **Mobile**: Hamburger menu with full-screen overlay

### Right-Side Content Blocks
- **Layout**: Vertical stack of 3 cards on right edge
- **Styling**: Dark elevated background with subtle borders
- **Content**: Title, brief description, featured image, CTA button
- **Interaction**: Hover elevates card slightly, gold accent appears
- **Sizing**: Equal height distribution, responsive stacking on mobile

### Hero Section
- **Image**: Wide atmospheric restaurant interior
- **Overlay**: Dark gradient for text readability
- **Content**: Brand name, tagline, primary CTA
- **Positioning**: Content overlaid on left/center of image

### Call-to-Action Buttons
- **Primary CTA**: Gold border (2px), transparent background
- **Hover**: Gold fill with dark text
- **Secondary**: White border with blur background
- **Size**: px-8 py-3, Montserrat Medium, 14px uppercase

---

## Section Details

### 1. Hero Section (Main Landing)
- **Image**: Wide atmospheric restaurant interior with moody lighting
- **Right Blocks**:
  - **Menu Block**: Gourmet dish on modern plating photo
  - **Reservation Block**: Customer enjoying fine dining atmosphere
  - **Our Restaurant Block**: Wide-angle bar area shot

### 2. Full Menu Section
- **Layout**: Grid of menu items with plating photos
- **Cards**: Dish name, description, price (in gold), image
- **Categories**: Appetizers, Mains, Desserts, Drinks

### 3. About/Restaurant Section
- **Content**: Story, chef info, philosophy
- **Images**: Kitchen, chef portraits, signature dishes
- **Awards**: Display recognitions and accolades

### 4. Reservation Form Section
- **Form**: Name, email, date, time, guests
- **Background**: Lifestyle dining atmosphere image
- **Styling**: Gold focus states, clean modern inputs

### Social Media Icons
- **Position**: Fixed bottom-right corner
- **Style**: Circular gold outline buttons
- **Icons**: Instagram, Facebook, Twitter
- **Size**: 40px diameter, semi-transparent background

---

## Animations & Interactions

### Micro-Interactions
- **Navigation hover**: Gold underline slide-in (0.3s)
- **Button hover**: Background fill + text color invert (0.4s)
- **Card hover**: Slight elevation + gold accent border (0.3s)
- **Image transitions**: Subtle zoom on hero image

### Hover States
- **Right-side blocks**: Scale slightly (1.02), add gold border glow
- **Menu items**: Background brightens, gold price highlights
- **CTAs**: Fill with gold, text inverts to dark

---

## Accessibility Considerations

- **Gold Contrast**: Ensure gold on dark backgrounds meets WCAG AA (4.5:1 minimum)
- **Focus States**: Bright gold outline (3px) on all interactive elements
- **Keyboard Navigation**: Full support for tab navigation
- **Alt Text**: Descriptive text for all imagery
- **Form Labels**: Visible labels with high contrast

---

## Responsive Design

**Desktop (1024px+)**: Hero with right-side blocks (70/30 split)
**Tablet (768px-1023px)**: Adjusted split (60/40), stacked blocks
**Mobile (<768px)**: Full-width stacked sections, blocks become carousel or vertical scroll

---

## Image Strategy

### Required Images
1. **Hero**: Atmospheric restaurant interior (moody lighting, stylish furniture)
2. **Menu Block**: Gourmet dish on modern plating (overhead shot)
3. **Reservation Block**: Customer enjoying fine dining (lifestyle shot)
4. **Restaurant Block**: Wide-angle bar area (transparency/invitation)
5. **Menu Section**: Multiple plating photos for different dishes
6. **About Section**: Kitchen, chef, bar detail shots

### Image Treatment
- **Color Grade**: Warm tones with lifted shadows, gold color tints
- **Aspect Ratios**: 16:9 for hero, 1:1 for block cards, varied for menu
- **Quality**: High-resolution, professionally styled food photography
