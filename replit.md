# Debut Bar & Restaurant - Immersive Website

## Project Overview

A luxury restaurant website inspired by high-end dining establishments. Features a sophisticated dark aesthetic with gold accent lighting, multi-page architecture with dedicated pages for menu, reservations, and about sections.

## Architecture

### Frontend
- **Framework**: React with TypeScript
- **Routing**: Wouter (multi-page routing)
- **Pages**: Home (/), Menu (/menu), Food Menu (/food-menu), Book a Table (/book), About (/about), Contact (/contact)
- **Styling**: Tailwind CSS with custom design tokens
- **UI Components**: Shadcn UI with custom luxury restaurant theme
- **Animations**: CSS transitions with custom elevation effects

### Backend
- **Server**: Express.js
- **Database**: PostgreSQL (Neon-backed) via Drizzle ORM
- **Storage**: DatabaseStorage for persistent data
- **Tables**: menu_items, gallery_images, reservations

### Design System

#### Colors
- **Background**: Deep charcoal (12 8% 8%)
- **Gold Accent**: Sophisticated gold (42 85% 55%)
- **Text**: Off-white primary (0 0% 95%), muted gray secondary (0 0% 65%)

#### Typography
- **Display/Brand**: Playfair Display (serif)
- **Headings**: Montserrat (sans-serif)
- **Body**: Inter (sans-serif)

#### Layout
- **Pages**: Separate routes for Home, Menu, Reservation, and About
- **Hero Layout**: Full-viewport landing page with atmospheric imagery, centered content, and left-side navigation buttons
- **Desktop**: Three rounded navigation buttons on left side (Menu, Reservation, Our Restaurant), centered hero content
- **Mobile**: Navigation buttons appear at bottom as horizontal scrollable rounded cards

## Features

### 0. Introductory Offers Popup
- **Auto-display popup** appears 500ms after site loads on any page
- Shows promotional image with weekly special deals (Monday-Sunday)
- Gold border matching site aesthetic
- **Close button** (X) in top right corner with dark background
- Accessible with hidden title and description for screen readers
- Can be dismissed by clicking X or pressing Escape key

### 1. Homepage (/)
- Centered hero section with brand name "Debut" in elegant typography
- Tagline: "Bar & Restaurant"
- Description and "Book a Table" CTA button with rounded border
- Desktop: Three rounded navigation buttons on left side (Menu, Reservation, Our Restaurant) with gold stroke borders
- Mobile: Horizontal scrollable rounded navigation buttons at bottom with gold borders
- All buttons link to respective pages

### 2. Menu Page (/menu)
- Complete restaurant menu organized by 7 categories
- **Sticky dropdown navigation** for quick section jumping
- Categories: Appetizers & Shareables, Pasta, Salad Bowls, Handhelds & Burgers, Soups, Steaks/Grills/Mains, Fuzion by Debut
- Each category displays items in 2-column grid with descriptions
- Category-specific notes (e.g., "All pasta dishes served with garlic bread")
- Protein customization options displayed at bottom
- Smooth scroll to sections with proper offset for sticky navigation
- Fully scrollable page to accommodate all menu items

### 3. About/Our Restaurant Page (/about)
- Restaurant story and philosophy organized in sections
- Sections: Experience, Cuisine, Bar & Cocktails, Culture & Community, Private Events
- Photo gallery with 3 restaurant images (1 large top, 2 smaller bottom)
- Fully scrollable layout with proper spacing from navigation
- Sticky photo gallery on desktop for better UX
- Gold accent section headings and decorative line

### 4. Food Menu Page (/food-menu)
- Displays uploaded food menu image
- Clean card layout with gold accent heading
- Fully responsive image display
- Accessible via navigation menu

### 5. Book a Table Page (/book)
- Reservation booking form with validation
- Fields: name, email, date, time, number of guests
- Form validation using React Hook Form and Zod
- Gold accent styling with luxury design
- Narrower form layout for better UX

### 6. Admin Page (/admin)
- **Password protection:** Requires password (Onixx@Debut1) via admin login page
- **Reservation management dashboard** for restaurant staff
- View all table reservations from the database
- **Filtering capabilities:**
  - Search by customer name or email
  - Filter by reservation status (pending, confirmed, completed, cancelled)
  - Real-time filtering with count badges
- **Status management:**
  - Confirm pending reservations
  - Mark reservations as completed
  - Cancel reservations
- Displays reservation details: name, email, date, time, guest count, creation timestamp
- Color-coded status badges (yellow=pending, green=confirmed, blue=completed, red=cancelled)
- Sorted by creation date (newest first)
- **Admin Login Page:** Home button for easy navigation back to homepage

### 7. Contact Page (/contact)
- Split layout: Photo button (left half) and 2x2 grid of interactive buttons (right half)
- Mobile: Vertical stacking with photo on top (40% height) and grid below (60% height)
- Desktop: Side-by-side 50/50 split
- **2x2 Grid Buttons:**
  1. Map View: MapPin icon with "View Map" text
  2. Get in Touch: Displays email (info@debutbar.ca) and phone (+1 234 567 890)
  3. Photo Grid: 2x2 gallery of restaurant images
  4. Social Media Grid: 2x2 grid of social icons (Instagram, Facebook, Twitter, Mail)
- Photo section includes social media icons at bottom-right
- Restaurant address: 10 Dunlop St E, Barrie, ON L4M 1A3 (displayed in contact info and Google Maps)
- All content fits on single screen without scrolling

