import { Link } from "react-router-dom";

export default function PromotionalBanner() {
  return (
    <div className="bg-red-500 text-white py-8 px-4 md:px-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold">
            Limited Time Offer!
          </h2>
          <p className="text-lg md:text-xl mt-2">
            Get up to <span className="font-bold">50% off</span> on selected
            comics!
          </p>
        </div>

        <div className="text-center">
          <Link to="/comics">
            <button className="bg-yellow-400 text-black font-semibold py-2 px-6 rounded-full hover:bg-yellow-500 transition ">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
