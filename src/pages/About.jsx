import AboutGallery from "../components/AboutUs/AboutGallery";
import AboutHeader from "../components/AboutUs/AboutHeader";
import Features from "../components/AboutUs/Features";
import Location from "../components/AboutUs/Location";
import Mission from "../components/AboutUs/Mission";

export default function About() {
  return (
    <div className="bg-gray-900 text-white py-16 px-4">
      <AboutHeader />
      <Mission />
      <Features />
      <AboutGallery />
      <Location />
    </div>
  );
}
