import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";

export default function ContactPage() {
  const contactImage = "/attached_assets/IMG_0579 2_1760687688482.jpg";
  const galleryImages = [
    "/attached_assets/IMG_0574_1760689341956.jpg",
    "/attached_assets/IMG_0575_1760689341956.jpg",
    "/attached_assets/IMG_0578_1760689341956.jpg",
    "/attached_assets/IMG_0581_1760689341956.jpg"
  ];

  return (
    <>
      <Navigation />
      <section className="h-screen overflow-hidden bg-[#1a1a1a] p-2 md:p-4">
      <div className="h-full flex flex-col md:flex-row gap-2 md:gap-3">
        {/* Left Half - Photo Button */}
        <div className="flex-[40] md:flex-1 relative group overflow-hidden rounded-xl md:rounded-2xl cursor-pointer hover-elevate active-elevate-2">
          <img
            src={contactImage}
            alt="Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        {/* Right Half - 2x2 Grid of Buttons */}
        <div className="flex-[60] md:flex-1 grid grid-cols-2 gap-2 md:gap-3 grid-rows-2">
          {/* Get in Touch Button - Top Left */}
          <div className="relative group overflow-hidden rounded-xl md:rounded-2xl cursor-pointer hover-elevate active-elevate-2 bg-card/90 backdrop-blur-md border border-border" data-testid="button-get-in-touch">
            <div className="h-full flex flex-col items-center justify-center p-2 md:p-6">
              <h3 className="font-heading text-xs md:text-xl lg:text-2xl tracking-heading font-light text-center mb-1 md:mb-3">
                Get in Touch
              </h3>
              <div className="flex flex-col gap-0.5 md:gap-2 text-center">
                <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-muted-foreground">
                  <Mail className="w-3 h-3 md:w-4 md:h-4 text-[hsl(var(--gold-primary))]" strokeWidth={1.5} />
                  <span className="text-[10px] md:text-sm">info@debutbar.ca</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-muted-foreground">
                  <Phone className="w-3 h-3 md:w-4 md:h-4 text-[hsl(var(--gold-primary))]" strokeWidth={1.5} />
                  <span className="text-[10px] md:text-sm">+1  942 883 3288</span>
                </div>
                <div className="flex items-start gap-1 md:gap-2 text-xs md:text-sm text-muted-foreground mt-0.5 md:mt-1">
                  <MapPin className="w-3 h-3 md:w-4 md:h-4 text-[hsl(var(--gold-primary))] mt-0.5" strokeWidth={1.5} />
                  <span className="text-[10px] md:text-sm text-left">10 Dunlop St E, Barrie, ON L4M 1A3</span>
                </div>
              </div>
            </div>
          </div>

          {/* Photo Grid Button - Top Right */}
          <div className="relative group overflow-hidden rounded-xl md:rounded-2xl cursor-pointer hover-elevate active-elevate-2 bg-card/90 backdrop-blur-md border border-border" data-testid="button-photo-grid">
            <div className="h-full grid grid-cols-2 gap-1 md:gap-2 p-1 md:p-3">
              {galleryImages.map((img, idx) => (
                <div key={idx} className="bg-background rounded-lg overflow-hidden">
                  <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Google Map Directions - Bottom Left */}
          <div 
            className="relative group overflow-hidden rounded-xl md:rounded-2xl border border-border" 
            data-testid="button-map-view"
          >
            <iframe
              src="https://www.google.com/maps?q=Debut+Bar+and+Restaurant,10+Dunlop+St+E,Barrie,ON+L4M+1A3&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(90%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Debut Bar & Restaurant - 10 Dunlop St E, Barrie"
            />
          </div>

          {/* Social Media Grid Button - Bottom Right */}
          <div className="relative group overflow-hidden rounded-xl md:rounded-2xl bg-card/90 backdrop-blur-md border border-border" data-testid="button-social-grid">
            <div className="h-full grid grid-cols-2 gap-2 md:gap-4 p-2 md:p-6">
              <a
                href="https://www.instagram.com/debutbar.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-background rounded-lg hover-elevate active-elevate-2 cursor-pointer transition-all"
                aria-label="Instagram"
                data-testid="link-instagram-contact"
              >
                <Instagram className="w-6 h-6 md:w-10 md:h-10 text-[hsl(var(--gold-primary))]" strokeWidth={1.5} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61581988111686"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-background rounded-lg hover-elevate active-elevate-2 cursor-pointer transition-all"
                aria-label="Facebook"
                data-testid="link-facebook-contact"
              >
                <Facebook className="w-6 h-6 md:w-10 md:h-10 text-[hsl(var(--gold-primary))]" strokeWidth={1.5} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-background rounded-lg hover-elevate active-elevate-2 cursor-pointer transition-all"
                aria-label="Twitter"
                data-testid="link-twitter-contact"
              >
                <Twitter className="w-6 h-6 md:w-10 md:h-10 text-[hsl(var(--gold-primary))]" strokeWidth={1.5} />
              </a>
              <a
                href="mailto:info@debutbar.ca"
                className="flex items-center justify-center bg-background rounded-lg hover-elevate active-elevate-2 cursor-pointer transition-all"
                aria-label="Email"
                data-testid="link-email-contact"
              >
                <Mail className="w-6 h-6 md:w-10 md:h-10 text-[hsl(var(--gold-primary))]" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
