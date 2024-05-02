import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const gallery = [
  {
    imageUrl: "/1.jpg",
  },
  {
    imageUrl: "/2.jpg",
  },
  {
    imageUrl: "/3.jpg",
  },
  {
    imageUrl: "/klasik.jpg",
  },
  {
    imageUrl: "/modern.jpg",
  },
  {
    imageUrl: "/skuter-klasik.jpg",
  },
  {
    imageUrl: "/skuter-matik.jpg",
  },
];

const GalleryPage = () => {
  return (
    <div className="max-w-7xl mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      <section
        id="categories"
        aria-labelledby="categories-heading"
        className="space-y-8 px-4 sm:px-6 lg:px-8 py-8 md:pt-10 lg:pt-24 sm:pb-28"
      >
        <div className="flex flex-col space-y-4">
          <h2 className="max-w-sm text-xl md:text-5xl text-start text-emerald-600 font-bold leading-[1.1]">
            Our Gallery
          </h2>
          <h3 className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Check out our gallery of Vespa products
          </h3>
        </div>
        <Separator />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {gallery.map((gallery) => (
                <div key={gallery.imageUrl} className="relative">
                <Image
                    src={gallery.imageUrl}
                    alt="gallery"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded-lg"
                />
                </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
