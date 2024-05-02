import { ShoppingCart } from "lucide-react";
import Image from "next/image";

interface ProdukCardProps {
  title: string;
  imageUrl: string;
  desc: string | undefined;
  harga: string | undefined;
}

const ProdukCard: React.FC<ProdukCardProps> = ({
  title,
  imageUrl,
  desc,
  harga,
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
            alt="wisata"
          />
          <div
            className="
            absolute
            top-3
            right-3
          "
          ></div>
        </div>
        <div className="font-semibold text-lg">{title}</div>
        <div className="font-light">{desc}</div>
        <div className="flex flex-row justify-between">
          <div className="font-bold text-emerald-600">{harga}</div>
          <ShoppingCart className="h-8 w-8" />
        </div>
      </div>
    </div>
  );
};

export default ProdukCard;
