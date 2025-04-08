import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

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
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className=" mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5   gap-8">
          {/* Logo & About */}
          <div>
            <h2 className="text-2xl font-semibold text-white">I-S!</h2>
            <p className="mt-2 text-sm">
              Pulvinar aenean dignissim porttitor 
              sed risus urna, pretium quis
              non id.
            </p>
            <div className="flex space-x-4 mt-4">
              <FaInstagram className="text-xl cursor-pointer hover:text-gray-400" />
              <FaFacebookF className="text-xl cursor-pointer hover:text-gray-400" />
              <FaTwitter className="text-xl cursor-pointer hover:text-gray-400" />
            </div>
          </div>

          {/* Dynamic Sections */}
          {footerData.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              {section.links ? (
                <ul className="mt-2 space-y-2 text-sm">
                  {section.links.map((link, idx) => (
                    <li key={idx} className="hover:text-gray-400 cursor-pointer">
                      {link}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 text-sm space-y-1">
                  {section.details.map((detail, idx) => (
                    <span key={idx} className="block">{detail}</span>
                  ))}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between text-sm">
          <p>© 2025  Product Seller. Powered by Product Seller</p>
          <div className="flex space-x-4">
            <img src="images/all-payment-method.svg" alt="payment option" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
