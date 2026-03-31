import React from "react";
import User from "../assets/user.png";
import Package from "../assets/package.png";
import Rocket from "../assets/rocket.png";

const GetStart = () => {
  return (
    <div className="mb-20 bg-[#F9FAFC] ">
      <div className="max-w-7xl mx-auto py-8 lg:py-28">
        <div className="text-center lg:mb-4">
          <h2 className="font-bold lg:font-extrabold text-3xl lg:text-5xl mb-4">Get Started in 3 Steps</h2>
          <p className="text-[#627382] text-sm">Start using premium digital tools in minutes, not hours.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-12 p-8">
          <div className="bg-white space-y-8 border-2 border-[#F1F1F1] p-5 rounded-lg">
            <div className="flex justify-end">
              <p className="bg-linear-to-l from-[#9514FA] to-[#4F39F6] h-8 w-8 text-center py-1 rounded-full text-white font-bold">01</p>
            </div>

            <div className="flex justify-center">
              <img className="bg-[#9514FA]/5 w-24 h-24 rounded-full p-4 items-center" src={User} alt="" />
            </div>

            <div className="text-center">
              <h5 className="text-[#101727] font-bold text-2xl mb-3">
                Create Account
              </h5>
              <p className="text-[#627382] text-sm">
                Sign up for free in seconds. No credit card <br /> required to get
                started.
              </p>
            </div>
          </div>

          <div className="bg-white space-y-8 border-2 border-[#F1F1F1] p-5 rounded-lg">
            <div className="flex justify-end">
              <p className="bg-linear-to-l from-[#9514FA] to-[#4F39F6] h-8 w-8 text-center py-1 rounded-full text-white font-bold">02</p>
            </div>

            <div className="flex justify-center">
              <img className="bg-[#9514FA]/5 w-24 h-24 rounded-full p-4 items-center" src={Package} alt="" />
            </div>

            <div className="text-center">
              <h5 className="text-[#101727] font-bold text-2xl mb-3">
                Choose Products
              </h5>
              <p className="text-[#627382] text-sm">
                Browse our catalog and select the tools <br /> that fit your needs.
              </p>
            </div>
          </div>

          <div className="bg-white space-y-8 border-2 border-[#F1F1F1] p-5 rounded-lg">
            <div className="flex justify-end">
              <p className="bg-linear-to-l from-[#9514FA] to-[#4F39F6] h-8 w-8 text-center py-1 rounded-full text-white font-bold">03</p>
            </div>

            <div className="flex justify-center">
              <img className="bg-[#9514FA]/5 w-24 h-24 rounded-full p-4 items-center" src={Rocket} alt="" />
            </div>

            <div className="text-center">
              <h5 className="text-[#101727] font-bold text-2xl mb-3">
                Start Creating
              </h5>
              <p className="text-[#627382] text-sm">
                Download and start using your premium <br /> tools immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStart;
