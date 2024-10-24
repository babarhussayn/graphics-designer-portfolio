import Content from "@/app/components/Content";
import React from "react";

const Portfolio = () => {
  return (
    <>
      <section
        id="portfolio"
        className="min-h-screen w-full container mx-auto  "
      >
        <div className="w-full">
          <div className=" flex justify-center items-center mt-8">
            <div className="mt-8">
              <h4 className="uppercase text-4xl">I can help you with</h4>
            </div>
          </div>

          <Content />
        </div>
      </section>
    </>
  );
};

export default Portfolio;
