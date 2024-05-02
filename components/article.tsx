import ArticleCard from "./article-card";
import { Separator } from "./ui/separator";

const vespaCategory = [
  {
    date: "15 Maret 2021",
    title: "VESPA 946 DRAGON HADIR DI INDONESIA",
    imageUrl: "/news1.jpg",
    desc: "Vespa 946 Dragon sudah resmi diluncurkan di Indonesia dengan harga Rp267 juta. Koleksi Vespa 946 Dragon, seperti Jaket Varsity, Helm Dragon, dan aksesori kendaraan (flyscreen & rear bag), dijual secara terpisah. Bagi para penggemar gaya hidup yang elegan dan eksklusif yang tertarik dapat melihat langsung Vespa 946 Dragon yang ikonik di Plaza Senayan pada 8-13 Maret 2024 dan di dealer Motoplex 4B yang tersebar di 11 kota.",
  },
  {
    date: "20 April 2021",
    title:
      "DEALER MOTOPLEX 4B PECENONGAN RESMI DIBUKA, MENAWARKAN AKSES YANG LEBIH LUAS AKAN PENGALAMAN BERKENDARA PREMIUM DI JAKARTA",
    imageUrl: "/news2.jpg",
    desc: "PT Piaggio Indonesia kembali mempertegas kehadiran kendaraan roda dua premium di Indonesia melalui pembukaan outlet Motoplex 4 Brands di Pecenongan, Jakarta Pusat. Berkolaborasi dengan PT Gunung Selamat Jaya, pembukaan dealer ke-58 di Indonesia ini memperkuat pemahaman PT Piaggio Indonesia terhadap potensi market di Jakarta yang menjanjikan, sekaligus melanjutkan peran sebagai penyedia pengalaman gaya hidup dan mobilitas premium.",
  },
  {
    date: "25 Mei 2021",
    title:
      "PT PIAGGIO INDONESIA HADIRKAN DEALER MOTOPLEX PIAGGIO VESPA DI GADING SERPONG, TANGERANG",
    imageUrl: "/news3.jpg",
    desc: " PT Piaggio Indonesia meresmikan dealer Motoplex 2 brand terbaru di kawasan Gading Serpong, Tangerang. Dealer terbaru ini hadir dengan fasilitas 3S (sales, sparepart, and service) untuk Piaggio dan Vespa.Berlokasi di salah satu kawasan dengan kesibukan tinggi dan trendy Gading Serpong, dealer ini semakin mempermudah akses para pecinta otomotif premium a la Italia di untuk lebih dekat dengan produk dan layanan dari Piaggio dan Vespa.",
  },
];

const Article = () => {
  return (
    <section
      id="categories"
      aria-labelledby="categories-heading"
      className="space-y-8 px-4 sm:px-6 lg:px-8 py-8 md:pt-10 lg:pt-24 sm:pb-28"
    >
      <div className="flex flex-col space-y-4">
        <h2 className="max-w-sm text-3xl md:text-5xl text-start text-emerald-600 font-bold leading-[1.1]">
          Article
        </h2>
      </div>
      <Separator />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        {vespaCategory.map((category) => (
          <ArticleCard
            key={category.title}
            title={category.title}
            imageUrl={category.imageUrl}
            desc={category.desc}
            date={category.date}
          />
        ))}
      </div>
    </section>
  );
};

export default Article;
