import Image from "next/image";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Star } from "lucide-react";

interface ClientCardProps {
  nama: string;
  imageUrl: string;
  desc: string | undefined;
}

const ClientCard: React.FC<ClientCardProps> = ({
  nama,
  imageUrl,
  desc,
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
            src={imageUrl}
            alt="client"
            width={50}
            height={50}
            className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition"
          />
        </div>
        <div className="font-semibold text-lg">{nama}</div>
        <div className="font-ligh line-clamp-2">{desc}</div>
        <div className="flex flex-row gap-2">
            <Star className="h-5 w-5" fill="true" />
            <Star className="h-5 w-5" fill="true" />
            <Star className="h-5 w-5" fill="true" />
            <Star className="h-5 w-5" fill="true" />
            <Star className="h-5 w-5" fill="true" />
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