### Navigation
- **Top-left navigation bar** (fixed position)
  - Custom Debut logo image (h-6 on mobile, h-12 on desktop)
  - Hamburger menu icon
  - Menu button links to /menu (desktop only)
  - Reservation button with gold border links to /book (desktop only)
  - Admin button (settings icon) links to /admin (visible on mobile and desktop)
- **Mobile Navigation Optimizations**:
  - Compact layout with pt-12 spacing for mobile, pt-0 for desktop
  - Smaller icons and tighter gaps for better mobile UX
  - All pages have pt-16 on mobile to account for fixed navigation
- **Full-screen overlay menu** (triggered by hamburger)
  - Home, Menu, Food Menu, Book a Table, Our Restaurant, Contact options
  - Large typography with gold hover effects
  - Closes on navigation
- **Accessibility**: All links use wouter Link components with proper styling, no nested interactive elements
- **Design Credit Button** (fixed bottom-left on all pages)
  - "DESIGN BY ONIXX" button linking to https://www.onixxstudio.com
  - Fixed position: 16px from bottom, 16px from left
  - Z-index 9999 to appear above all content
  - Gold border and text with semi-transparent background
  - Opens in new tab

### Interactions
- Page transitions: Wouter routing for instant page changes
- Button/Link hover: Elevation effects using hover-elevate utility class
- Card hover: Elevation with subtle background changes
- Navigation: Gold text on hover for menu items

## Recent Changes

### October 2024 Updates
1. **Reservation System & Database**
   - Integrated PostgreSQL database for persistent storage
   - Reservations now saved to database instead of just acknowledged
   - Created admin page at /admin for viewing and managing reservations
   - Added filtering by status and search by name/email
   - Status validation with allowed values: pending, confirmed, completed, cancelled
   - Color-coded status badges for quick visual identification
   - **Email notifications via Gmail integration** - Automatic email sent to info@debutbar.ca (CC: debutbarandrestraunt@gmail.com) when reservation is created

### December 2024 Updates (Previous)
1. **Menu Page Redesign**
   - Added sticky dropdown navigation for quick section access
   - Reorganized menu into 7 distinct categories
   - Two-column grid layout for menu items
   - Added category-specific serving notes
   - Implemented smooth scroll with proper offset handling
   - Made page fully scrollable

2. **New Food Menu Page**
   - Dedicated page displaying uploaded food menu image
   - Accessible via navigation menu

3. **Book a Table Page**
   - Replaced old reservation page
   - Form validation with narrower, centered layout
   - Better mobile and desktop UX

4. **About Page Updates**
   - Made page fully scrollable
   - Improved spacing and readability
   - Added sticky photo gallery on desktop
   - Better section organization

## Data Schema

### MenuItem (PostgreSQL)
```typescript
{
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  imageUrl: string;
  order: number;
}
```

### GalleryImage (PostgreSQL)
```typescript
{
  id: string;
  section: string;
  imageUrl: string;
  alt: string;
  order: number;
}
```

### Reservation (PostgreSQL)
```typescript
{
  id: string;
  name: string;
  email: string;
  date: string;
  time: string;
  guests: string;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  createdAt: Date;
}
```

**Reservation Flow:**
1. Customer fills out form on /book page
2. Form validates data (name, email, date, time, guests)
3. Reservation saved to PostgreSQL database with "pending" status
4. **Email notification sent to info@debutbar.ca (CC: debutbarandrestraunt@gmail.com)** with reservation details
5. Customer receives confirmation toast
6. Restaurant staff can view/manage in /admin page
7. Staff can update status: pending → confirmed → completed (or cancelled)

## Running the Project

The project uses a single workflow "Start application" that runs `npm run dev`:
- Express server serves the backend API
- Vite dev server serves the frontend
- Both run on the same port with Vite proxy

## Key Design Decisions

1. **Multi-Page Architecture**: Separate pages for Home, Menu, Food Menu, Book a Table, About, and Contact for better organization and SEO
2. **Navigation Design**: Fixed top-left navigation with custom logo, hamburger menu, and quick access buttons (desktop only)
3. **Full-Screen Menu Overlay**: Hamburger menu opens full-screen overlay instead of dropdown for immersive navigation
4. **Dark Theme Only**: Website is always in dark mode for consistent luxury aesthetic
5. **Static Content**: Menu items and images are pre-seeded for immediate visual impact
6. **Performance**: Images use Unsplash CDN with optimized parameters
7. **Accessibility**: Proper semantic HTML with no nested interactive elements, all navigation uses wouter Link components
8. **No-Scroll Layouts**: All pages designed to fit on single screen (h-screen overflow-hidden) for immersive experience
9. **Mobile-First Optimizations**: 
   - All pages use h-screen overflow-hidden pattern
   - Navigation compensation with pt-16 on mobile
   - Responsive text sizing (text-xs/text-sm on mobile, text-base/text-lg on desktop)
   - Menu page: Scrollable grid with h-48 images on mobile, h-64 on desktop
   - Reservation page: Stacked layout with optimized spacing
   - Contact page: Vertical stacking on mobile (photo 40% top, grid 60% bottom)
   - Tested and verified on iPhone viewport (375x667)

## Future Enhancements

- Database persistence for dynamic menu management
- Real reservation system with email notifications
- Admin panel for content management
- Image lightbox for full-screen gallery viewing
- Parallax effects on scroll transitions
- Touch gesture navigation for mobile
