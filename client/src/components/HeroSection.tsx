import { Link } from "wouter";
import { ChevronRight, Instagram, Facebook, Twitter, Calendar } from "lucide-react";

export default function HeroSection() {
  const blocks = [
    {
      title: "Menu",
      description: "Gourmet dishes crafted with precision",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop",
      href: "/menu",
      testId: "card-menu-block"
    },
    {
      title: "Reservation",
      description: "Experience fine dining excellence",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
      href: "/book",
      testId: "card-reservation-block"
    },
    {
      title: "Our Restaurant",
      description: "Discover our luxurious bar & lounge",
      image: "/attached_assets/IMG_0580_1760687930829.jpg",
      href: "/about",
      testId: "card-restaurant-block"
    }
  ];

  return (
    <section className="h-screen relative bg-[#1a1a1a]">
      {/* Desktop Layout */}
      <div className="hidden md:flex h-full">
        {/* Left Section - Big Button with Image */}
        <div className="relative flex-1 p-4">
          <div className="relative w-full h-full rounded-lg border border-border overflow-hidden">
            <img
              src="/attached_assets/IMG_0579 2_1760687688482.jpg"
              alt="Restaurant interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
            
            {/* Debut Logo */}
            <div className="absolute top-1/2 left-8 -translate-y-1/2 z-10" data-testid="img-debut-logo">
              <img
                src="/attached_assets/debut logo no bg_1760776341707.png"
                alt="Debut Bar & Restaurant"
                className="w-48 lg:w-64 xl:w-80 h-auto drop-shadow-2xl"
              />
            </div>

            {/* Book a Table Icon - Small */}
            <Link
              href="/book"
              className="absolute top-4 right-4 z-20 block hover-elevate active-elevate-2"
              data-testid="button-book-table-hero"
            >
              <div className="bg-[hsl(var(--gold-primary))] rounded-full p-3 shadow-lg">
                <Calendar className="h-5 w-5 text-black" strokeWidth={2} />
              </div>
            </Link>

            {/* Social Media Icons */}
            <div className="absolute bottom-4 right-4 z-20">
              <div className="bg-background border border-border rounded-lg p-2 shadow-lg">
                <div className="flex flex-row gap-2">
                  <a
                    href="https://www.instagram.com/debutbar.ca/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full border border-border bg-background/40 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-300"
                    aria-label="Instagram"
                    data-testid="link-instagram"
                  >
                    <Instagram className="h-4 w-4" strokeWidth={1.5} />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61581988111686"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full border border-border bg-background/40 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-300"
                    aria-label="Facebook"
                    data-testid="link-facebook"
                  >
                    <Facebook className="h-4 w-4" strokeWidth={1.5} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full border border-border bg-background/40 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-300"
                    aria-label="Twitter"
                    data-testid="link-twitter"
                  >
                    <Twitter className="h-4 w-4" strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Blocks */}
        <div className="lg:flex lg:w-[30%] flex-col p-6 gap-6 bg-background/50 backdrop-blur-sm">
          {blocks.map((block, index) => (
            <Link
              key={index}
              href={block.href}
              className="flex-1 relative overflow-hidden group cursor-pointer hover-elevate active-elevate-2 transition-all rounded-md border bg-card text-card-foreground shadow-sm"
              data-testid={block.testId}
            >
              <div className="absolute inset-0">
                <img
                  src={block.image}
                  alt={block.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
              </div>
              <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                <h3 className="font-heading text-xl tracking-heading uppercase mb-2 text-[hsl(var(--gold-primary))]">
                  {block.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {block.description}
                </p>
                <div className="flex items-center text-sm text-[hsl(var(--gold-primary))] font-heading tracking-nav uppercase">
                  Explore
                  <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col h-full overflow-hidden pt-16">
        {/* Top Image Button - 55% of available height */}
        <div className="relative flex-[55]">
          <div className="relative w-full h-full p-3">
            <div className="relative w-full h-full rounded-lg border border-border overflow-hidden">
              <img
                src="/attached_assets/IMG_0579 2_1760687688482.jpg"
                alt="Restaurant interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
              
              {/* Debut Logo - Mobile */}
              <div className="absolute top-1/2 left-4 -translate-y-1/2 z-10" data-testid="img-debut-logo-mobile">
                <img
                  src="/attached_assets/debut logo no bg_1760776341707.png"
                  alt="Debut Bar & Restaurant"
                  className="w-32 h-auto drop-shadow-2xl"
                />
              </div>

              {/* Book a Table Icon */}
              <Link
                href="/book"
                className="absolute top-3 right-3 z-20 block hover-elevate active-elevate-2"
                data-testid="button-book-table-hero-mobile"
              >
                <div className="bg-[hsl(var(--gold-primary))] rounded-full p-2.5 shadow-lg">
                  <Calendar className="h-4 w-4 text-black" strokeWidth={2} />
                </div>
              </Link>

              {/* Social Media Icons */}
              <div className="absolute bottom-3 right-3 z-20">
                <div className="bg-background border border-border rounded-lg p-1.5 shadow-lg">
                  <div className="flex flex-row gap-1.5">
                    <a
                      href="https://www.instagram.com/debutbar.ca/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 rounded-full border border-border bg-background/40 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-300"
                      aria-label="Instagram"
                      data-testid="link-instagram-mobile"
                    >
                      <Instagram className="h-3.5 w-3.5" strokeWidth={1.5} />
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=61581988111686"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 rounded-full border border-border bg-background/40 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-300"
                      aria-label="Facebook"
                      data-testid="link-facebook-mobile"
                    >
                      <Facebook className="h-3.5 w-3.5" strokeWidth={1.5} />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 rounded-full border border-border bg-background/40 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-300"
                      aria-label="Twitter"
                      data-testid="link-twitter-mobile"
                    >
                      <Twitter className="h-3.5 w-3.5" strokeWidth={1.5} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Buttons - 45% of available height */}
        <div className="flex-[45] flex flex-col px-3 pb-3 gap-2">
          {blocks.map((block, index) => (
            <Link
              key={index}
              href={block.href}
              className="flex-1 relative overflow-hidden group cursor-pointer hover-elevate active-elevate-2 transition-all rounded-lg border border-border bg-card text-card-foreground shadow-sm min-h-0"
              data-testid={`${block.testId}-mobile`}
            >
              <div className="absolute inset-0">
                <img
                  src={block.image}
                  alt={block.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
              </div>
              <div className="relative z-10 px-3 py-2 h-full flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading text-sm tracking-heading uppercase text-[hsl(var(--gold-primary))] line-clamp-1">
                    {block.title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-1 hidden xs:block">
                    {block.description}
                  </p>
                </div>
                <ChevronRight className="ml-2 h-4 w-4 text-[hsl(var(--gold-primary))] flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
