import { ArrowRight } from "lucide-react";
import CategoryCard from "./category-card";

const vespaCategory = [
  {
    title: "Vespa Klasik",
    imageUrl: "/klasik.jpg",
    desc: "Model-model Vespa dengan desain klasik yang terinspirasi dari model asli Vespa yang pertama kali diperkenalkan pada tahun 1946."
  },
  {
    title: "Vespa Modern",
    imageUrl: "/modern.jpg",
    desc: " Model-model Vespa yang memiliki sentuhan desain yang lebih modern dan fitur-fitur canggih, seperti lampu LED, teknologi injeksi bahan bakar, dan fitur keselamatan.",
  },
  {
    title: "Vespa Skuter Matic",
    imageUrl: "/skuter-matik.jpg",
    desc: "Model-model Vespa yang dilengkapi dengan transmisi otomatis, sehingga lebih mudah digunakan dan nyaman untuk berkendara di perkotaan.",
  },
  {
    title: "Vespa Skuter Klasik",
    imageUrl: "/skuter-klasik.jpg",
    desc: "Vespa dalam kategori ini memiliki desain yang klasik namun dilengkapi dengan fitur-fitur modern, menjembatani kesenjangan antara gaya retro dan teknologi terkini.",
  }
];

const Category = () => {
  return (
    <section
      id="categories"
      aria-labelledby="categories-heading"
      className="space-y-8 px-4 sm:px-6 lg:px-8 py-8 md:pt-10 lg:pt-24 sm:pb-28"
    >
      <div className="flex items-end justify-between">
        <div className="flex flex-col space-y-4">
          <h2 className="max-w-sm text-3xl md:text-5xl text-start text-emerald-600 font-bold leading-[1.1]">
            Vespa Categories
          </h2>
          <h3 className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Find the best Vespa from stores around the world
          </h3>
        </div>
        <a
          href="/products"
          className="hidden md:flex gap-1 text-emerald-700 hover:translate-x-1 hover:text-emerald-600 transition-all"
        >
          Shop the collection <ArrowRight />
        </a>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {vespaCategory.map((category) => (
            <CategoryCard
            key={category.title}
              title={category.title}
              imageUrl={category.imageUrl}
              desc={category.desc}
              harga=""
            />

        ))}
      </div>
    </section>
  );
};

export default Category;
