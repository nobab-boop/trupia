import React, { useState } from 'react';
import { Menu, X, Phone, MapPin, Instagram, Lock } from 'lucide-react';
import { NAV_LINKS, NavLink, Link, useLocation } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Close mobile menu when route changes
  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Navigation */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-24 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center space-x-2 group">
                <span className="font-extrabold text-2xl text-slate-900 tracking-tight uppercase">
                  Trupia<span className="text-brand ml-1">Equipment</span>
                </span>
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              <div className="flex space-x-8">
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `text-base font-semibold transition-colors tracking-tight ${
                        isActive
                          ? 'text-brand'
                          : 'text-slate-600 hover:text-brand'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
              
              <div className="flex items-center ml-8 pl-8 border-l border-slate-200 space-x-4">
                <a href="tel:+17182163559" className="bg-brand text-white px-5 py-2.5 rounded-lg font-bold hover:bg-brand-dark transition-colors text-base shadow-sm flex items-center">
                    <Phone size={18} className="mr-2" />
                    <span>718-216-3559</span>
                </a>
                <Link to="/contact">
                  <button className="bg-brand text-white px-5 py-2.5 rounded-lg font-bold hover:bg-brand-dark transition-colors text-base shadow-sm">
                    Request Quote
                  </button>
                </Link>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <a href="tel:+17182163559" className="mr-4 text-brand">
                <Phone size={24} />
              </a>
              <button
                onClick={toggleMenu}
                className="text-slate-600 hover:text-slate-900 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 animate-slide-down">
            <div className="px-4 pt-4 pb-6 space-y-2 shadow-xl">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg text-lg font-bold ${
                      isActive
                        ? 'bg-orange-50 text-brand'
                        : 'text-slate-600 hover:bg-gray-50 hover:text-brand'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-4 mt-4 border-t border-gray-100">
                 <Link to="/contact" className="block w-full">
                  <button className="w-full bg-brand text-white px-5 py-3 rounded-lg font-bold hover:bg-brand-dark transition-colors text-lg shadow-sm">
                    Request Quote
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-black text-white pt-16 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <span className="font-bold text-xl tracking-tight uppercase">
                  Trupia<span className="text-brand ml-1">Equipment</span>
                </span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Your trusted partner for heavy equipment sales, rentals, and specialized transportation logistics.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/trupiaequipment?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"><Instagram size={20}/></a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 border-l-4 border-brand pl-3">Quick Links</h3>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-gray-400 hover:text-brand transition-colors flex items-center group">
                      <span className="mr-2 transform group-hover:translate-x-1 transition-transform">›</span> {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
               <h3 className="text-lg font-bold mb-6 border-l-4 border-brand pl-3">Contact Us</h3>
               <ul className="space-y-4">
                 <li className="flex items-start space-x-3 text-gray-400">
                   <MapPin className="flex-shrink-0 text-brand mt-1" size={18} />
                   <a 
                     href="https://www.google.com/maps/search/?api=1&query=46-26+Metropolitan+Avenue+Queens,+NY+11385" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="hover:text-brand transition-colors"
                   >
                     46-26 Metropolitan Avenue<br/>Queens, NY 11385
                   </a>
                 </li>
                 <li className="flex items-center space-x-3 text-gray-400">
                   <Phone className="flex-shrink-0 text-brand" size={18} />
                   <a href="tel:+17182163559" className="hover:text-brand transition-colors">
                     +1 718-216-3559
                   </a>
                 </li>
                 <li className="flex items-center space-x-3 text-gray-400">
                   <Instagram className="flex-shrink-0 text-brand" size={18} />
                   <a 
                     href="https://www.instagram.com/trupiaequipment?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="hover:text-brand transition-colors"
                   >
                     @trupiaequipment
                   </a>
                 </li>
               </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Trupia Equipment. All rights reserved.</p>
            <Link to="/admin" className="mt-2 md:mt-0 flex items-center hover:text-brand transition-colors opacity-50 hover:opacity-100">
                <Lock size={12} className="mr-1" /> Admin Login
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;