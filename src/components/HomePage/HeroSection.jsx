import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import spidermanImg from "../../assets/spiderman.jpg";
import batmanImg from "../../assets/batman.png";
import supermanImg from "../../assets/superman.png";
import bgImg from "../../assets/background.png";

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1030);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const iconClass =
    "w-20 h-20 rounded-full transform hover:scale-110 duration-300";

  return (
    <section
      className="flex flex-col items-center text-center py-52 px-4 bg-cover bg-no-repeat"
      style={{
        backgroundImage: isMobile ? "none" : `url(${bgImg})`,
        backgroundSize: "100%",
      }}
    >
      <h1 className="text-6xl md:text-7xl font-bold text-yellow-400 mb-6">
        COMICS WORLD
      </h1>
      <p className="text-xl md:text-2xl max-w-lg">
        Your destination for over <span className="text-red-500">30,000</span>{" "}
        comics across the entire comic universe.
      </p>
      <div className="flex space-x-4 mt-8">
        <img src={supermanImg} alt="superman" className={iconClass} />
        <img src={spidermanImg} alt="spiderman" className={iconClass} />
        <img src={batmanImg} alt="batman" className={iconClass} />
      </div>
      <Link to="/comics">
        <button className="bg-yellow-500 text-black py-2 px-6 rounded-full mt-10 hover:bg-yellow-600 ">
          Read Comics
        </button>
      </Link>
    </section>
  );
}
