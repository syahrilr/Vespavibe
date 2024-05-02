import { Separator } from "@/components/ui/separator";
import { Dot } from "lucide-react";

const VisiMisiPage = () => {
  return (
    <div className="max-w-7xl mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      <div
        className="w-full h-[600px] relative overflow-hidden bg-center bg-no-repeat mt-10"
        style={{ backgroundImage: `url("/1.jpg")` }}
      />
      <h1 className="text-xl font-bold mt-10 items-center justify-center text-emerald-600">
        Visi
      </h1>
      <Separator className="mt-3" />
      <p className="text-lg font-semibold mt-10">
        Menjadi pemimpin dalam menyebarkan gaya hidup yang bersemangat,
        kebebasan, dan petualangan melalui pengalaman berkendara yang tak
        terlupakan dengan Vespa.
      </p>
      <h1 className="text-xl font-bold mt-10 items-center justify-center text-emerald-600">
        Misi
      </h1>
      <Separator className="mt-3 mb-10" />
      <div className="flex flex-row">
        <Dot className="h-10 w-10" />
        <p className="text-lg font-semibold">
          Menghadirkan pengalaman berkendara yang membangkitkan semangat dan
          kegembiraan bagi setiap pelanggan kami.
        </p>
      </div>
      <div className="flex flex-row">
        <Dot className="h-10 w-10" />
        <p className="text-lg font-semibold">
          Menyediakan rangkaian produk Vespa yang inovatif, berkualitas, dan
          memenuhi kebutuhan gaya hidup pelanggan kami.
        </p>
      </div>
      <div className="flex flex-row">
        <Dot className="h-10 w-10" />
        <p className="text-lg font-semibold">
          Membangun komunitas yang hangat dan inklusif bagi para pemilik Vespa,
          tempat mereka dapat berbagi pengalaman, tips, dan inspirasi.
        </p>
      </div>
      <div className="flex flex-row">
        <Dot className="h-10 w-10" />
        <p className="text-lg font-semibold">
          Menjunjung tinggi nilai keberlanjutan dengan mengembangkan solusi
          berkendara yang ramah lingkungan dan berkelanjutan.
        </p>
      </div>
      <div className="flex flex-row">
        <Dot className="h-10 w-10" />
        <p className="text-lg font-semibold">
          Memberikan layanan pelanggan yang unggul, responsif, dan personal,
          untuk memastikan kepuasan dan loyalitas pelanggan kami.
        </p>
      </div>
      <div className="flex flex-row mb-10">
        <Dot className="h-10 w-10" />
        <p className="text-lg font-semibold">
          Menginspirasi orang untuk menjelajahi dunia dengan cara yang berbeda,
          dengan memberikan akses ke pengalaman petualangan dan kebebasan yang
          hanya dapat ditemukan dengan Vespa.
        </p>
      </div>
    </div>
  );
};

export default VisiMisiPage; 
