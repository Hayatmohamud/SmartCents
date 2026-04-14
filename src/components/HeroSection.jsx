import React from "react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-4">
          Manage Your Finance With Intelligence.
        </h1>
        <p className="text-lg mb-8">
          An  Financial Management Platform That Helps You Track,
          Analyze, And Optimize Your Spending With Real-Time Insights.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="primary"
            className="bg-purple-600 w-full sm:w-48 h-14 border-2 hover:bg-purple-700 text-white font-bold transition-all"
          >
            Get Started
          </Button>

          <Button
            variant="secondary"
            className="bg-yellow-50 w-full sm:w-48 h-14 border-2 border-white hover:bg-white hover:text-black font-bold transition-all"
          >
            View on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
