import React from 'react';
import { Link } from '../constants';
import Layout from '../components/Layout';
import Button from '../components/Button';
import { EQUIPMENT_LIST } from '../constants';
import { ChevronRight } from 'lucide-react';

const Equipment: React.FC = () => {
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

        <div className="container mx-auto px-4 relative z-10 animate-on-scroll text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Equipment Inventory</h1>
          <div className="flex items-center justify-center text-slate-500 text-sm font-medium">
            <Link to="/" className="hover:text-brand transition-colors">Home</Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-brand">Inventory</span>
          </div>
        </div>

        {/* Glass Panel Gradient at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/90 via-white/40 to-transparent backdrop-blur-[2px]"></div>
      </div>

      {/* Listing */}
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {EQUIPMENT_LIST.map((item, index) => (
            <div 
              key={item.id} 
              className={`group relative bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-on-scroll delay-${(index % 3) * 100}`}
            >
              {/* Overlay Link */}
              <Link to={`/equipment/${item.id}`} className="absolute inset-0 z-10" aria-label={`View details for ${item.name}`} />

              <div className="block relative h-72 bg-gray-200 overflow-hidden cursor-pointer">
                <img 
                  src={item.imageUrl} 
                  alt={item.name} 
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-extrabold text-slate-900 mb-1 group-hover:text-brand transition-colors relative z-0">{item.name}</h3>
                {item.price && (
                  <p className="text-lg font-bold text-brand mb-4">{item.price}</p>
                )}
                <div className="flex-grow mb-8">
                  <ul className="text-sm font-medium text-slate-600 space-y-2">
                    {item.specs.map((spec, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-2 h-2 bg-gray-300 rounded-full mt-1.5 mr-3 flex-shrink-0 group-hover:bg-brand transition-colors"></span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto flex gap-3 relative z-20">
                   <Link to={`/equipment/${item.id}`} className="flex-1">
                     <Button fullWidth variant="secondary" className="text-sm font-bold shadow-sm h-full">
                       View Details
                     </Button>
                   </Link>
                   <Link 
                     to="/contact" 
                     state={{ selectedEquipment: item.name }}
                     className="flex-1"
                   >
                     <Button fullWidth variant="primary" className="text-sm font-bold shadow-md group-hover:shadow-lg h-full">
                       Request Quote
                     </Button>
                   </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center animate-on-scroll">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                Don't see what you're looking for?
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed">
                <Link to="/contact" className="text-brand relative inline-block font-bold hover:text-brand-dark transition-colors mr-2">
                    Contact us
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                    </svg>
                </Link>
                 directly. We can source specific equipment upon request.
            </p>
        </div>
      </div>
    </Layout>
  );
};

export default Equipment;