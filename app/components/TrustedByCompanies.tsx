import React from "react";
import MovingLogos from "./MovingLogos"

const TrustedByCompanies: React.FC = () => {
  return (
    <section className="bg-white/70 dark:bg-transparent">
      <div className="container mx-auto py-8 px-4">
        <MovingLogos />
        <h2 className="text-3xl font-bold mt-4 text-center text-gray-900 dark:text-white">
          Trusted by 50+ Companies Worldwide
        </h2>
      </div>
    </section>
  );
};

export default TrustedByCompanies;
