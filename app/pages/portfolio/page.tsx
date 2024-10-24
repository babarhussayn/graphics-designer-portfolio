import Content from "@/app/components/Content";
import React from "react";

const Portfolio = () => {
  return (
    <>
      <section id="portfolio" className="min-h-screen w-full ">
        <div className="w-full">
          <div className=" flex justify-center items-center ">
            <div className="">
              <h4 className="uppercase text-4xl">I can help you with</h4>
            </div>
          </div>

          {/* <div className="flex justify-center items-center mt-8">
            <div className="grid grid-cols-4 grid-rows-1 w-[1200px] justify-center"> */}
          <Content />
          {/* <div className="w-full">
                <div className="flex justify-center items-center flex-col">
                  <div>icon</div>
                  <div>
                    <h3>UI/UX Design</h3>
                  </div>
                  <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, repudiandae.</p>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-center items-center flex-col">
                  <div>icon</div>
                  <div></div>
                  <div>content</div>
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-center items-center flex-col">
                  <div>icon</div>
                  <div>heading</div>
                  <div>content</div>
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-center items-center flex-col">
                  <div>icon</div>
                  <div>heading</div>
                  <div>content</div>
                </div>
              </div> */}
        </div>
        {/* </div>
        </div> */}
      </section>
    </>
  );
};

export default Portfolio;
