import { Coffee, Snowflake, Leaf, Sparkles, X } from "lucide-react";
import Layout from "@/components/Layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";

type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  image?: string;
  ingredients: string[];
};
const menuCategories = [
  {
    name: "Espresso Classics",
    icon: Coffee,
    items: [
      {
        id: "espresso",
        name: "Espresso",
        description: "Rich and bold single shot",
        price: "$3.50",
        image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
        ingredients: ["Espresso beans", "Water"],
      },
      {
        id: "double-espresso",
        name: "Double Espresso",
        description: "Intense double shot",
        price: "$4.50",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
        ingredients: ["Double espresso beans", "Water"],
      },
      {
        id: "americano",
        name: "Americano",
        description: "Espresso with hot water",
        price: "$4.00",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
        ingredients: ["Espresso", "Hot water"],
      },
      {
        id: "macchiato",
        name: "Macchiato",
        description: "Espresso with a dollop of foam",
        price: "$4.00",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
        ingredients: ["Espresso", "Milk foam"],
      },
    ],
  },
  {
    name: "Milk-Based",
    icon: Sparkles,
    items: [
      {
        id: "gold-latte",
        name: "Signature Gold Latte",
        description: "Our specialty with vanilla and caramel",
        price: "$6.50",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
        ingredients: ["Espresso", "Milk", "Vanilla", "Caramel"],
      },
      {
        id: "cappuccino",
        name: "Cappuccino",
        description: "Equal parts espresso, steamed milk, foam",
        price: "$5.20",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
        ingredients: ["Espresso", "Steamed milk", "Milk foam"],
      },
    ],
  },
];



const Menu = () => {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-display text-5xl md:text-6xl font-semibold mb-4">
            Our <span className="text-gradient-gold">Menu</span>
          </h1>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Discover our curated selection of premium coffee and beverages.
          </p>
        </div>
      </section>

      {/* Menu */}
      <section className="py-16">
        <div className="container mx-auto px-6 space-y-20">
          {menuCategories.map((category) => (
            <div key={category.name}>
              <div className="flex items-center gap-4 mb-10">
                <category.icon className="h-6 w-6 text-primary" />
                <h2 className="font-display text-3xl font-semibold text-gradient-gold">
                  {category.name}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedItem(item)}
                    className="cursor-pointer flex gap-4 items-center p-5 rounded-lg border border-border/50 bg-card/50 hover:border-primary/40 hover:bg-card transition"
                  >
                    {/* Coffee Image */}
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-md shrink-0"
                      />
                    )}

                    {/* Text Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold">{item.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.description}
                      </p>
                      <p className="text-primary text-lg font-semibold mt-2">
                        {item.price}
                      </p>
                    </div>
                  </div>

                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
          <div className="bg-zinc-900 rounded-xl max-w-md w-full p-6 relative">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-white"
            >
              <X />
            </button>

            {selectedItem.image && (
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="rounded-lg mb-4"
              />
            )}

            <h2 className="text-2xl font-bold">{selectedItem.name}</h2>
            <p className="text-muted-foreground mt-2">
              {selectedItem.description}
            </p>

            <h3 className="mt-4 font-semibold">Ingredients</h3>
            <ul className="list-disc list-inside text-sm text-muted-foreground">
              {selectedItem.ingredients.map((ing) => (
                <li key={ing}>{ing}</li>
              ))}
            </ul>

            <p className="text-primary text-xl font-semibold mt-4">
              {selectedItem.price}
            </p>

            <Button
              className="w-full mt-6 bg-yellow-500 text-black"
              onClick={() =>
                window.open(
                  `https://wa.me/917020242878?text=I want to order ${selectedItem.name}`,
                  "_blank"
                )
              }
            >
              Order Now
            </Button>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Menu;
