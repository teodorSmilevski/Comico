import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import comicData from "../assets/comics-data.json";
import AddToCartBtn from "../components/AddToCartBtn";
export default function ComicDetail() {
  const { id } = useParams();

  const comic = comicData.find((comic) => comic.id === id);
  const [quantity, setQuantity] = useState(1);

  if (!comic) {
    return <div>Comic not found!</div>;
  }

  return (
    <div className="container mx-auto my-20">
      <Link
        to="/comics"
        className="text-md mb-5 text-gray-500 hover:text-gray-100 flex gap-2 items-center"
      >
        <i className="bx bx-arrow-back "></i> Go Back
      </Link>
      <div className="flex flex-col md:flex-row items-center">
        <img
          src={`/${comic.Cover}`}
          alt={comic.Series}
          className="h-[35rem] w-auto object-cover rounded shadow-lg mx-auto mb-4 md:mb-0 md:mr-8"
        />
        <div className="flex-1">
          <h1 className="text-4xl font-bold  mb-4">{comic.Series}</h1>
          <p className="text-lg">
            <strong>Year:</strong> {comic.Year}
          </p>
          <p className="text-lg">
            <strong>Published:</strong> {comic.Published}
          </p>
          <p className="text-lg">
            <strong>Genre:</strong> {comic.genre}
          </p>
          <p className="text-lg">
            <strong>Price:</strong> ${comic.Price}
          </p>
          <div className="mt-8  lg:w-1/2">
            <h2 className="text-2xl font-bold">Description</h2>
            <p>{comic.Description || "No description available."}</p>
          </div>
          <div className="mt-4">
            <label htmlFor="quantity" className="block mb-2">
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              min="1"
              max={comic.stock}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-20 p-3 rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-yellow-500"
            />
            <p className={`${comic.stock < 4 && "text-red-600 py-3"}`}>
              Left in stock: {comic.stock}
            </p>
          </div>
          <AddToCartBtn
            comic={comic}
            quantity={quantity}
            text={`Add to cart`}
            disabled={comic.stock === 0}
          />
          <div className="mt-4 ">
            <a
              href={comic.SeriesLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              View Series
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
