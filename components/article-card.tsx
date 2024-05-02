import Image from "next/image";
import { Button } from "./ui/button";

interface ArticleCardProps {
  date: string;
  title: string;
  imageUrl: string;
  desc: string | undefined;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  imageUrl,
  desc,
  date,
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
        <div className="font-light mb-3">{date}</div>
        <div className="font-semibold text-lg">{title}</div>
        <div className="font-light">{desc}</div>
        <Button variant="outline" size="sm">
          Read More
        </Button>
      </div>
    </div>
  );
};

export default ArticleCard;
