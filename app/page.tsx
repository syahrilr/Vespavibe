import Article from "@/components/article";
import Category from "@/components/category";
import Client from "@/components/client";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="max-w-7xl mx-auto">
        <Client />
        <Category />
        <Article />
      </div>
    </main>
  );
}
