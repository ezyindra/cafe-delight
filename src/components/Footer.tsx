import { Coffee, Instagram, Facebook, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <Coffee className="h-8 w-8 text-primary" />
              <span className="font-display text-2xl font-semibold text-gradient-gold">
              Cafe Delight
              </span>
            </Link>
            <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-md">
              Experience the art of coffee in an atmosphere of timeless elegance. 
              Every cup tells a story of passion, craftsmanship, and perfection.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-primary mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Home", "Menu", "About", "Order Us", "Contact"].map((link) => (
                <Link
                  key={link}
                  to={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "")}`}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm font-body"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg text-primary mb-4">Hours</h4>
            <div className="text-sm font-body text-muted-foreground space-y-1">
              <p>Mon - Fri: 7am - 10pm</p>
              <p>Saturday: 8am - 11pm</p>
              <p>Sunday: 8am - 9pm</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm font-body">
            © {new Date().getFullYear()} Cafe Delight. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;