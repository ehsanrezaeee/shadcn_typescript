import React from "react";
import { Navbar } from "./_components/Navbar";
import { Footer } from "./_components/Footer";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-slate-100 h-full">
      <Navbar />
      <main className="bg-slate-100 pt-40 pb-20">{children}</main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
