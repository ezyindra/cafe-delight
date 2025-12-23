import { Coffee, Heart, Award, Users } from "lucide-react";
import Layout from "@/components/Layout";

const values = [
  {
    icon: Coffee,
    title: "Quality First",
    description: "We source only the finest beans from sustainable farms around the world.",
  },
  {
    icon: Heart,
    title: "Passion Driven",
    description: "Every cup is crafted with love and dedication to the art of coffee.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Our baristas are trained to deliver perfection in every brew.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We believe in creating a warm, welcoming space for everyone.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-display text-5xl md:text-6xl font-semibold mb-4">
            Our <span className="text-gradient-gold">Story</span>
          </h1>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            A journey of passion, coffee, and creating moments that matter.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
                  Where It All <span className="text-gradient-gold">Began</span>
                </h2>
                <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                  <p>
                    Indra's Cafe was born from a simple dream – to create a sanctuary 
                    where exceptional coffee meets timeless elegance. Founded in 2020, 
                    our cafe quickly became a beloved destination for coffee enthusiasts 
                    and casual visitors alike.
                  </p>
                  <p>
                    Our founder, inspired by travels through the coffee regions of 
                    Ethiopia, Colombia, and Indonesia, envisioned a space that honors 
                    the rich traditions of coffee while embracing modern luxury.
                  </p>
                  <p>
                    Today, we continue to uphold that vision, serving each cup with 
                    the same passion and dedication that started this journey.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 via-card to-primary/10 border border-primary/20 flex items-center justify-center">
                  <Coffee className="w-32 h-32 text-primary/50" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-lg bg-primary/10 border border-primary/30" />
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-primary/5 border border-primary/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold">
              Our <span className="text-gradient-gold">Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {values.map((value) => (
              <div key={value.title} className="text-center group">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{value.title}</h3>
                <p className="font-body text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl text-primary/30 mb-6">"</div>
            <blockquote className="font-display text-2xl md:text-3xl italic text-foreground/90 mb-6">
              Coffee is not just a drink, it's a moment of pause in the chaos of life. 
              Here at Indra's, we make sure every moment counts.
            </blockquote>
            <cite className="font-body text-muted-foreground text-sm uppercase tracking-wider">
              — Indra, Founder
            </cite>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;