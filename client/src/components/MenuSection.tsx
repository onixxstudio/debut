import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type MenuItem = {
  name: string;
  description: string;
};

type MenuCategory = {
  note?: string;
  items: MenuItem[];
};

export default function MenuSection() {
  const menuData: Record<string, MenuCategory> = {
    "Appetizers & Shareables": {
      items: [
        { name: "Onion Rings", description: "Golden fried onion rings served with our signature dipping sauce" },
        { name: "Veggie Medley", description: "Seasonal roasted vegetables with herbs and olive oil" },
        { name: "Chicken Quesadilla", description: "Grilled flour tortilla filled with seasoned chicken and melted cheese" },
        { name: "Warm Spinach Dip", description: "Creamy spinach and artichoke dip served with tortilla chips" },
        { name: "Drums of Heaven", description: "Spiced chicken drumsticks tossed in our signature heavenly sauce" },
        { name: "Florentine Mussels", description: "Mussels cooked with spinach, cream, and parmesan" },
        { name: "Jalapeno Poppers", description: "Crispy breaded jalapenos stuffed with cream cheese" },
        { name: "Bruschetta", description: "Toasted bread topped with goat and mozzarella cheese, fresh tomatoes, and balsamic glaze" },
        { name: "Nachos", description: "Crispy tortilla chips topped with cheese, jalapeños, tomatoes, and sour cream" },
        { name: "Signature Chicken Wings", description: "10 wings served with your choice of sauce" },
        { name: "Marinara Mussels", description: "Spicy mussels in a white wine sauce with fresh herbs and marinara base" },
      ],
    },
    "Pasta": {
      note: "All pasta dishes served with garlic bread.",
      items: [
        { name: "Ravioli Pasta", description: "Stuffed pasta pockets served with your choice of béchamel or cream sauce" },
        { name: "Kids Pasta", description: "Smaller portion of pasta with a mild sauce, perfect for younger guests" },
        { name: "Seafood Pasta", description: "A delightful mix of mussels, salmon, and shrimp over pasta in a light sauce" },
        { name: "Vegetarian Fettuccine Alfredo", description: "Fettuccine pasta tossed in a creamy parmesan sauce with seasonal vegetables" },
        { name: "Chicken Parmesan Pasta", description: "Breaded chicken topped with marinara and melted cheese over pasta" },
      ],
    },
    "Salad Bowls": {
      note: "All salads served with garlic bread.",
      items: [
        { name: "Caesar Salad", description: "Crisp romaine lettuce, parmesan cheese, croutons, and Caesar dressing" },
        { name: "Chicken BBQ Cobb Salad", description: "Mixed greens topped with BBQ chicken, bacon, eggs, avocado, and blue cheese" },
        { name: "Cheese Mediterranean Salad", description: "Mixed greens with feta cheese, olives, tomatoes, and cucumber in a vinaigrette" },
        { name: "Teriyaki Salmon Salad", description: "Fresh greens with teriyaki-glazed salmon, mandarin oranges, and sesame dressing" },
      ],
    },
    "Handhelds & Burgers": {
      note: "Served with your choice of fries or salad.",
      items: [
        { name: "Garden Vegetable Wrap", description: "Fresh vegetables and hummus wrapped in a soft tortilla" },
        { name: "Chicken Bacon Club", description: "Grilled chicken, bacon, lettuce, tomato, and mayo on toasted bread" },
        { name: "Chicken California Sandwich", description: "Grilled chicken with avocado, sprouts, and aioli on a ciabatta bun" },
        { name: "Debut Veggie Wrap", description: "Our signature vegetable medley with special sauce in a spinach wrap" },
        { name: "Debut Double-Stacked Cheddar Burger", description: "Two beef patties with melted cheddar, lettuce, tomato, and special sauce" },
        { name: "Swiss & Mushroom Burger", description: "Grilled beef patty topped with sautéed mushrooms and Swiss cheese" },
      ],
    },
    "Soups": {
      note: "Served with garlic bread.",
      items: [
        { name: "Broccoli Cheddar", description: "Creamy soup with broccoli florets and sharp cheddar cheese" },
        { name: "Tuscan Bean", description: "Hearty Italian-inspired soup with white beans, vegetables, and herbs" },
      ],
    },
    "Steaks, Grills & Mains": {
      note: "Served with your choice of fries or salad.",
      items: [
        { name: "Haddock Fish & Chips", description: "Haddock served with fries and tartar sauce" },
        { name: "Angus Beef Pot Roast", description: "Slow-cooked Angus beef with root vegetables and rich gravy" },
        { name: "BBQ Spareribs", description: "Choice of half rack with wings or full rack, glazed with our signature BBQ sauce" },
        { name: "Teriyaki Grilled Salmon", description: "Fresh salmon fillet glazed with teriyaki sauce and grilled to perfection" },
        { name: "Chicken with Mushroom Sauce", description: "Tender chicken breast topped with a creamy mushroom sauce" },
        { name: "New York Steak with Mushroom Sauce", description: "Grilled to your preference and topped with a savory mushroom sauce" },
      ],
    },
    "Fuzion by Debut": {
      note: "Fusion bowls served with rice and choice of naan or tortilla.",
      items: [
        { name: "Tandoori Chicken", description: "Chicken marinated and cooked in a traditional tandoor, served with rice and naan" },
        { name: "Chicken Teriyaki Bowl", description: "Grilled teriyaki chicken served over rice with stir-fried vegetables" },
        { name: "Burrito Bowl", description: "Rice, beans, corn, avocado, and your choice of protein with Mexican-inspired flavors" },
        { name: "Tacos", description: "Three tacos per order with your choice of protein, topped with fresh salsa and cilantro" },
        { name: "Butter Chicken", description: "Indian curry with tender chicken in a creamy tomato sauce, served with rice" },
        { name: "Chili Chicken Bowl", description: "Spicy stir-fried chicken with bell peppers and onions over steamed rice" },
      ],
    },
  };

  const handleCategorySelect = (category: string) => {
    const element = document.getElementById(`section-${category.toLowerCase().replace(/\s+/g, '-')}`);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  return (
    <section id="menu" className="min-h-screen overflow-y-auto pt-24 md:pt-28 pb-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-heading font-light mb-4">
            Our Menu
          </h2>
          <div className="w-20 h-1 bg-[hsl(var(--gold-primary))] mx-auto mb-6"></div>
          <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto">
            Expertly crafted dishes featuring the finest ingredients and innovative culinary techniques
          </p>
        </div>

        {/* Sticky Dropdown Navigation */}
        <div className="sticky top-20 md:top-24 z-30 mb-12 bg-background/95 backdrop-blur-md py-4 -mx-4 px-4 md:-mx-8 md:px-8">
          <div className="max-w-6xl mx-auto">
            <Select onValueChange={handleCategorySelect}>
              <SelectTrigger 
                className="w-full md:w-80 mx-auto border-[hsl(var(--gold-primary))] text-foreground"
                data-testid="select-menu-category"
              >
                <SelectValue placeholder="Jump to a section..." />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(menuData).map((category) => (
                  <SelectItem 
                    key={category} 
                    value={category}
                    data-testid={`option-${category.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-16">
          {Object.entries(menuData).map(([category, data]) => (
            <div 
              key={category} 
              id={`section-${category.toLowerCase().replace(/\s+/g, '-')}`}
              data-testid={`section-${category.toLowerCase().replace(/\s+/g, '-')}`}
              className="scroll-mt-32 md:scroll-mt-36"
            >
              <h3 className="font-heading text-2xl md:text-3xl tracking-heading font-light mb-4 text-[hsl(var(--gold-primary))]">
                {category}
              </h3>
              
              {data.note && (
                <p className="text-sm text-muted-foreground italic mb-6">{data.note}</p>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.items.map((item, index) => (
                  <div
                    key={index}
                    className="border-b border-border/50 pb-4"
                    data-testid={`item-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <h4 className="font-display text-base md:text-lg mb-2">
                      {item.name}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-6 bg-card/50 border border-border rounded-lg">
          <p className="text-sm md:text-base text-muted-foreground text-center">
            Add your choice of <span className="text-foreground font-medium">Chicken</span>, 
            <span className="text-foreground font-medium"> Beef</span>, or 
            <span className="text-foreground font-medium"> Beyond Meat</span> protein to any dish
          </p>
        </div>
      </div>
    </section>
  );
}
