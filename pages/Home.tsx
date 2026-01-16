import React from 'react';
import { Link } from '../constants';
import Layout from '../components/Layout';
import Button from '../components/Button';
import { ArrowRight, Truck, Wrench, ShoppingBag, ShieldCheck, Tag, Star } from 'lucide-react';
import { BENEFITS, EQUIPMENT_LIST } from '../constants';

const REVIEWS = [
  {
    id: 1,
    text: "Trupia provided exactly what we needed for our site prep. The excavator was in top condition and delivered on time.",
    author: "John D.",
    role: "Site Manager",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=150&h=150"
  },
  {
    id: 2,
    text: "Fast delivery and transparent rates. Their team went above and beyond to get us the equipment for a last-minute job.",
    author: "Sarah Jenkins",
    role: "General Contractor",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=150&h=150"
  },
  {
    id: 3,
    text: "Their heavy haul logistics team saved us a huge headache moving our crane across state lines. Highly recommended.",
    author: "Mike Ross",
    role: "Industrial Solutions",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=150&h=150"
  }
];

const Home: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-slate-50 overflow-hidden py-8 lg:py-0 lg:min-h-[calc(100vh-5rem)] flex items-center">
        
        {/* Abstract Background Elements */}
        {/* Blueprint Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: 'linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }}>
        </div>

        {/* Diagonal shape */}
        <div className="absolute top-0 right-0 -mr-40 -mt-20 w-[800px] h-[800px] bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-60 hidden lg:block"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left max-w-2xl lg:max-w-none animate-on-scroll fade-right">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 font-bold text-[10px] sm:text-xs uppercase tracking-wider mb-4 hover:shadow-md transition-shadow cursor-default">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
                </span>
                Premier Heavy Equipment Solutions
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl/tight font-extrabold text-slate-900 mb-4 tracking-tight">
                Empowering Your Projects <br className="hidden lg:block"/>
                with Our <span className="text-brand relative inline-block">
                  Heavy Equipment
                  {/* Underline decoration */}
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand opacity-20" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-600 mb-6 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
                Top-tier machinery for construction, mining, and industrial projects. We deliver sales, rentals, and transportation nationwide.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
                <Link to="/contact">
                  <Button variant="primary" className="w-full sm:w-auto text-base px-6 py-3 shadow-xl shadow-orange-500/20 hover:shadow-orange-500/30 transform transition hover:-translate-y-1">
                    Request a Quote
                  </Button>
                </Link>
                <Link to="/equipment">
                  <Button variant="primary" className="w-full sm:w-auto text-base px-6 py-3 shadow-xl shadow-orange-500/20 hover:shadow-orange-500/30 transform transition hover:-translate-y-1">
                    View Equipment
                  </Button>
                </Link>
              </div>

              {/* Glass Panel Features */}
              <div className="bg-white/60 backdrop-blur-md border border-white/60 rounded-xl p-4 shadow-lg shadow-slate-200/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 w-full lg:max-w-xl">
                
                {/* Item 1 */}
                <div className="flex items-center gap-3">
                  <div className="p-1.5 bg-white rounded-lg text-brand shadow-sm border border-slate-100">
                    <ShieldCheck size={18} strokeWidth={2.5} />
                  </div>
                  <div className="text-left">
                    <p className="font-extrabold text-slate-900 text-xs uppercase tracking-wide leading-tight">100% Trusted</p>
                    <p className="text-[10px] text-slate-500 font-semibold">Certified Equipment</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden md:block w-px h-6 bg-slate-300/50"></div>

                {/* Item 2 */}
                <div className="flex items-center gap-3">
                   <div className="p-1.5 bg-white rounded-lg text-brand shadow-sm border border-slate-100">
                    <Tag size={18} strokeWidth={2.5} />
                  </div>
                  <div className="text-left">
                    <p className="font-extrabold text-slate-900 text-xs uppercase tracking-wide leading-tight">Best Value</p>
                    <p className="text-[10px] text-slate-500 font-semibold">Lowest Possible Cost</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden md:block w-px h-6 bg-slate-300/50"></div>

                {/* Item 3 */}
                <div className="flex items-center gap-3">
                   <div className="p-1.5 bg-white rounded-lg text-brand shadow-sm border border-slate-100">
                    <Truck size={18} strokeWidth={2.5} />
                  </div>
                  <div className="text-left">
                    <p className="font-extrabold text-slate-900 text-xs uppercase tracking-wide leading-tight">Nationwide</p>
                    <p className="text-[10px] text-slate-500 font-semibold">Shipping Available</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Image Content */}
            <div className="flex-1 relative animate-on-scroll fade-left delay-200 w-full lg:w-auto lg:max-w-md xl:max-w-lg mx-auto">
               <div className="relative animate-float">
                 {/* Main Image */}
                 <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white z-10 group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/10 to-transparent z-10 pointer-events-none"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1629807473015-41699c4471b5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                      alt="Construction Excavator" 
                      className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                      style={{ maxHeight: '450px' }}
                    />
                 </div>

                 {/* Decorative Background Shape behind image */}
                 <div className="absolute -inset-3 bg-slate-200/50 rounded-xl -z-10 rotate-2 scale-[1.02]"></div>
                 <div className="absolute -inset-3 bg-brand/10 rounded-xl -z-20 -rotate-2 scale-[1.02]"></div>

                 {/* Floating Info Card */}
                 <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-xl border border-slate-100 z-20 hidden md:flex items-center gap-3 animate-on-scroll zoom-in delay-300">
                    <div className="bg-slate-900 text-white p-2.5 rounded-md shadow-lg">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Certified</p>
                      <p className="text-slate-900 font-extrabold text-base leading-none">100% Inspected</p>
                    </div>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Equipment Section - Moved up */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll zoom-in">
            <span className="text-brand font-bold uppercase tracking-widest text-sm">Current Inventory</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-3">Featured Equipment</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {EQUIPMENT_LIST.slice(0, 3).map((item, index) => (
              <div key={item.id} className={`bg-orange-50 rounded-xl shadow-lg border border-orange-100 border-t-4 border-t-brand-black overflow-hidden hover:shadow-xl transition-all duration-300 group animate-on-scroll delay-${(index + 1) * 100} hover:-translate-y-2 relative`}>
                <Link to={`/equipment/${item.id}`} className="absolute inset-0 z-10" aria-label={`View details for ${item.name}`} />
                <div className="h-64 overflow-hidden relative">
                   <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-0"></div>
                   <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <div className="w-14 h-14 bg-brand rounded-lg flex items-center justify-center -mt-16 mb-6 relative z-10 shadow-lg text-white group-hover:scale-110 transition-transform">
                    <Tag size={28} />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-2 truncate" title={item.name}>{item.name}</h3>
                  <p className="text-brand font-bold text-lg mb-3">{item.price}</p>
                  <p className="text-slate-600 mb-6 font-medium leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                  <Link to={`/equipment/${item.id}`} className="inline-flex items-center text-brand font-bold hover:text-brand-dark transition-colors text-lg group-hover:translate-x-1 duration-300 relative z-20">
                    View Details <ArrowRight size={20} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 animate-on-scroll">
            <Link to="/equipment">
                <Button variant="secondary" className="bg-white border-2 border-slate-200 hover:border-brand hover:text-brand transition-colors">
                    View All Inventory
                </Button>
            </Link>
          </div>

        </div>
      </section>

      {/* Benefits Section - Moved down */}
      <section className="py-20 bg-orange-50 border-y border-orange-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           
           <div className="text-center mb-16 animate-on-scroll zoom-in">
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
                Why <span className="relative inline-block text-brand">
                  Choose
                  <svg className="absolute w-full h-3 -bottom-2 left-0 text-brand opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span> Us
              </h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {BENEFITS.map((benefit, index) => (
               <div key={index} className={`bg-white p-10 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-8 border-brand animate-on-scroll zoom-in hover:-translate-y-2 ${index === 1 ? 'delay-100' : index === 2 ? 'delay-200' : ''}`}>
                 <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 transform transition-transform group-hover:rotate-12">
                   <benefit.icon className="text-brand" size={32} />
                 </div>
                 <h3 className="text-2xl font-extrabold text-slate-900 mb-4">{benefit.title}</h3>
                 <p className="text-slate-600 font-medium text-lg">{benefit.description}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Minimal Review Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll zoom-in">
             <div className="inline-flex items-center justify-center p-2 bg-white rounded-full shadow-sm mb-4">
               <Star size={16} className="text-brand mr-2" fill="currentColor" />
               <span className="text-xs font-bold uppercase tracking-wider text-slate-500">5-Star Reputation</span>
             </div>
            <h2 className="text-3xl font-extrabold text-slate-900">Trusted by Professionals</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review, index) => (
              <div key={review.id} className={`bg-orange-50 p-8 rounded-xl shadow-sm border border-orange-100 border-t-4 border-t-brand-black hover:shadow-md transition-all duration-300 animate-on-scroll delay-${index * 100} hover:-translate-y-1`}>
                <div className="flex space-x-1 mb-4 text-brand">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 font-medium italic leading-relaxed">"{review.text}"</p>
                <div className="flex items-center">
                  <img 
                    src={review.image} 
                    alt={review.author} 
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-white shadow-sm"
                  />
                  <div>
                    <p className="text-slate-900 font-bold text-sm">{review.author}</p>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-wide">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Orange Background */}
      <section className="relative py-24 bg-orange-50 border-t border-orange-100 animate-on-scroll zoom-in overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: 'linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }}>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8">Ready to Get Started?</h2>
          <p className="text-2xl text-slate-600 mb-10 max-w-3xl mx-auto font-medium">
            Contact us today for a free quote on equipment sales, rentals, or transportation services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
             <Link to="/contact">
               <Button variant="primary" className="w-full sm:w-auto text-lg px-8 py-4 font-bold shadow-xl shadow-orange-500/20 hover:shadow-orange-500/30 transform transition hover:scale-105">
                 Request a Quote
               </Button>
             </Link>
             <Link to="/equipment">
               <Button variant="secondary" className="w-full sm:w-auto bg-white border border-slate-200 hover:bg-white text-slate-700 hover:text-brand text-lg px-8 py-4 font-bold shadow-md transform transition hover:scale-105">
                 Browse Inventory
               </Button>
             </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;