import { Link } from "react-router-dom";
import { ArrowRight, Coffee, Star, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const hotOrders = [
   {
    name: "Masala Chai",
    description: "Traditional Indian tea with spices",
    price: "₹40",
    tag: "Popular",
  },
  {
    name: "Cold Coffee",
    description: "Chilled coffee with rich cream",
    price: "₹120",
    tag: "Best Seller",
  },
  {
    name: "Veg Cheese Sandwich",
    description: "Grilled sandwich with fresh veggies",
    price: "₹90",
    tag: "Hot",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }} />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-fade-in">
              <Coffee className="h-4 w-4 text-primary" />
              <span className="text-sm font-body text-primary uppercase tracking-wider">
                Premium Coffee Experience
              </span> 
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold mb-6 animate-fade-in" style={{ animationDelay: '0.1s', opacity: 0 }}>
              Welcome to{" "}
              <span className="text-gradient-gold">Cafe Delight</span>
            </h1>

            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0 }}>
              Where every cup is crafted with passion and served with elegance. 
              Experience the perfect blend of tradition and luxury.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.3s', opacity: 0 }}>
              <Button asChild size="lg" className="group hover-gold-glow">
                <Link to="/menu">
                  Explore Menu
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
                <Link to="/order">Order Now</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Hot Orders Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Star className="h-5 w-5 text-primary fill-primary" />
              <span className="text-sm font-body text-primary uppercase tracking-wider">
                Hot Right Now
              </span>
              <Star className="h-5 w-5 text-primary fill-primary" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-gradient-gold">
              Today's Hot Orders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {hotOrders.map((item, index) => (
              <div
                key={item.name}
                className="group relative bg-card border border-border/50 rounded-lg p-8 transition-all duration-500 hover:border-primary/50 hover-gold-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/30">
                  <span className="text-xs font-body text-primary uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>

                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Coffee className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                    {item.name}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl text-primary font-semibold">
                    {item.price}
                  </span>
                  <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">
                    Order
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Coffee className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">Premium Beans</h3>
              <p className="font-body text-sm text-muted-foreground">
                Sourced from the finest coffee regions around the world
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">Expert Baristas</h3>
              <p className="font-body text-sm text-muted-foreground">
                Trained artisans crafting your perfect cup every time
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">Quick Service</h3>
              <p className="font-body text-sm text-muted-foreground">
                Fast, friendly service without compromising quality
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
              Ready for Your <span className="text-gradient-gold">Perfect Cup</span>?
            </h2>
            <p className="font-body text-muted-foreground mb-8">
              Visit us today or order ahead for a seamless experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="hover-gold-glow">
                <Link to="/order">
                  Order via WhatsApp
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
                <Link to="/contact">Find Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;