import React from "react";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#101727]">
      <div className="max-w-7xl mx-auto pt-10 lg:pt-28 text-white pb-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-12 px-5">
          <div className="text-center lg:text-left">
            <h1 className="font-bold text-4xl mb-5">DogiTools</h1>
            <p className="text-[10px] lg:text-sm">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div className="space-y-1 lg:space-y-5">
            <p className="font-bold text-sm lg:text-xl">Product</p>
            <p className="text-gray-200 text-[12px] lg:text-sm">Features</p>
            <p className="text-gray-200 text-[12px] lg:text-sm">Pricing</p>
            <p className="text-gray-200 text-[12px] lg:text-sm">Templates</p>
            <p className="text-gray-200 text-[12px] lg:text-sm">Integrations</p>
          </div>
          <div className="space-y-1 lg:space-y-5">
            <p className="font-bold text-sm lg:text-xl">Company</p>
            <p className="text-gray-200 text-[12px] lg:text-sm">About</p>
            <p className="text-gray-200 text-[12px] lg:text-sm">Blog</p>
            <p className="text-gray-200 text-[12px] lg:text-sm">Careers</p>
            <p className="text-gray-200 text-[12px] lg:text-sm">Press</p>
          </div>
          <div className="space-y-1 lg:space-y-5">
            <p className="font-bold text-sm lg:text-xl">Resources</p>
            <p className="text-gray-200 text-[12px] lg:text-sm">Documentation</p>
            <p className="text-gray-200 text-[12px] lg:text-sm">Help Center</p>
            <p className="text-gray-200 text-[12px] lg:text-sm">Community</p>
            <p className="text-gray-200 text-[12px] lg:text-sm">Contact</p>
          </div>
          <div className="space-y-1 lg:space-y-5">
            <p className="font-bold text-sm lg:text-xl">Social Links</p>
            <div className="flex gap-5">
              <p className="bg-gray-500 h-8 w-8  p-2 lg:h-14 lg:w-14 lg:p-3 rounded-full">
                <FaInstagramSquare className="h-4 w-4 lg:h-8 lg:w-8"/>
              </p>
              <p className="bg-gray-500 h-8 w-8 p-2 lg:h-14 lg:w-14 lg:p-3 rounded-full">
                <FaFacebookSquare className="h-4 w-4 lg:h-8 lg:w-8"/>
              </p>
              <p className="bg-gray-500 h-8 w-8 p-2 lg:h-14 lg:w-14 lg:p-3 rounded-full">
                <FaXTwitter className="h-4 w-4 lg:h-8 lg:w-8"/>
              </p>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-[#E5E7EB] mt-5 flex justify-between items-center px-5">
          <p className="text-[#FAFAFA] text-[9px] lg:text-sm mt-5">
            © 2026 Digitools. All rights reserved.
          </p>

          <div className="flex gap-3 lg:gap-8 mt-5">
            <p className="text-[#FAFAFA] text-[9px] lg:text-sm">Privacy Policy</p>
            <p className="text-[#FAFAFA] text-[9px] lg:text-sm">Terms of Service</p>
            <p className="text-[#FAFAFA] text-[9px] lg:text-sm"> Cookies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
