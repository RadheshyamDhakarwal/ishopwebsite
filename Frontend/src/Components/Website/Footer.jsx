import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Package, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Input } from '../../Components/ui/input';
import { Button } from '../../Components/ui/button';
const Footer = () => {
  const footerData = [
    {
      title: "INFORMATION",
      links: ["About me", "Contact me", "Orders and Returns", "Terms and Conditions "],
    },
    {
      title: "DISCOVER",
      links: ["iPhone", "Watch", "AirPods", "Accessories"],
    },
    {
        title: "SERVICE",
        links: ["My Account", "View Cart", "Track My Order ", "help"],
      },
    {
      title: "LOCATE US",
      details: [
        "123 Demo Blvd, Miami, FL 4567",
        "United States",
        "+1 123-456-7890",
        "mail@ishoproduct.com",
      ],
    },
  ];

  return (
    // <footer className="bg-gray-900 text-gray-300 py-10">
    //   <div className=" mx-auto px-6 md:px-12 lg:px-20">
    //     <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5   gap-8">
    //       {/* Logo & About */}
    //       <div>
    //         <h2 className="text-2xl font-semibold text-white">I-S!</h2>
    //         <p className="mt-2 text-sm">
    //           Pulvinar aenean dignissim porttitor 
    //           sed risus urna, pretium quis
    //           non id.
    //         </p>
    //         <div className="flex space-x-4 mt-4">
    //           <FaInstagram className="text-xl cursor-pointer hover:text-gray-400" />
    //           <FaFacebookF className="text-xl cursor-pointer hover:text-gray-400" />
    //           <FaTwitter className="text-xl cursor-pointer hover:text-gray-400" />
    //         </div>
    //       </div>

    //       {/* Dynamic Sections */}
    //       {footerData.map((section, index) => (
    //         <div key={index}>
    //           <h3 className="text-lg font-semibold text-white">{section.title}</h3>
    //           {section.links ? (
    //             <ul className="mt-2 space-y-2 text-sm">
    //               {section.links.map((link, idx) => (
    //                 <li key={idx} className="hover:text-gray-400 cursor-pointer">
    //                   {link}
    //                 </li>
    //               ))}
    //             </ul>
    //           ) : (
    //             <p className="mt-2 text-sm space-y-1">
    //               {section.details.map((detail, idx) => (
    //                 <span key={idx} className="block">{detail}</span>
    //               ))}
    //             </p>
    //           )}
    //         </div>
    //       ))}
    //     </div>

    //     {/* Bottom Section */}
    //     <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between text-sm">
    //       <p>© 2025  Product Seller. Powered by Product Seller</p>
    //       <div className="flex space-x-4">
    //         <img src="images/Visalogo.png" alt="Visa" />
    //         <img src="images/Masterlogo.png" alt="Mastercard" />
    //         <img src="images/Dicoverlogo.jpeg"  alt="Discover" />
    //         {/* <img src="images/RupayLogo2.png" alt="Apple Pay" /> */}
    //       </div>
    //     </div>
    //   </div>
    // </footer>

    <footer className="bg-[#dcd9d9] border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <Package className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold">Urban Ethnic Hub</h3>
                <p className="text-xs text-muted-foreground">Authentic • Modern • Global</p>
              </div>
            </Link>
            
            <p className="text-sm text-muted-foreground max-w-sm">
              Discover authentic ethnic products that celebrate global heritage while fitting seamlessly into modern lifestyle.
            </p>

            {/* Social Links */}
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" asChild>
                <a href="#" aria-label="Facebook">
                  <Facebook className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="#" aria-label="Instagram">
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="#" aria-label="Twitter">
                  <Twitter className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="#" aria-label="YouTube">
                  <Youtube className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">
                All Products
              </Link>
              <Link to="/products?category=clothing" className="text-muted-foreground hover:text-primary transition-colors">
                Clothing
              </Link>
              <Link to="/products?category=jewelry" className="text-muted-foreground hover:text-primary transition-colors">
                Jewelry
              </Link>
              <Link to="/products?category=home-decor" className="text-muted-foreground hover:text-primary transition-colors">
                Home Decor
              </Link>
              <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                Blog
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
            </nav>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="font-semibold">Customer Service</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </Link>
              <Link to="/shipping" className="text-muted-foreground hover:text-primary transition-colors">
                Shipping Info
              </Link>
              <Link to="/returns" className="text-muted-foreground hover:text-primary transition-colors">
                Returns & Exchanges
              </Link>
              <Link to="/size-guide" className="text-muted-foreground hover:text-primary transition-colors">
                Size Guide
              </Link>
              <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </Link>
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
            </nav>
          </div>

          {/* Newsletter & Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Stay Connected</h4>
            <p className="text-sm text-muted-foreground">
              Subscribe to get updates on new products and exclusive offers.
            </p>
            
            <div className="space-y-2">
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email" 
                  className="flex-1"
                />
                <Button className="btn-primary">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>hello@urbanethnichub.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>New York, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Urban Ethnic Hub. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 text-sm">
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
