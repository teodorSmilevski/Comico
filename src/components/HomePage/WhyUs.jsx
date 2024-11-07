import WhyUsFeature from "./WhyUsFeature";
export default function WhyUs() {
  return (
    <div className="bg-gray-800 text-white py-24 px-4">
      <div className="container mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">
          Why Choose Us?
        </h2>
        <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto">
          Discover why our store is the top destination for comic enthusiasts
          worldwide. We bring you the best selection, quality, and expertise.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-10">
        <WhyUsFeature
          icon="FaUsers"
          title="Trusted by 800k+ Fans"
          desc="Our community of comic enthusiasts continues to grow, thanks to our commitment to quality and service."
        />
        <WhyUsFeature
          icon="FaShieldAlt"
          title="30,000+ Comics"
          desc="Explore an extensive collection of comics from all your favorite publishers and creators."
        />
        <WhyUsFeature
          icon="FaBookOpen"
          title="Quality & Security"
          desc="We provide a secure and reliable platform, ensuring a smooth experience for every comic lover."
        />
      </div>
    </div>
  );
}
