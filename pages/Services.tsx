import React from 'react';
import Layout from '../components/Layout';
import { Link } from '../constants';
import Button from '../components/Button';

const Services: React.FC = () => {
  return (
    <Layout>
      {/* Header */}
      <div className="relative bg-orange-50 py-24 border-b border-orange-100 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: 'linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }}>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10 animate-on-scroll zoom-in">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">Our Services</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-xl font-medium">
            Comprehensive solutions for your heavy machinery needs.
          </p>
        </div>

        {/* Glass Panel Gradient at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/90 via-white/40 to-transparent backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8 space-y-24">
        
        {/* Equipment Sales */}
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="w-full md:w-1/3 animate-on-scroll fade-right">
            <div className="bg-gray-100 rounded-xl p-3">
               <img 
                 src="https://images.unsplash.com/photo-1603814744174-115311ad645e?q=80&w=387&auto=format&fit=crop" 
                 alt="Equipment Sales" 
                 className="rounded-lg shadow-lg w-full h-64 object-cover" 
               />
            </div>
          </div>
          <div className="w-full md:w-2/3 animate-on-scroll fade-left delay-100">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6 flex items-center">
              <span className="w-3 h-10 bg-brand mr-4 rounded-sm"></span>
              Equipment Sales
            </h2>
            <p className="text-slate-700 text-xl font-medium leading-relaxed mb-6">
              We offer a wide inventory of new and used heavy equipment from top manufacturers. Whether you are looking to expand your fleet with the latest technology or find a reliable budget-friendly option, we have the machinery for you.
            </p>
            <p className="text-slate-600 leading-relaxed font-medium">
              Our sales process is transparent and straightforward. Every used machine undergoes a thorough multi-point inspection by our certified technicians to ensure it meets our strict quality standards before it hits the lot. We provide detailed history reports and walk-around videos so you know exactly what you are buying.
            </p>
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* Equipment Rentals */}
        <div className="flex flex-col md:flex-row-reverse gap-16 items-start">
          <div className="w-full md:w-1/3 animate-on-scroll fade-left">
            <div className="bg-gray-100 rounded-xl p-3">
               <img 
                 src="https://images.unsplash.com/photo-1629807473015-41699c4471b5?q=80&w=870&auto=format&fit=crop" 
                 alt="Equipment Rentals" 
                 className="rounded-lg shadow-lg w-full h-64 object-cover" 
               />
            </div>
          </div>
          <div className="w-full md:w-2/3 animate-on-scroll fade-right delay-100">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6 flex items-center">
              <span className="w-3 h-10 bg-brand mr-4 rounded-sm"></span>
              Equipment Rentals
            </h2>
             <p className="text-slate-700 text-xl font-medium leading-relaxed mb-6">
              Project demands can change in an instant. Our rental fleet gives you the flexibility to scale up without the capital commitment of purchasing. From earthmovers to aerial lifts, we have the right tool for the job.
            </p>
            <p className="text-slate-600 leading-relaxed font-medium">
              We offer daily, weekly, and monthly rates to suit your schedule. Our equipment is maintained to factory specifications, ensuring you don't face downtime on the job site. If a machine does go down, our mobile service team is ready to swap it out or repair it immediately.
            </p>
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* Equipment Transportation */}
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="w-full md:w-1/3 animate-on-scroll fade-right">
             <div className="bg-gray-100 rounded-xl p-3">
               <img 
                 src="https://images.unsplash.com/photo-1766561994067-dbd575e1cff2?q=80&w=464&auto=format&fit=crop" 
                 alt="Transportation" 
                 className="rounded-lg shadow-lg w-full h-64 object-cover" 
               />
            </div>
          </div>
          <div className="w-full md:w-2/3 animate-on-scroll fade-left delay-100">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6 flex items-center">
              <span className="w-3 h-10 bg-brand mr-4 rounded-sm"></span>
              Equipment Transportation
            </h2>
            <p className="text-slate-700 text-xl font-medium leading-relaxed mb-6">
              Moving heavy machinery requires specialized expertise and equipment. Our logistics division handles the transport of excavators, dozers, cranes, and more, ensuring your assets arrive safely and on time.
            </p>
            <p className="text-slate-600 leading-relaxed font-medium">
              We handle all permitting and route planning for oversized loads. Whether you need to move a single machine across town or an entire fleet across the country, our experienced drivers and heavy haul trailers are ready to roll.
            </p>
          </div>
        </div>

      </div>

      {/* Request Quote CTA Section */}
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
          <div className="flex justify-center">
             <Link to="/contact">
               <Button variant="primary" className="text-lg px-8 py-4 font-bold shadow-xl shadow-orange-500/20 hover:shadow-orange-500/30 transform transition hover:scale-105">
                 Request a Quote
               </Button>
             </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;