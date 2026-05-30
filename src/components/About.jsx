import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-cream/50">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl text-charcoal mb-6">Bringing the Heart of the Horn to Nairobi</h2>
            <p className="text-lg text-charcoal/80 mb-6 leading-relaxed">
              At Hashkies, we believe that food is more than just sustenance—it's a connection to our roots, our culture, and our community. Our journey started with a simple mission: to provide authentic, home-style Ethiopian and Somali cuisine that doesn't compromise on tradition but fits perfectly into the fast-paced life of Nairobi.
            </p>
            <p className="text-lg text-charcoal/80 mb-8 leading-relaxed">
              From our sourdough-fermented Anjera to our perfectly golden Mufo, every bite is crafted with care using family recipes passed down through generations. We source our spices directly from the region to ensure that every dish carries the unmistakable warmth and depth of East African flavors.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-terracotta text-2xl font-bold mb-1">100%</h4>
                <p className="text-sm text-charcoal/70 uppercase tracking-wider font-semibold">Authentic Ingredients</p>
              </div>
              <div>
                <h4 className="text-terracotta text-2xl font-bold mb-1">Fresh</h4>
                <p className="text-sm text-charcoal/70 uppercase tracking-wider font-semibold">Made Daily</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-terracotta rounded-full -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-leaf-green/20 rounded-full -z-10"></div>
              <img 
                src={`${import.meta.env.BASE_URL}ethiopian-anjera.png`} 
                alt="Cooking Tradition" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
