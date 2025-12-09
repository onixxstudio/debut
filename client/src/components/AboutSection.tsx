export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen overflow-y-auto pt-24 md:pt-28 pb-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Photo Gallery */}
          <div className="space-y-4 lg:sticky lg:top-28 lg:order-1">
            {/* Large Top Photo */}
            <div className="w-full h-72 md:h-80 lg:h-[400px] overflow-hidden rounded-lg border border-border">
              <img
                src="/attached_assets/IMG_0581_1760689341956.jpg"
                alt="Restaurant dining area"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Bottom Two Photos */}
            <div className="grid grid-cols-2 gap-4">
              <div className="w-full h-40 md:h-48 lg:h-56 overflow-hidden rounded-lg border border-border">
                <img
                  src="/attached_assets/IMG_0578_1760689341956.jpg"
                  alt="Golden arch entrance"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="w-full h-40 md:h-48 lg:h-56 overflow-hidden rounded-lg border border-border">
                <img
                  src="/attached_assets/IMG_0575_1760689341956.jpg"
                  alt="Booth seating area"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8 lg:order-2">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-heading font-light mb-4">
                Our Restaurant
              </h2>
              <div className="w-20 h-1 bg-[hsl(var(--gold-primary))]"></div>
            </div>

            <div className="space-y-8 text-base md:text-lg leading-relaxed">
              <p className="text-foreground">
                Debut Bar & Restaurant is a modern dining and nightlife destination in Barrie, Ontario, blending bold flavors with a vibrant, art-forward atmosphere. Designed for those who appreciate quality food, curated drinks, and dynamic energy, Debut transitions seamlessly from evening dining to late-night socializing.
              </p>

              <div>
                <h3 className="font-heading text-xl md:text-2xl tracking-heading font-light mb-3 text-[hsl(var(--gold-primary))]">
                  Experience
                </h3>
                <p className="text-muted-foreground">
                  The space features a sleek, high-energy interior with ambient lighting, immersive visuals, and a premium bar. Whether you're here for dinner, cocktails, or after-hours vibes, the environment evolves with the night. Choose from open seating, intimate booths, or the lounge area for a more exclusive feel.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl md:text-2xl tracking-heading font-light mb-3 text-[hsl(var(--gold-primary))]">
                  Cuisine
                </h3>
                <p className="text-muted-foreground">
                  Our menu highlights Global-inspired techniques with contemporary flair, using fresh, high-quality ingredients. Dishes are designed for sharing, with rich spices, smoky tandoor finishes, and modern presentation. Options include slow-cooked curries, steamed buns, grain bowls, and grilled proteins, alongside a late-night menu of indulgent small plates.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl md:text-2xl tracking-heading font-light mb-3 text-[hsl(var(--gold-primary))]">
                  Bar & Cocktails
                </h3>
                <p className="text-muted-foreground">
                  The bar offers handcrafted cocktails that balance tradition and innovation—think spiced infusions, herbal accents, and bold flavor pairings. A selection of local craft beers, premium spirits, and curated wines complements the offerings.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl md:text-2xl tracking-heading font-light mb-3 text-[hsl(var(--gold-primary))]">
                  Culture & Community
                </h3>
                <p className="text-muted-foreground">
                  Debut serves as a cultural hub, supporting local artists, musicians, and creators through monthly events, pop-ups, and themed nights. We celebrate creativity, connection, and the pulse of Barrie's evolving scene.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl md:text-2xl tracking-heading font-light mb-3 text-[hsl(var(--gold-primary))]">
                  Private Events
                </h3>
                <p className="text-muted-foreground">
                  Semi-private and full venue bookings are available for special occasions, corporate gatherings, and launches. Custom menus and dedicated service ensure a seamless experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
