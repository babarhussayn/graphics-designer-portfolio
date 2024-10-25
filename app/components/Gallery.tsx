import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import gallery from "@/gallery.json";

export function Gallery() {
  return (
    <Tabs
      defaultValue="ui/ux"
      className="md:w-[1400px] w-[600px] justify-center items-center"
    >
      <TabsList className="grid md:grid-cols-4 grid-cols-2 gap-4 m-4 ">
        {gallery.map((item, index) => (
          <TabsTrigger value={item.value} key={index} className="">
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {gallery.map((item, index) => (
        <TabsContent
          value={item.value}
          key={index}
          className="flex justify-center items-center"
        >
          <div className="grid md:grid-cols-4  grid-cols-1 grid-rows-1 gap-4 justify-center items-center mt-8 ">
            {item.images.map((src, imgIndex) => (
              <Image
                key={imgIndex}
                src={src}
                alt={`Image ${imgIndex + 1} of ${item.label}`}
                width={400}
                height={100}
                className="rounded-xl flex justify-center items-center"
              />
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
