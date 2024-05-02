import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const ProfilePage = () => {
  return (
    <div className="max-w-7xl mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
        <div className="w-full h-[600px] relative overflow-hidden bg-center bg-no-repeat mt-10" style={{ backgroundImage: `url("/hero.jpeg")` }} />
            <h1 className="text-xl font-bold mt-10 items-center justify-center">
                What is <span className="text-emerald-600">VespaVibe</span> ?
            </h1>
      <Separator className="mt-3"/>
      <p className="text-lg font-semibold mt-10 mb-10">
        {"VespaVibe"} menciptakan pengalaman berkendara yang tak terlupakan dengan
        Vespa. Kami tidak sekadar menjual kendaraan, tapi juga gaya hidup.
        Dengan fokus pada keanggunan, kebebasan, dan petualangan, kami mengajak
        pelanggan untuk mengeksplorasi dunia dengan gaya yang tak tertandingi.
        Setiap Vespa dari {"VespaVibe"} tidak hanya menjadi kendaraan, tapi juga
        ekspresi dari kepribadian dan gaya hidup yang unik. Dengan layanan
        personalisasi dan komunitas yang hangat, kami membawa pelanggan ke dalam
        sebuah perjalanan yang membawa kegembiraan dan inspirasi setiap kali
        mereka mengendarai Vespa. Sambutlah gaya hidup yang tak terbatas dengan
        {"VespaVibe"}.
      </p>
    </div>
  );
};

export default ProfilePage;
