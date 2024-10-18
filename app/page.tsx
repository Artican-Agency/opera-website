import AboutUs from "@/components/AboutUs";
import AnnouncementSection from "@/components/AnnouncementSection";
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
      <div className="flex flex-col justify-center items-center">
        <AboutUs />
        <AnnouncementSection />
      </div>
    </main>
  );
}
