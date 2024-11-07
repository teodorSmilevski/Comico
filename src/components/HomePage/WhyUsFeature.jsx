import { FaBookOpen, FaUsers, FaShieldAlt } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
export default function WhyUsFeature({ icon, title, desc }) {
  let iconObject = "";

  if (icon === "FaUsers") {
    iconObject = (
      <FaUsers className="text-4xl md:text-5xl text-yellow-400 mb-4" />
    );
  }

  if (icon === "FaShieldAlt") {
    iconObject = (
      <FaShieldAlt className="text-4xl md:text-5xl text-yellow-400 mb-4" />
    );
  }

  if (icon === "FaBookOpen") {
    iconObject = (
      <FaBookOpen className="text-4xl md:text-5xl text-yellow-400 mb-4" />
    );
  }

  return (
    <div className="flex flex-col items-center text-center max-w-xs p-4 transform hover:scale-110 duration-200">
      {iconObject}
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-300 mt-2">{desc}</p>
    </div>
  );
}
