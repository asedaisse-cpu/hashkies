import React from 'react';

const menuItems = [
  {
    id: 1,
    name: 'Special Ethiopian Anjera',
    description: 'Fresh spongy Anjera served with Doro Wat (spicy chicken stew), Misir Wot (lentils), and Gomen (collard greens).',
    price: '800',
    category: 'Anjera'
  },
  {
    id: 2,
    name: 'Somali Mufo (4 pcs)',
    description: 'Authentic golden-brown Mufo cornbread served with tender braised goat or beef, fresh banana, and Basbaas sauce.',
    price: '400',
    category: 'Mufo'
  },
  {
    id: 3,
    name: 'Veggie Bayenetu (Platter)',
    description: 'A colorful vegan feast of lentil stews, chickpeas, cabbage, and spinach served on multiple pieces of fresh Anjera.',
    price: '800',
    category: 'Anjera'
  },
  {
    id: 4,
    name: 'Mufo Beef Tibs Platter',
    description: 'Sautéed beef strips with peppers and onions in traditional Somali spices, served with warm, buttery Mufo.',
    price: '400',
    category: 'Mufo'
  }
];

const Menu = () => {
  return (
    <section id="menu" className="bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl text-charcoal mb-4">Our Signature Dishes</h2>
          <p className="text-terracotta font-medium tracking-wide uppercase">Tradition on every plate</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {menuItems.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row bg-cream/30 rounded-xl p-6 hover:shadow-lg transition-shadow border border-cream">
              {item.category === 'Anjera' ? (
                <img 
                  src={`${import.meta.env.BASE_URL}ethiopian-anjera.png`}
                  alt="Anjera"
                  className="w-24 h-24 rounded-xl object-cover mr-0 sm:mr-4 mb-4 sm:mb-0"
                />
              ) : (
                <img 
                  src={`${import.meta.env.BASE_URL}somali-mufo.png`}
                  alt="Somali Mufo"
                  className="w-24 h-24 rounded-xl object-cover mr-0 sm:mr-4 mb-4 sm:mb-0"
                />
              )}
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl text-charcoal">{item.name}</h3>
                  <span className="text-terracotta font-bold">KES {item.price}</span>
                </div>
                <p className="text-charcoal/70 text-sm mb-4">{item.description}</p>
                <span className="inline-block px-3 py-1 bg-leaf-green/10 text-leaf-green text-xs font-bold rounded-full uppercase">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="btn-primary">View Full Menu</button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
