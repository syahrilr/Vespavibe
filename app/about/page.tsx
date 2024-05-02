import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      <h1 className="text-3xl font-bold mt-10 items-center justify-center flex">
        About<p className="text-emerald-600 ml-2">US</p> 
      </h1>
      <p className="text-lg font-semibold mt-10">
        Selamat datang di VespaVibe!
      </p>
      <p className="mt-5">
        Kami adalah tim yang bersemangat dalam membawa gaya hidup yang
        bersemangat dan inspiratif melalui pengalaman berkendara yang tak
        terlupakan dengan Vespa. Sejak didirikan, kami telah berkomitmen untuk
        menjadi penyedia terkemuka dalam dunia Vespa, menghadirkan pengalaman
        berkendara yang menginspirasi dan membangkitkan semangat bagi pelanggan
        kami di seluruh dunia.
      </p>
      <p className="mt-2">
        Di VespaVibe, kami memahami bahwa Vespa bukan hanya sekadar kendaraan;
        itu adalah ikon gaya hidup yang melampaui batas jalan. Kami percaya
        bahwa setiap perjalanan dengan Vespa harus menjadi petualangan yang
        membawa kegembiraan dan kebebasan. Itu sebabnya kami mengambil peran
        kami dalam menyediakan rangkaian produk Vespa yang inovatif,
        berkualitas, dan sesuai dengan kebutuhan gaya hidup pelanggan kami.
      </p>
      <p className="mt-2">
        Namun, VespaVibe bukan hanya tentang kendaraan. Kami adalah komunitas
        yang terdiri dari para pecinta Vespa yang berbagi hasrat yang sama untuk
        menjelajahi dunia dengan gaya yang tak tertandingi. Di sini, kami tidak
        hanya menjual kendaraan, tetapi juga menciptakan ikatan yang kuat antara
        sesama penggemar Vespa, tempat kami dapat saling berbagi pengalaman,
        inspirasi, dan petualangan.
      </p>
      <p className="mt-2">
        Kami juga berkomitmen untuk menjaga lingkungan dan masyarakat di sekitar
        kami. Kami mendukung nilai-nilai keberlanjutan dengan mengembangkan
        solusi berkendara yang ramah lingkungan dan berkelanjutan. Di samping
        itu, kami juga aktif dalam berbagai kegiatan sosial dan amal untuk
        memberikan kembali kepada masyarakat.
      </p>
      <p className="mt-2 mb-20">
        Terima kasih telah memilih VespaVibe sebagai mitra perjalanan Anda.
        Bersama-sama, mari kita jelajahi dunia dengan gaya yang tak terbatas dan
        semangat yang menggelora!
      </p>
    </div>
  );
};
export default AboutPage;
