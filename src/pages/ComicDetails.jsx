import { useParams } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import comicData from "../assets/comics-data.json";

export default function ComicDetail() {
  const { id } = useParams();

  const comic = comicData.find((comic) => comic.id === id);
  const [quantity, setQuantity] = useState(1);

  const { dispatch } = useCart();

  if (!comic) {
    return <div>Comic not found!</div>;
  }

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id: comic.id,
        series: comic.Series,
        price: comic.Price,
        quantity,
      },
    });

    console.log(`Added ${quantity} of ${comic.Series} to the cart.`);
  };

  return (
    <div className="container mx-auto my-8">
      <Link to="/comics" className="text-md text-gray-300 hover:text-gray-100">
        Go Back
      </Link>
      <h1 className="text-4xl font-bold text-center mb-4">{comic.Series}</h1>
      <div className="flex flex-col md:flex-row items-center">
        <img
          src={`/${comic.Cover}`}
          alt={comic.Series}
          className="h-96 w-auto object-cover rounded shadow-lg mx-auto mb-4 md:mb-0 md:mr-8"
        />
        <div className="flex-1">
          <p className="text-lg">
            <strong>Year:</strong> {comic.Year}
          </p>
          <p className="text-lg">
            <strong>Published:</strong> {comic.Published}
          </p>
          <p className="text-lg">
            <strong>Price:</strong> ${comic.Price}
          </p>
          <div className="mt-4">
            <label htmlFor="quantity" className="block mb-2">
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="border border-gray-600 rounded py-1 px-2 w-20 text-gray-400 text-xl"
            />
          </div>
          <button
            onClick={handleAddToCart}
            className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Add to Cart
          </button>
          <div className="mt-4">
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
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Description</h2>
        <p>{comic.Description || "No description available."}</p>
      </div>
    </div>
  );
}
