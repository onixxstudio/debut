import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, CalendarCheck, Settings } from "lucide-react";
import debutLogo from "@assets/DEBUT_1760255334657.png";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/", key: "home" },
    { label: "Menu", href: "/menu", key: "menu" },
    { label: "Food Menu", href: "/food-menu", key: "food-menu" },
    { label: "Book a Table", href: "/book", key: "book" },
    { label: "Our Restaurant", href: "/about", key: "about" },
    { label: "Contact", href: "/contact", key: "contact" },
  ];

  const handleMenuClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-4 left-4 md:left-4 right-4 md:right-auto z-50 md:w-auto">
        <div className="bg-background/90 backdrop-blur-md border border-border rounded-lg px-3 md:px-4 py-2 flex items-center justify-center md:justify-start gap-2 md:gap-3 shadow-lg">
          {/* Logo */}
          <Link
            href="/"
            className="hover-elevate active-elevate-2 rounded-full transition-all"
            data-testid="link-home"
          >
            <img 
              src={debutLogo} 
              alt="Debut Bar & Restaurant" 
              className="h-8 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Vertical Divider */}
          <div className="h-6 w-px bg-border" />

          {/* Hamburger Menu Button */}
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setMenuOpen(!menuOpen)}
            data-testid="button-menu-toggle"
            className="h-8 w-8"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          {/* Vertical Divider - Hidden on mobile */}
          <div className="hidden md:block h-6 w-px bg-border" />

          {/* Menu Button - Hidden on mobile */}
          <Link
            href="/menu"
            className="hidden md:inline-flex h-8 min-h-8 items-center justify-center rounded-md px-3 font-heading text-sm tracking-nav uppercase hover-elevate active-elevate-2 transition-colors"
            data-testid="button-menu"
          >
            Menu
          </Link>

          {/* Our Restaurant Button - Hidden on mobile */}
          <Link
            href="/about"
            className="hidden md:inline-flex h-8 min-h-8 items-center justify-center rounded-md px-3 font-heading text-sm tracking-nav uppercase hover-elevate active-elevate-2 transition-colors"
            data-testid="button-about"
          >
            Our Restaurant
          </Link>

          {/* Book a Table Button - Hidden on mobile */}
          <Link
            href="/book"
            className="hidden md:inline-flex h-8 min-h-8 items-center justify-center rounded-md border-2 border-[hsl(var(--gold-primary))] px-3 font-heading text-sm tracking-nav uppercase text-[hsl(var(--gold-primary))] hover-elevate active-elevate-2 transition-colors"
            data-testid="button-book-table"
          >
            Book a Table
          </Link>

          {/* Vertical Divider */}
          <div className="h-6 w-px bg-border" />

          {/* Admin Button - Small icon button */}
          <Link
            href="/admin"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md hover-elevate active-elevate-2 transition-colors"
            data-testid="button-admin"
          >
            <Settings className="h-4 w-4" />
          </Link>
        </div>
      </nav>

      {/* Full-Screen Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg flex items-center justify-center">
          <div className="flex flex-col items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={handleMenuClick}
                className="font-heading text-4xl md:text-5xl tracking-heading uppercase text-foreground hover:text-[hsl(var(--gold-primary))] transition-colors duration-300"
                data-testid={`menu-${item.key}`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Design Credit - Mobile Only */}
            <a
              href="https://www.onixxstudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden mt-8 px-3 py-1.5 text-xs font-medium tracking-wide bg-background/80 backdrop-blur-sm border border-[hsl(var(--gold-primary))]/30 rounded-md hover-elevate active-elevate-2 transition-all"
              data-testid="link-design-credit-mobile"
            >
              <span className="text-[hsl(var(--gold-primary))]">DESIGN BY ONIXX</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
