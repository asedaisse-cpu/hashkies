import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-cream overflow-hidden">
      <div className="section-container lg:flex lg:items-center">
        <div className="lg:w-1/2 lg:pr-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-charcoal leading-tight mb-6">
            Authentic <span className="text-terracotta">East African</span> Comfort Food
          </h1>
          <p className="text-lg text-charcoal/80 mb-8 max-w-lg">
            Experience the rich flavors of Ethiopian Anjera and Somali Mufo. Freshly made, traditionally crafted, and delivered right to your doorstep in Nairobi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-primary text-lg">Order Delivery</button>
            <button className="px-6 py-3 rounded-md font-bold border-2 border-terracotta text-terracotta hover:bg-terracotta hover:text-white transition-colors text-lg">
              View Menu
            </button>
          </div>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-1/2 relative">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-terracotta rounded-full opacity-20 -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-leaf-green/20 rounded-full -z-10"></div>
            <img 
              src={`${import.meta.env.BASE_URL}hashkies-hero.png`}
              alt="Authentic East African Cuisine - Anjera & Mufo" 
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
