import BrowseTheRange from "@/components/Home/BrowseTheRange";
import FurnitureGallery from "@/components/Home/FurnitureGallery";
import Hero from "@/components/Home/Hero";
import Inspirations from "@/components/Home/Inspirations";
import OurProducts from "@/components/Home/OurProducts";

export default function Home() {
  return (
    <main className="layout_container">
      <Hero />
      <BrowseTheRange />
      <OurProducts />
      <Inspirations />
      <FurnitureGallery />
    </main>
  );
}
