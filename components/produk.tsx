import ProdukCard from "./produk-card";
import { Separator } from "./ui/separator";

const vespaCategory = [
  {
    title: "Vespa Klasik",
    imageUrl: "/klasik.jpg",
    desc: "",
    harga: "Rp 35.000.000 - Rp 50.000.000",
  },
  {
    title: "Vespa Modern",
    imageUrl: "/modern.jpg",
    desc: "",
    harga: "Rp 40.000.000 - Rp 55.000.000",
  },
  {
    title: "Vespa Skuter Matic",
    imageUrl: "/skuter-matik.jpg",
    desc: "",
    harga: "Rp 30.000.000 - Rp 45.000.000",
  },
  {
    title: "Vespa Skuter Klasik",
    imageUrl: "/skuter-klasik.jpg",
    desc: "",
    harga: "Rp 35.000.000 - Rp 50.000.000",
  },
  {
    title: "Vespa Skuter Klasik",
    imageUrl: "/skuter-klasik.jpg",
    desc: "",
    harga: "Rp 35.000.000 - Rp 50.000.000",
  },
  {
    title: "Vespa Skuter Klasik",
    imageUrl: "/skuter-klasik.jpg",
    desc: "",
    harga: "Rp 35.000.000 - Rp 50.000.000",
  },
  {
    title: "Vespa Skuter Klasik",
    imageUrl: "/skuter-klasik.jpg",
    desc: "",
    harga: "Rp 35.000.000 - Rp 50.000.000",
  },
];

const Produk = () => {
  return (
    <div className="max-w-7xl mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      <section
        id="categories"
        aria-labelledby="categories-heading"
        className="space-y-8 px-4 sm:px-6 lg:px-8 py-8 md:pt-10 lg:pt-24 sm:pb-28"
      >
        <div className="flex flex-col space-y-4">
          <h2 className="max-w-sm text-xl md:text-5xl text-start text-emerald-600 font-bold leading-[1.1]">
            Vespa Price List
          </h2>
          <h3 className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Choose your Vespa based on your budget.
          </h3>
        </div>
        <Separator />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {vespaCategory.map((category) => (
            <ProdukCard
              key={category.title}
              title={category.title}
              imageUrl={category.imageUrl}
              desc={category.desc}
              harga={category.harga}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Produk;
