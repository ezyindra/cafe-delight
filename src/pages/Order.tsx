import { MessageCircle, Phone, Clock, Coffee } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const Order = () => {
  const whatsappNumber = "7020242878"; // Replace with actual number
  const phoneNumber = "+91 7020242878"; // Replace with actual number
  
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi! I'd like to place an order from Cafe Delight.`;
  const phoneLink = `tel:${whatsappNumber}`;

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-display text-5xl md:text-6xl font-semibold mb-4">
            Order <span className="text-gradient-gold">Now</span>
          </h1>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Skip the queue! Place your order ahead via WhatsApp or give us a call.
          </p>
        </div>
      </section>

      {/* Order Options */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
            {/* WhatsApp */}
            <div className="bg-card border border-border/50 rounded-lg p-8 text-center transition-all duration-300 hover:border-primary/50 hover-gold-glow">
              <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-10 w-10 text-green-500" />
              </div>
              <h2 className="font-display text-2xl font-semibold mb-3">
                Order via WhatsApp
              </h2>
              <p className="font-body text-sm text-muted-foreground mb-6">
                Quick and easy! Send us your order on WhatsApp and we'll have it ready for pickup.
              </p>
              <Button 
                asChild 
                size="lg" 
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>

            {/* Phone */}
            <div className="bg-card border border-border/50 rounded-lg p-8 text-center transition-all duration-300 hover:border-primary/50 hover-gold-glow">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Phone className="h-10 w-10 text-primary" />
              </div>
              <h2 className="font-display text-2xl font-semibold mb-3">
                Call to Order
              </h2>
              <p className="font-body text-sm text-muted-foreground mb-6">
                Prefer to speak with us? Give us a call and we'll take your order over the phone.
              </p>
              <Button 
                asChild 
                size="lg" 
                className="w-full hover-gold-glow"
              >
                <a href={phoneLink}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call {phoneNumber}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold">
              How It <span className="text-gradient-gold">Works</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 text-primary font-display text-xl font-semibold">
                1
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">Choose Your Method</h3>
              <p className="font-body text-sm text-muted-foreground">
                WhatsApp for quick text ordering or call for a personal touch
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 text-primary font-display text-xl font-semibold">
                2
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">Place Your Order</h3>
              <p className="font-body text-sm text-muted-foreground">
                Tell us what you'd like from our menu and any customizations
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 text-primary font-display text-xl font-semibold">
                3
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">Pick Up & Enjoy</h3>
              <p className="font-body text-sm text-muted-foreground">
                We'll notify you when your order is ready for pickup
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto bg-card border border-border/50 rounded-lg p-8">
            <div className="flex items-start gap-4">
              <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-lg font-semibold mb-2">Order Timing</h3>
                <p className="font-body text-sm text-muted-foreground">
                  Orders are typically ready within 10-15 minutes. During busy hours, 
                  we'll let you know the estimated wait time when you place your order.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Order;