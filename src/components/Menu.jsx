import React from 'react';

const menuItems = [
  {
    id: 1,
    name: 'Special Ethiopian Anjera',
    description: 'Sourdough-risen flatbread with a slightly spongy texture, served with Doro Wat (spicy chicken stew) and various vegetable sides.',
    price: '1,200',
    category: 'Anjera'
  },
  {
    id: 2,
    name: 'Somali Mufo Platter',
    description: 'Traditional Somali cornbread, thick and golden-brown, served with tender braised goat meat and a side of fresh banana.',
    price: '1,100',
    category: 'Mufo'
  },
  {
    id: 3,
    name: 'Veggie Combo (Bayenetu)',
    description: 'A colorful array of lentil stews, cabbage, and spinach served on a large piece of fresh Anjera.',
    price: '950',
    category: 'Anjera'
  },
  {
    id: 4,
    name: 'Beef Tibs with Mufo',
    description: 'Sautéed beef strips with onions, peppers, and traditional spices, perfectly paired with warm Mufo bread.',
    price: '1,300',
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
