import { Gallery } from "@/app/components/Gallery";
import React from "react";

const PortPage = () => {
  return (
    <section id="portfolio" className="min-h-screen w-full container mx-auto">
      <div className="flex justify-center items-center m-4">
        <div className="m-4">
          <h3 className="uppercase text-4xl font-bold font-oswald">
            Portfolio
          </h3>
        </div>
      </div>
      <div className="flex justify-center items-center w-full">
        <Gallery />
      </div>
    </section>
  );
};

export default PortPage;
