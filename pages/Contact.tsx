import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import { Phone, MapPin, Clock } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { Lead } from '../types';

const Contact: React.FC = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'General Inquiry',
    message: ''
  });

  // Check for passed state (selected equipment) on mount
  useEffect(() => {
    if (location.state && location.state.selectedEquipment) {
      setFormData(prev => ({
        ...prev,
        interest: 'Equipment Sales',
        message: `I am interested in receiving a quote for the ${location.state.selectedEquipment}. Please provide availability and purchasing details.`
      }));
    }
  }, [location.state]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create new lead object
    const newLead: Lead = {
      id: Date.now(),
      ...formData,
      date: new Date().toISOString(),
      status: 'New'
    };

    // Get existing leads from local storage
    const existingLeads = JSON.parse(localStorage.getItem('leads') || '[]');
    
    // Save updated list
    localStorage.setItem('leads', JSON.stringify([newLead, ...existingLeads]));

    alert('Your inquiry has been submitted successfully! We will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', interest: 'General Inquiry', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">Contact Us</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-xl font-medium">
            Get a quote, ask a question, or schedule a visit. We're here to help.
          </p>
        </div>

        {/* Glass Panel Gradient at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/90 via-white/40 to-transparent backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        
        {/* Top Section: Contact Form */}
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 mb-16 animate-on-scroll fade-up max-w-3xl mx-auto">
           <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Send us a Message</h2>
              <p className="text-slate-600 font-medium">Fill out the form below and we'll get back to you as soon as possible.</p>
           </div>
           
           <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 <div>
                    <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all font-medium"
                      placeholder="John Doe"
                    />
                 </div>
                 <div>
                    <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all font-medium"
                      placeholder="john@company.com"
                    />
                 </div>
                 <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all font-medium"
                      placeholder="(555) 555-5555"
                    />
                 </div>
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-bold text-slate-700 mb-2">I am interested in</label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all font-medium bg-white"
                >
                  <option>General Inquiry</option>
                  <option>Equipment Sales</option>
                  <option>Equipment Rentals</option>
                  <option>Transportation Services</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all resize-none font-medium"
                  placeholder="Tell us about your project needs..."
                ></textarea>
              </div>

              <div className="text-center">
                <Button type="submit" className="w-full md:w-auto md:px-12 py-4 font-bold text-lg shadow-md hover:shadow-lg transform transition hover:-translate-y-1">
                  Send Message
                </Button>
              </div>
            </form>
        </div>

        {/* Bottom Section: Info & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
           
           {/* Left: Contact Details */}
           <div className="animate-on-scroll fade-right">
              <h3 className="text-2xl font-extrabold text-slate-900 mb-8 border-l-4 border-brand pl-4">Contact Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                  {/* Cards for details */}
                  <div className="flex items-start space-x-5 p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 text-brand shadow-sm border border-slate-100">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg mb-1">Visit Our Yard</h4>
                      <p className="text-slate-600 font-medium leading-relaxed">
                        46-26 Metropolitan Avenue<br />
                        Queens, NY 11385
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-5 p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 text-brand shadow-sm border border-slate-100">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg mb-1">Call Us</h4>
                      <p className="text-slate-600 font-medium mb-1">
                         <a href="tel:+17182163559" className="hover:text-brand transition-colors">+1 718-216-3559</a>
                      </p>
                      <p className="text-slate-500 text-sm">Available 24/7 for emergencies</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-5 p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 text-brand shadow-sm border border-slate-100">
                      <Clock size={24} />
                    </div>
                    <div>
                       <h4 className="font-bold text-slate-900 text-lg mb-1">Business Hours</h4>
                       <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-slate-600 font-medium text-sm">
                          <span>Mon - Fri:</span> <span>7:00 AM - 5:00 PM</span>
                          <span>Saturday:</span> <span>8:00 AM - 12:00 PM</span>
                          <span>Sunday:</span> <span>Closed</span>
                       </div>
                    </div>
                  </div>
              </div>
           </div>

           {/* Right: Map */}
           <div className="animate-on-scroll fade-left h-full min-h-[400px]">
              <div className="w-full h-full bg-gray-200 rounded-xl overflow-hidden shadow-lg border border-gray-100 relative">
                 <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.864024849646!2d-73.92161708459463!3d40.71360557933189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25ed30d359c4f%3A0x34293502220455a7!2s46-26%20Metropolitan%20Ave%2C%20Ridgewood%2C%20NY%2011385!5e0!3m2!1sen!2sus!4v1645000000000!5m2!1sen!2sus"
                   className="absolute inset-0 w-full h-full" 
                   style={{ border: 0 }} 
                   allowFullScreen 
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade"
                   title="Trupia Equipment Location"
                 ></iframe>
              </div>
           </div>

        </div>
      </div>
    </Layout>
  );
};

export default Contact;