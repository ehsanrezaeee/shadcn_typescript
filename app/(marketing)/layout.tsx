import React from "react";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-slate-100 h-full">
      {/* navbar */}
      <main className="bg-slate-100 pt-40 pb-20">{children}</main>
      {/* footer */}
    </div>
  );
};

export default MarketingLayout;
