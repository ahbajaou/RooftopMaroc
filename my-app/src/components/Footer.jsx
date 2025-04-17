import React from 'react';

const FooterLink = ({ href, children }) => (
  <a 
    href={href} 
    className="text-gray-600 hover:text-orange-500 transition-colors"
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-orange-500">Rooftop Marrakech</h3>
            <p className="mt-4 text-gray-600">
              Discover the most beautiful rooftop venues in Marrakech. Your guide to 
              spectacular views, delicious food, and unforgettable experiences.
            </p>
          </div>

    
          <div>
            <div className="space-y-2">
              
            </div>
          </div>

          <div>
            
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Rooftop Marrakech. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 space-x-4 text-sm">
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/terms">Terms of Service</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}