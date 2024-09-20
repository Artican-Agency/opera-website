import AboutUs from "@/components/AboutUs";
import BackgroundSlider from "@/components/BackgroundSlider";
import BlogRecent from "@/components/BlogRecent";
import RelevantProducts from "@/components/RelevantProducts";
import StatSection from "@/components/StatSection";

export default function Home() {
  return (
    <main className="bg-white">
      <BackgroundSlider />
      <StatSection />
      <RelevantProducts />
      <BlogRecent />
      <AboutUs />
    </main>
  );
}
