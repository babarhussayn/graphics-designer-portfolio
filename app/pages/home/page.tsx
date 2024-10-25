import Images from "@/app/components/Images";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
const HomePage = () => {
  return (
    <>
      <div className="w-full min-h-screen container mx-auto mt-8">
        <div className="flex justify-center items-center flex-col">
          <div className="grid md:grid-cols-2 grid-cols-1 grid-rows-1 justify-center items-center flex-col md:flex-row">
            <div className="w-full mt-12">
              <div className="flex justify-center items-center flex-col gap-8 ">
                <div className="w-full  flex justify-center items-center">
                  <div className="md:w-[500px] md:h-[500px] w-[300px] h-[300px] rounded-full overflow-hidden">
                    <Image
                      src="/images/man-2.png"
                      alt="man-image"
                      width={500}
                      height={500}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex justify-center items-center flex-col gap-8">
                  <div className="flex justify-center items-center gap-2 flex-col">
                    <div>
                      <p>
                        <MdEmail />
                      </p>
                    </div>
                    <h5>Email@gmail.com</h5>
                  </div>
                  <div className="flex justify-center items-center gap-2 flex-col">
                    <p>
                      <MdCall />
                    </p>

                    <h4>12345678</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mt-12 flex justify-center items-center flex-col gap-12">
              <div className="m-2 ">
                <div className="w-full flex justify-center items-center flex-col gap-8">
                  <div className="w-full">
                    <div className="flex justify-center items-center">
                      <h3 className="md:text-7xl text-2xl font-bold font-oswald">
                        Motion Graphics
                      </h3>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="md:w-[500px] w-[250px]">
                      <p className="md:text-start text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iste, culpa. Illo iure, eaque doloribus sit laudantium
                        exercitationem reiciendis error tempora ratione
                        explicabo et obcaecati odio.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-center items-center md:block">
                  <Button className="bg-[#fefefe] text-black rounded-full shadow-xl">
                    Download Cv
                  </Button>
                </div>
              </div>
              <div className="flex justify-center items-center w-full flex-col md:flex-row">
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
