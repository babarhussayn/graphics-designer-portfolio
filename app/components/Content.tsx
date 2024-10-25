import Image from "next/image";
import React from "react";

interface ContentItem {
  icon: string;
  heading: string;
  description: string;
  alt: string;
}

const contents: ContentItem[] = [
  {
    icon: "/images/responsive-design.gif",
    heading: "UI/UX Design",
    description: `lorem ipsum dolor sit amet, consectetur adip`,
    alt: "icon-1",
  },
  {
    icon: "/images/Graphic designing.gif",
    heading: "Graphic Designing",
    description: `lorem ipsum dolor sit amet, consectetur adip`,
    alt: "icon-2",
  },
  {
    icon: "/images/Web developement.gif",
    heading: "Website Design",
    description: `lorem ipsum dolor sit amet, consectetur adip`,
    alt: "icon-3",
  },
  {
    icon: "/images/video Editing.gif",
    heading: "Video Editing",
    description: `lorem ipsum dolor sit amet, consectetur adip`,
    alt: "icon-4",
  },
];

const Content = () => {
  return (
    <>
      <div>
        <div className="flex justify-center items-center w-full mt-8">
          <div>
            <div className="grid md:grid-cols-4 grid-cols-1 grid-rows-1 gap-2">
              {contents.map((items, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center flex-col gap-6 shadow-lg p-6 bg-white rounded-xl"
                >
                  <div>
                    <Image
                      src={items.icon}
                      alt={items.alt}
                      width={200}
                      height={200}
                      unoptimized
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-oswald">
                      {items.heading}
                    </h3>
                  </div>
                  <div>
                    <p className="text-center font-oswald text-lg">
                      {items.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
