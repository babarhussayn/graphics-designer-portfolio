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
          <div className="grid md:grid-cols-2 grid-cols-1 grid-rows-1 justify-center items-center flex-col md:flex-row gap-14">
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
                <div className="flex justify-center items-center flex-col gap-2">
                  <div className="flex justify-center items-center gap-4 w-full">
                    <p className="w-full">
                      <MdEmail size={20} />
                    </p>

                    <h4 className="text-2xl font-oswald">
                      attiqaly72@gmail.com
                    </h4>
                  </div>
                  <div className="flex justify-start items-center gap-4 w-full">
                    <p className="">
                      <MdCall size={20} />
                    </p>
                    <h4 className="text-center text-2xl font-oswald">
                      0311-8986293
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mt-12 flex justify-center items-center flex-col gap-12">
              <div className="m-2 ">
                <div className="w-full flex justify-center items-center flex-col gap-8">
                  <div className="w-full flex justify-start">
                    <div className="flex justify-center items-center">
                      <h3 className="md:text-6xl text-2xl font-bold font-oswald">
                        Motion Graphics
                      </h3>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="md:w-[500px] w-[250px]">
                      <p className="md:text-start text-center font-nunito  text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iste, culpa. Illo iure, eaque doloribus sit laudantium
                        exercitationem reiciendis error tempora ratione
                        explicabo et obcaecati odio.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-center items-center md:block">
                  <a href="/pdf/atiq_ali.pdf" download>
                    <Button className="hover:bg-[#8dbeeb] bg-[#2979FF] rounded-full shadow-xl text-white font-oswald text-lg">
                      Download CV
                    </Button>
                  </a>
                </div>
              </div>
              <div className="flex  items-center w-full flex-col md:flex-row">
                <Images />
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
