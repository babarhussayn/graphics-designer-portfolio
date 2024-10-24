import Images from "@/app/components/Images";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="w-full min-h-screen container mx-auto ">
        <div className="flex justify-center items-center flex-col">
          <div className="grid grid-cols-2 grid-rows-1 justify-center items-center">
            <div className="w-full mt-12">
              <div className="flex justify-center items-center flex-col gap-8 ">
                <div className="w-full  flex justify-center items-center">
                  <div className="w-[500px] h-[500px] rounded-full overflow-hidden">
                    <Image
                      src="/images/dp-man.jpg"
                      alt="man-image"
                      width={500}
                      height={500}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex justify-start items-center ">
                  <h5>Email@gmail.com</h5>
                </div>
                <hr />
              </div>
            </div>
            <div className="w-full mt-12 flex justify-center items-center flex-col gap-12">
              <div className="m-2 ">
                <div className="w-full flex justify-center items-center flex-col gap-8">
                  <div className="w-full">
                    <div>
                      <h3 className="text-7xl font-bold">Motion Graphics</h3>
                    </div>
                  </div>
                  <div>
                    <div className="w-[600px]">
                      <p className="text-start">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iste, culpa. Illo iure, eaque doloribus sit laudantium
                        exercitationem reiciendis error tempora ratione
                        explicabo et obcaecati odio.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Button className="bg-[#fefefe] text-black rounded-full shadow-xl">
                    Download Cv
                  </Button>
                </div>
              </div>
              <div className="flex justify-center items-center w-full">
                <div>
                  <div>
                    <Images />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div>
            <div>
              <Images />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default HomePage;
