import Content from "@/app/components/Content";
import React from "react";

const Portfolio = () => {
  return (
    <>
      <section id="portfolio" className="w-full container mx-auto mb-14 ">
        <div className="w-full">
          <div className=" flex justify-center items-center ">
            <div className=" ">
              <h4 className="uppercase md:text-4xl text-3xl">
                I can help you with
              </h4>
            </div>
          </div>

          <Content />
        </div>
      </section>
    </>
  );
};

export default Portfolio;
