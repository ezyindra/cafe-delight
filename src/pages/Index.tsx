import { Link } from "react-router-dom";
import Balatro from "@/components/Balatro";
import { ArrowRight, Coffee, Star, Clock, X } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type HotOrder = {
  name: string;
  description: string;
  price: string;
  tag: string;
  image: string;
  ingredients: string[];
};

const hotOrders: HotOrder[] = [
  {
    name: "Masala Chai",
    description: "Traditional Indian tea with spices",
    price: "₹40",
    tag: "Popular",
    image: "https://images.unsplash.com/photo-1604908177522-402f8a1e88c1?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Tea leaves", "Milk", "Ginger", "Cardamom", "Cloves"],
  },
  {
    name: "Cold Coffee",
    description: "Chilled coffee with rich cream",
    price: "₹120",
    tag: "Best Seller",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Coffee", "Milk", "Sugar", "Ice cream"],
  },
  {
    name: "Veg Cheese Sandwich",
    description: "Grilled sandwich with fresh veggies",
    price: "₹90",
    tag: "Hot",
    image: "https://images.unsplash.com/photo-1528731708534-816fe59f90cb?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Bread", "Cheese", "Capsicum", "Onion", "Butter"],
  },
];

const Index = () => {
  const [selectedItem, setSelectedItem] = useState<HotOrder | null>(null);

  return (
    <Layout>
      {/* ================= HERO WITH BALATRO BACKGROUND ================= */}
      <section className="relative min-h-[90vh] overflow-hidden flex items-center justify-center">
        {/* Balatro Background */}
        <div className="absolute inset-0 z-0">
          <Balatro isRotate={false} mouseInteraction={true} pixelFilter={700} />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-6 text-center">
          <h1 className="font-display text-6xl md:text-7xl font-semibold mb-6">
            Welcome to <span className="text-gradient-gold">Cafe Delight</span>
          </h1>

          <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
            Where every cup is crafted with passion and served with elegance.
          </p>

          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="hover-gold-glow">
              <Link to="/menu">
                Explore Menu <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg">
              <Link to="/order">Order Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ================= HOT ORDERS ================= */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-5xl font-semibold text-center mb-16 text-gradient-gold">
            Today's Hot Orders
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {hotOrders.map((item) => (
              <div
                key={item.name}
                onClick={() => setSelectedItem(item)}
                className="cursor-pointer bg-card border border-border/50 rounded-lg p-8 hover:border-primary/50 hover:scale-[1.02] transition"
              >
                <Coffee className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-2xl font-semibold">{item.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>

                <div className="flex justify-between items-center mt-6">
                  <span className="text-primary text-2xl font-semibold">
                    {item.price}
                  </span>
                  <span className="text-xs text-primary uppercase">
                    {item.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOT ORDER MODAL ================= */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
          <div className="bg-zinc-900 rounded-xl max-w-md w-full p-6 relative">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-white"
            >
              <X />
            </button>

            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />

            <h2 className="text-3xl font-bold">{selectedItem.name}</h2>
            <p className="text-muted-foreground mt-2">
              {selectedItem.description}
            </p>

            <h3 className="mt-4 font-semibold">Ingredients</h3>
            <ul className="list-disc list-inside text-sm text-muted-foreground">
              {selectedItem.ingredients.map((ing) => (
                <li key={ing}>{ing}</li>
              ))}
            </ul>

            <p className="text-primary text-2xl font-semibold mt-4">
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
              Order Now via WhatsApp
            </Button>
          </div>
        </div>
      )}

      {/* ================= FEATURES ================= */}
      <section className="py-24">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
          <div>
            <Coffee className="mx-auto h-10 w-10 text-primary mb-4" />
            <h3 className="font-semibold text-xl">Premium Beans</h3>
          </div>
          <div>
            <Star className="mx-auto h-10 w-10 text-primary mb-4" />
            <h3 className="font-semibold text-xl">Expert Baristas</h3>
          </div>
          <div>
            <Clock className="mx-auto h-10 w-10 text-primary mb-4" />
            <h3 className="font-semibold text-xl">Quick Service</h3>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
