import React from "react";
import { TiTickOutline } from "react-icons/ti";

const TransparentPricing = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center lg:mb-4">
          <h1 className="font-bold lg:font-extrabold text-3xl lg:text-5xl mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-[#627382] text-sm">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-12 p-8">
          <div className="bg-zinc-100/30 space-y-4 border-2 border-[#F1F1F1] p-5 rounded-2xl">
            <div className="">
              <h5 className="font-bold text-2xl">Starter</h5>
              <p className="text-[#627382] text-sm font-bold">Perfect for getting started</p>
            </div>

            <div>
                <p className="font-bold text-2xl">$0<span className="text-sm text-[#627382]">/month</span></p>
            </div>

            <div className="">
              <p className="flex items-center font-medium text-[#627382]"><TiTickOutline className="text-success"/>Access to 10 free tools</p>
              <p className="flex items-center font-medium text-[#627382]"><TiTickOutline className="text-success"/>Access to 10 free tools</p>
              <p className="flex items-center font-medium text-[#627382]"><TiTickOutline className="text-success"/>Access to 10 free tools</p>
              <p className="flex items-center font-medium text-[#627382]"><TiTickOutline className="text-success"/>Access to 10 free tools</p>
            </div>

            <button className="btn w-full rounded-full bg-linear-to-l from-[#9514FA] to-[#4F39F6] mt-18 font text-white">Get Started Free</button>
          </div>

            <div className="relative bg-linear-to-l from-[#9514FA] to-[#4F39F6] space-y-4 border-2 border-[#F1F1F1] p-5 rounded-2xl">
            <div>
              <h5 className="font-bold text-2xl text-white">Pro</h5>
              <p className="text-sm font-bold text-gray-100">Best for professionals</p>
              <div className="absolute -top-4 left-25 lg:left-30">
                <p className="text-[#BB4D00] bg-[#FEF3C6] px-3 py-1 rounded-full font-bold">Most Popular</p>
              </div>
            </div>

            <div>
                <p className="font-bold text-2xl text-white">$29<span className="text-sm text-gray-100">/month</span></p>
            </div>

            <div className="">
              <p className="flex items-center font-medium text-gray-100"><TiTickOutline/>Access to all premium tools</p>
              <p className="flex items-center font-medium text-gray-100"><TiTickOutline/>Unlimited templates</p>
              <p className="flex items-center font-medium text-gray-100"><TiTickOutline/>Priority support</p>
              <p className="flex items-center font-medium text-gray-100"><TiTickOutline/>Unlimited projects</p>
              <p className="flex items-center font-medium text-gray-100"><TiTickOutline/>Cloud sync</p>
              <p className="flex items-center font-medium text-gray-100"><TiTickOutline/>Advanced analytics</p>
            </div>

            <button className="btn w-full rounded-full mt-5 font-bold text-[#4F39F6]">Get Started Free</button>
          </div>

          <div className="bg-zinc-100/30 space-y-4 border-2 border-[#F1F1F1] p-5 rounded-2xl">
            <div className="">
              <h5 className="font-bold text-2xl">Starter</h5>
              <p className="text-[#627382] text-sm font-bold">Perfect for getting started</p>
            </div>

            <div>
                <p className="font-bold text-2xl">$99<span className="text-sm text-[#627382]">/month</span></p>
            </div>

            <div className="">
              <p className="flex items-center font-medium text-[#627382]"><TiTickOutline className="text-success"/>Everything in Pro</p>
              <p className="flex items-center font-medium text-[#627382]"><TiTickOutline className="text-success"/>Team collaboration</p>
              <p className="flex items-center font-medium text-[#627382]"><TiTickOutline className="text-success"/>Custom integrations</p>
              <p className="flex items-center font-medium text-[#627382]"><TiTickOutline className="text-success"/>Dedicated support</p>
              <p className="flex items-center font-medium text-[#627382]"><TiTickOutline className="text-success"/>SLA guarantee</p>
              <p className="flex items-center font-medium text-[#627382]"><TiTickOutline className="text-success"/>Custom branding</p>
            </div>

            <button className="btn w-full rounded-full bg-linear-to-l from-[#9514FA] to-[#4F39F6] mt-5 font-bold text-white">Get Started Free</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransparentPricing;
