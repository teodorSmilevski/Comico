import HeroSection from "../components/HomePage/HeroSection";
import FeaturedComics from "../components/HomePage/FeaturedComics";
import PromotionalBanner from "../components/HomePage/PromotionalBanner";
import WhyUs from "../components/HomePage/WhyUs";
import AuthorSpotlight from "../components/HomePage/AuthorSpotlight";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white ">
      <HeroSection />
      <PromotionalBanner />
      <FeaturedComics />
      <WhyUs />
      <AuthorSpotlight />
    </div>
  );
}
