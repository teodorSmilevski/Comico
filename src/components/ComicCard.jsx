/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import AddToCartBtn from "./AddToCartBtn";
export default function ComicCard({ comic }) {
  return (
    <div className=" p-4 rounded  transform transition-transform hover:scale-105">
      <Link to={`/comics/${comic.id}`} className="block">
        <img
          src={comic.Cover}
          alt={comic.Series}
          className="h-64 w-full object-cover rounded mb-4"
        />
      </Link>
      <div className="flex justify-between items-end">
        <Link to={`/comics/${comic.id}`} className="block">
          <div>
            <h2 className="text-lg font-semibold  text-yellow-400 mt-2">
              {comic.Series}
            </h2>
            <p className=" text-gray-400">
              Published: {comic.Published} {comic.Year}
            </p>
            <p className=" text-gray-400">Price: ${comic.Price}</p>
          </div>
        </Link>
        <AddToCartBtn
          comic={comic}
          quantity={1}
          text={<i className="bx bx-cart"></i>}
        />
      </div>
    </div>
  );
}
