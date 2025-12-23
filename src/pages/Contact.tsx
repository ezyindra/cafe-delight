import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-display text-5xl md:text-6xl font-semibold mb-4">
            Get In <span className="text-gradient-gold">Touch</span>
          </h1>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            We'd love to hear from you. Visit us or reach out anytime.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Left Info */}
            <div className="space-y-6">
              {/* Location */}
              <div className="bg-card border border-border/50 rounded-lg p-6">
                <div className="flex gap-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-sm text-muted-foreground">
                      Cafe Delight, Aurangabad, Maharashtra
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-card border border-border/50 rounded-lg p-6">
                <div className="flex gap-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-sm text-muted-foreground">
                      +91 7020242878
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-card border border-border/50 rounded-lg p-6">
                <div className="flex gap-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-sm text-muted-foreground">
                      hello@cafedelight.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-card border border-border/50 rounded-lg p-6">
                <div className="flex gap-4">
                  <Clock className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Hours</h3>
                    <p className="text-sm text-muted-foreground">
                      Mon–Sun: 7:00 AM – 10:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Map + Social */}
            <div className="space-y-6">
              {/* GOOGLE MAP */}
              <div className="rounded-lg overflow-hidden border border-border/50">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60036.21967786657!2d75.29870999174025!3d19.871082692332024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb99c3c691aceb%3A0x72a4b18d3aeb12a2!2sCaf%C3%A9%20Coffee%20Day!5e0!3m2!1sen!2sin!4v1766393724431!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

              </div>

              {/* Social */}
              <div className="bg-card border border-border/50 rounded-lg p-6">
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" aria-label="Instagram">
                    <Instagram />
                  </a>
                  <a href="#" aria-label="Facebook">
                    <Facebook />
                  </a>
                  <a href="#" aria-label="Twitter">
                    <Twitter />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
