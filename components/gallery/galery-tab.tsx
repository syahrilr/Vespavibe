import Image from "next/image";

interface GalleryTabProps {
  imageUrl: string;
}

const GalleryTab: React.FC<GalleryTabProps> = ({
  imageUrl,
}) => {
  return (
    <div className="col-span-1 cursor-pointer group mt-20">
      <div className="flex flex-col gap-2 w-full">
        <div
          className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          "
        >
          <Image
            fill
            className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
            src={imageUrl}
            alt="galery"
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryTab;
