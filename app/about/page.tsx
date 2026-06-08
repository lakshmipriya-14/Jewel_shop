import Image from "next/image";
import Link from "next/link";
import { Award, Users, Gem, Heart } from "lucide-react";

const values = [
  { icon: Gem, title: "Pure Craftsmanship", desc: "Every piece is handcrafted by master artisans with 30+ years of experience in traditional and modern jewellery making." },
  { icon: Award, title: "Certified Quality", desc: "All our jewellery is certified 92.5 sterling silver. We never compromise on purity or quality." },
  { icon: Users, title: "Customer First", desc: "From personalised consultations to after-sales support, we&apos;re with you every step of the way." },
  { icon: Heart, title: "Made with Love", desc: "Each piece carries the passion and devotion of our artisans, making it truly special and unique." },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <div className="relative h-80 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1400&q=80" alt="About Venus Silver" fill className="object-cover" />
        <div className="absolute inset-0 bg-charcoal/65" />
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div>
            <p className="text-gold text-xs tracking-widest uppercase mb-3">Our Story</p>
            <h1 className="font-serif text-5xl font-bold mb-3">About Venus Silver</h1>
            <p className="text-white/70">Timeless Beauty. Pure Silver. Pure Passion.</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-3">Who We Are</p>
            <h2 className="font-serif text-4xl text-charcoal mb-6">A Heritage of Silver Excellence</h2>
            <div className="h-0.5 w-12 bg-gold mb-6" />
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Venus Silver was founded with a singular passion &mdash; to bring the timeless beauty of pure sterling silver to every home, at fair prices without compromising on quality.




              </p>

              <p>Based in the jewellery capital of South India, Madurai, our artisans combine centuries-old crafting techniques with contemporary designs to create pieces that are both traditional and modern.</p>


              <p>From intricate filigree work to minimalist everyday wear, every Venus Silver piece is a testament to our commitment to excellence, purity, and artistry.</p>

            </div>
            <div className="grid grid-cols-3 gap-6 mt-8">
              {[
                { number: "10,000+", label: "Happy Customers" },
                { number: "500+", label: "Designs" },
                { number: "30+", label: "Years Experience" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-serif text-3xl font-bold text-gold">{stat.number}</p>
                  <p className="text-xs text-muted tracking-wide mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-96 overflow-hidden rounded-sm">
            <Image src="https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=700&q=80" alt="Our Workshop" fill className="object-cover" />
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-10">
          <h2 className="section-title mb-2">Our Values</h2>
          <div className="gold-line" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map((v) => (
            <div key={v.title} className="luxury-card p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <v.icon size={24} className="text-gold" />
              </div>
              <h3 className="font-semibold text-charcoal mb-2">{v.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-charcoal rounded-sm p-12 text-center text-white">
          <p className="text-gold text-xs tracking-widest uppercase mb-3">Ready to Explore?</p>
          <h2 className="font-serif text-4xl font-bold mb-4">Discover Our Collections</h2>
          <p className="text-white/70 mb-8">Find the perfect piece for every occasion, or create a bespoke design that&apos;s uniquely yours.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/shop" className="btn-gold">Shop Now</Link>
            <Link href="/gold-customization" className="btn-outline-gold border-white text-white hover:bg-white hover:text-charcoal">Custom Orders</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
