import React, { useState, useEffect } from 'react';
import { useParams, Link, EQUIPMENT_LIST, BENEFITS } from '../constants';
import Layout from '../components/Layout';
import Button from '../components/Button';
import { ChevronRight, CheckCircle2 } from 'lucide-react';

const EquipmentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const item = EQUIPMENT_LIST.find(e => e.id === id);
  const [activeImage, setActiveImage] = useState<string>('');

  useEffect(() => {
    if (item) {
        if (item.images && item.images.length > 0) {
            setActiveImage(item.images[0]);
        } else {
            setActiveImage(item.imageUrl);
        }
    }
  }, [item]);

  if (!item) {
    return (
      <Layout>
        <div className="min-h-[50vh] flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Item Not Found</h1>
          <Link to="/equipment">
            <Button>Back to Inventory</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  // Determine the list of images to show in gallery
  const galleryImages = item.images && item.images.length > 0 ? item.images : [item.imageUrl];

  return (
    <Layout>
      {/* Breadcrumb Header */}
      <div className="bg-slate-50 border-b border-slate-200 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm font-medium text-slate-500">
            <Link to="/" className="hover:text-brand transition-colors">Home</Link>
            <ChevronRight size={14} className="mx-2" />
            <Link to="/equipment" className="hover:text-brand transition-colors">Inventory</Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-brand font-bold text-slate-900">{item.name}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left Column: Images */}
          <div className="w-full lg:w-3/5 animate-on-scroll fade-right">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white mb-6 group h-[400px] md:h-[500px] flex items-center justify-center relative">
              <img 
                src={activeImage || item.imageUrl} 
                alt={item.name} 
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Gallery Thumbnails */}
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
               {galleryImages.map((img, i) => (
                  <div 
                    key={i} 
                    onClick={() => setActiveImage(img)}
                    className={`rounded-lg overflow-hidden border-2 cursor-pointer transition-all h-20 bg-gray-100 ${activeImage === img ? 'border-brand opacity-100 ring-2 ring-brand ring-offset-1' : 'border-transparent opacity-60 hover:opacity-100'}`}
                  >
                      <img src={img} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
               ))}
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="w-full lg:w-2/5 animate-on-scroll fade-left delay-100">
             <div className="sticky top-28">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 bg-green-100 text-green-700">
                  For Sale
                </span>
                
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">{item.name}</h1>
                
                <p className="text-3xl font-bold text-brand mb-6">{item.price}</p>

                <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 mb-8">
                  <h3 className="font-bold text-slate-900 mb-4 uppercase text-sm tracking-wide">Key Specifications</h3>
                  <ul className="space-y-3">
                    {item.specs.map((spec, idx) => (
                      <li key={idx} className="flex items-start text-slate-700 font-medium">
                        <CheckCircle2 size={18} className="text-brand mr-3 flex-shrink-0 mt-0.5" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="font-bold text-slate-900 mb-3 text-lg">Description</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                   <Link to="/contact" state={{ selectedEquipment: item.name }}>
                     <Button fullWidth variant="primary" className="py-4 text-lg font-bold shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30">
                       Request a Quote
                     </Button>
                   </Link>
                   <div className="text-center">
                      <p className="text-sm text-slate-500 font-medium">
                        Need immediate assistance? <a href="tel:+17182163559" className="text-brand font-bold hover:underline">Call 718-216-3559</a>
                      </p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Benefits Section (Reused from Home) */}
      <section className="py-20 bg-orange-50 border-t border-orange-100 mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12 animate-on-scroll zoom-in">
             <h2 className="text-3xl font-extrabold text-slate-900">Why Choose Trupia Equipment?</h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {BENEFITS.map((benefit, index) => (
               <div key={index} className={`bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-8 border-brand animate-on-scroll zoom-in hover:-translate-y-2 delay-${index * 100}`}>
                 <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-4 text-brand">
                   <benefit.icon size={28} />
                 </div>
                 <h3 className="text-xl font-extrabold text-slate-900 mb-3">{benefit.title}</h3>
                 <p className="text-slate-600 font-medium">{benefit.description}</p>
               </div>
             ))}
           </div>
        </div>
      </section>
    </Layout>
  );
};

export default EquipmentDetail;