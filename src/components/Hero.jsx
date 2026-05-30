import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-cream overflow-hidden">
      <div className="section-container lg:flex lg:items-center">
        <div className="lg:w-1/2 lg:pr-12">
          <div className="mb-6 flex items-center">
            <img 
              src={`${import.meta.env.BASE_URL}hashkies-logo.png`} 
              alt="Hashkies Logo" 
              className="h-10 w-auto mr-3"
            />
            <span className="text-xl font-heading font-bold text-terracotta uppercase tracking-wider">Hashkies</span>
          </div>
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
          <div className="aspect-square bg-terracotta/10 rounded-full flex items-center justify-center p-4">
             <img 
              src={`${import.meta.env.BASE_URL}hashkies-hero.png`} 
              alt="Delicious East African Food Platter" 
              className="w-full h-auto drop-shadow-2xl rounded-full object-cover aspect-square"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
