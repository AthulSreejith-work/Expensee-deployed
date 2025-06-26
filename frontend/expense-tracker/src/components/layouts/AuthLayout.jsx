import React from 'react';
import CARD_2 from "../../assets/images/card2.png";
import { FiTrendingUp } from "react-icons/fi"; 

const AuthLayout = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12 bg-white">
        <h2 className="text-lg font-medium text-black">Expense Tracker</h2>
        {children}
      </div>

      <div className="hidden md:block w-[40vw] h-screen bg-sky-50 relative overflow-hidden p-8">
        <div className="w-48 h-48 rounded-[40px] bg-cyan-500 absolute -top-7 -left-5" />
        <div className="w-48 h-56 rounded-[40px] border-[20px] border-sky-400 absolute top-[30%] -right-10" />
        <div className="w-48 h-48 rounded-[40px] bg-blue-400 absolute -bottom-7 -left-5" />

        <div className="grid grid-cols-1 z-20">
          <StatsInfoCard
            icon={<FiTrendingUp />}
            label="Track Your Expenses"
            value="225,000"
            color="bg-blue-500"
          />
        </div>

        <img
          src={CARD_2}
          alt="Graph"
          className="w-64 lg:w-[90%] absolute bottom-10 right-1/2 translate-x-1/2 shadow-lg shadow-blue-400/20"
        />
      </div>
    </div>
  );
};

export default AuthLayout;

const StatsInfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex gap-6 bg-white p-4 rounded-xl shadow-md shadow-purple-400/10 border border-gray-200/50 z-10">
      <div className={`w-12 h-12 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl`}>
        {icon}
      </div>
      <div>
        <h6 className="text-xs text-gray-500 mb-1">{label}</h6>
        <span className="text-[20px]">₹{value}</span>
      </div>
    </div>
  );
};
