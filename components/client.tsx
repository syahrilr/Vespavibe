import ClientCard from "./client-card";
import { Separator } from "./ui/separator";

const client = [
  {
    nama: "Adudu",
    imageUrl: "/client1.jpg",
    desc: "Saya sangat puas dengan layanan yang diberikan oleh tim VespaVibe. Mereka sangat profesional dalam menangani pesanan saya dan memberikan solusi yang tepat untuk kebutuhan saya. Produk yang mereka tawarkan juga berkualitas tinggi dan sesuai dengan ekspektasi saya.",
  },
  {
    nama: "Dalang",
    imageUrl: "/client2.jpg",
    desc: "Pengalaman saya dengan VespaVibe sungguh luar biasa. Mereka tidak hanya memberikan produk yang berkualitas, tetapi juga memberikan layanan pelanggan yang ramah dan responsif. Saya sangat merekomendasikan VespaVibe kepada siapa pun yang mencari pengalaman belanja yang menyenangkan.",
  },
  {
    nama: "Jarwo",
    imageUrl: "/client3.jpg",
    desc: "VespaVibe adalah mitra terbaik dalam perjalanan saya mencari kendaraan Vespa. Mereka tidak hanya membantu saya dalam memilih model yang sesuai dengan gaya hidup saya, tetapi juga memberikan informasi yang jelas dan akurat tentang produk. Terima kasih VespaVibe!",
  },
  {
    nama: "Satpol",
    imageUrl: "/client4.jpg",
    desc: "Saya sangat senang dengan layanan yang diberikan oleh VespaVibe. Mereka sangat responsif terhadap pertanyaan saya dan membantu saya dengan cepat dalam menyelesaikan masalah yang saya alami. Produk yang saya terima juga sempurna dan sesuai dengan yang diharapkan. Saya pasti akan kembali ke VespaVibe untuk kebutuhan saya di masa depan.",
  },
];


const Client = () => {
  return (
    <section
      id="categories"
      aria-labelledby="categories-heading"
      className="space-y-8 px-4 sm:px-6 lg:px-8 py-8 md:pt-10 lg:pt-24 sm:pb-28"
    >
      <div className="flex flex-col space-y-4">
        <h2 className="max-w-sm text-3xl md:text-5xl text-start text-emerald-600 font-bold leading-[1.1]">
          Client Testimonials
        </h2>
      </div>
      <Separator />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2md:grid-cols-3 lg:grid-cols-4">
        {client.map((client) => (
            <ClientCard
                key={client.nama}
                nama={client.nama}
                imageUrl={client.imageUrl}
                desc={client.desc}
            />
            
        ))}
      </div>
    </section>
  )
};

export default Client;
