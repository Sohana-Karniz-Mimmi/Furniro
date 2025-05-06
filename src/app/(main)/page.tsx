import BrowseTheRange from "@/components/Home/BrowseTheRange";
import Hero from "@/components/Home/Hero";
import OurProducts from "@/components/Home/OurProducts";

export default function Home() {
  return (
    <main className="w-full layout_container">
      <Hero />
      <BrowseTheRange />
      <OurProducts />
    </main>
  );
}
