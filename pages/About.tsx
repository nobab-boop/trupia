import React from 'react';
import Layout from '../components/Layout';
import { Truck, DollarSign, Briefcase, HandCoins } from 'lucide-react';

const About: React.FC = () => {
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
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">About Trupia Equipment</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-xl font-medium">
            The logistical backbone for the Northeast’s toughest job sites.
          </p>
        </div>

        {/* Glass Panel Gradient at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/90 via-white/40 to-transparent backdrop-blur-[2px]"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
        
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="animate-on-scroll fade-right">
             <div className="relative">
                <div className="absolute -inset-4 bg-brand/10 rounded-xl transform rotate-2"></div>
                <img 
                  src="https://images.unsplash.com/photo-1630288213265-64e4673b6f49?q=80&w=1032&auto=format&fit=crop" 
                  alt="Our Team" 
                  className="relative rounded-xl shadow-2xl w-full z-10"
                />
             </div>
          </div>
          <div className="animate-on-scroll fade-left delay-100">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-8 leading-tight">We Move the Iron That Builds the City</h2>
            <div className="space-y-6 text-slate-700 leading-relaxed font-medium text-lg">
              <p>
                Based at the crossroads of The Bronx and Queens, we aren’t just a supplier—we are the logistical backbone for the Northeast’s toughest job sites. From local sales and precision rentals to high-stakes equipment transportation, we provide the machinery that keeps your project on schedule and under budget.
              </p>
              <p>
                We understand the lifecycle of the industry. Whether you need a short-term rental for a site in Queens, a permanent fleet addition, or nationwide shipping for a cross-country move, we handle the heavy lifting so you can focus on the ground.
              </p>
            </div>
          </div>
        </div>

        {/* Capabilities Blocks */}
        <div className="mb-24">
            <div className="text-center mb-16 animate-on-scroll zoom-in">
                <span className="text-brand font-bold uppercase tracking-widest text-sm">What We Do</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">Our Capabilities</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Block 1 */}
                <div className="bg-white p-10 rounded-xl shadow-md border border-gray-100 border-l-8 border-brand animate-on-scroll hover:-translate-y-1 transition-transform group">
                     <div className="w-16 h-16 bg-slate-900 text-white rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Briefcase size={32} />
                     </div>
                     <h3 className="text-2xl font-extrabold text-slate-900 mb-3 uppercase tracking-tight">Commercial & Industrial Supply</h3>
                     <p className="text-slate-600 font-medium text-lg leading-relaxed">Only the heavy hitters. We stock machinery built for maximum uptime.</p>
                </div>

                {/* Block 2 */}
                <div className="bg-white p-10 rounded-xl shadow-md border border-gray-100 border-l-8 border-brand animate-on-scroll hover:-translate-y-1 transition-transform delay-100 group">
                     <div className="w-16 h-16 bg-brand text-white rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Truck size={32} />
                     </div>
                     <h3 className="text-2xl font-extrabold text-slate-900 mb-3 uppercase tracking-tight">Sales, Rentals & Transpo</h3>
                     <p className="text-slate-600 font-medium text-lg leading-relaxed">A full-service ecosystem. We don’t just sell it; we move it.</p>
                </div>

                 {/* Block 3 */}
                <div className="bg-white p-10 rounded-xl shadow-md border border-gray-100 border-l-8 border-brand animate-on-scroll hover:-translate-y-1 transition-transform delay-200 group">
                     <div className="w-16 h-16 bg-slate-900 text-white rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <DollarSign size={32} />
                     </div>
                     <h3 className="text-2xl font-extrabold text-slate-900 mb-3 uppercase tracking-tight">Financing Solutions</h3>
                     <p className="text-slate-600 font-medium text-lg leading-relaxed">Custom-tailored power for your cash flow. We make the "big buys" possible.</p>
                </div>

                 {/* Block 4 */}
                <div className="bg-white p-10 rounded-xl shadow-md border border-gray-100 border-l-8 border-brand animate-on-scroll hover:-translate-y-1 transition-transform delay-300 group">
                     <div className="w-16 h-16 bg-brand text-white rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <HandCoins size={32} />
                     </div>
                     <h3 className="text-2xl font-extrabold text-slate-900 mb-3 uppercase tracking-tight">Equipment Acquisition</h3>
                     <p className="text-slate-600 font-medium text-lg leading-relaxed">We buy all heavy equipment. We provide immediate liquid offers on your retired fleet.</p>
                </div>
            </div>
        </div>

        {/* The Bottom Line (Simplified as Highlight) */}
        <div className="py-12 md:py-16 text-center animate-on-scroll zoom-in border-t border-gray-100 mt-16">
             <p className="text-2xl md:text-3xl font-extrabold max-w-4xl mx-auto leading-snug text-slate-900">
                In this city, time is the only currency that matters. We protect yours with <span className="text-brand">#GuaranteedLowestRates</span> and a fleet that never quits.
             </p>
        </div>

      </div>
    </Layout>
  );
};

export default About;