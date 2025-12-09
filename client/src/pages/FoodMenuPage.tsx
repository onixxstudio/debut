import Navigation from "@/components/Navigation";
import foodMenuImage from "@assets/Debut Restaurant Food Menu_1760261547227.jpeg";

export default function FoodMenuPage() {
  return (
    <div className="relative min-h-screen">
      <Navigation />
      <section className="pt-24 md:pt-28 pb-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-heading font-light mb-4">
              Food Menu
            </h1>
            <div className="w-20 h-1 bg-[hsl(var(--gold-primary))] mx-auto"></div>
          </div>
          
          <div className="bg-card border border-border rounded-lg overflow-hidden shadow-lg">
            <img
              src={foodMenuImage}
              alt="Debut Restaurant Food Menu"
              className="w-full h-auto object-contain"
              data-testid="img-food-menu"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
