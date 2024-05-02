import { Separator } from "@/components/ui/separator";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const KontakPage = () => {
  return (
    <div className="max-w-7xl mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      <section
        id="categories"
        aria-labelledby="categories-heading"
        className="space-y-8 px-4 sm:px-6 lg:px-8 py-8 md:pt-10 lg:pt-24 sm:pb-28"
      >
        <div className="flex flex-col space-y-4">
          <h2 className="max-w-sm text-xl md:text-5xl text-start text-emerald-600 font-bold leading-[1.1]">
            Kontak Kami
          </h2>
          <h3 className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Selamat datang di halaman kontak kami! Kami senang mendengar dari
            Anda. Jika Anda memiliki pertanyaan, umpan balik, atau permintaan
            khusus, jangan ragu untuk menghubungi kami menggunakan salah satu
            metode di bawah ini:
          </h3>
        </div>
        <Separator />
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2 items-center">
            <MapPin size={24} className="text-emerald-600" />
            <p className="font-bold text-emerald-600">Alamat Kantor</p>
          </div>
          <p className="font-semibold ml-8">Jln. 123 VespaVibe.</p>
          <p className="font-semibold ml-8">Kota Vespa, 12345</p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2 items-center">
            <Phone size={24} className="text-emerald-600" />
            <p className="font-bold text-emerald-600">Telepon</p>
          </div>
          <p className="font-semibold ml-8">+12345678</p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2 items-center">
            <Mail size={24} className="text-emerald-600" />
            <p className="font-bold text-emerald-600">Email</p>
          </div>
          <p className="font-semibold ml-8">info@vespavibe.com</p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2 items-center">
            <Clock size={24} className="text-emerald-600" />
            <p className="font-bold text-emerald-600">Jam Operasional</p>
          </div>
          <p className="font-semibold ml-8">09.00 - 20.00 WITA</p>
        </div>
        <Separator />
        <h3 className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Terima kasih telah menghubungi kami. Kami akan berusaha untuk
          merespons setiap pertanyaan atau permintaan Anda dengan segera.
        </h3>
      </section>
    </div>
  );
};

export default KontakPage;
