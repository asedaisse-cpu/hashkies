import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-cream shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <img className="h-12 w-auto" src={`${import.meta.env.BASE_URL}hashkies-logo.png`} alt="Hashkies Logo" />
            <span className="ml-3 text-2xl font-heading font-bold text-terracotta">Hashkies</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#menu" className="text-charcoal hover:text-terracotta font-medium transition-colors">Menu</a>
            <a href="#about" className="text-charcoal hover:text-terracotta font-medium transition-colors">About</a>
            <a href="#contact" className="text-charcoal hover:text-terracotta font-medium transition-colors">Contact</a>
            <a href="#feedback" className="text-charcoal hover:text-terracotta font-medium transition-colors">Feedback</a>
            <button className="btn-primary">Order Now</button>
          </div>
          {/* Mobile menu button could be added here */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
