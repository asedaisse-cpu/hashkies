import React from 'react';

const Feedback = () => {
  return (
    <section id="feedback" className="bg-terracotta text-white">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl mb-6">We Value Your Feedback</h2>
          <p className="text-lg opacity-90 mb-10">
            Did you enjoy your meal? Your feedback helps us improve and serve you better. Leave a testimonial or tell us about your experience.
          </p>
          
          <form className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 text-left">
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input type="text" className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Rating</label>
                <select className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white">
                  <option value="5" className="text-charcoal">⭐⭐⭐⭐⭐ (Excellent)</option>
                  <option value="4" className="text-charcoal">⭐⭐⭐⭐ (Great)</option>
                  <option value="3" className="text-charcoal">⭐⭐⭐ (Good)</option>
                  <option value="2" className="text-charcoal">⭐⭐ (Okay)</option>
                  <option value="1" className="text-charcoal">⭐ (Poor)</option>
                </select>
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">Your Review</label>
              <textarea rows="4" className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white" placeholder="Share your experience..."></textarea>
            </div>
            <button type="submit" className="w-full bg-white text-terracotta py-3 rounded-md font-bold hover:bg-cream transition-colors">
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
