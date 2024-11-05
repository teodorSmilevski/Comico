import { useParams } from "react-router-dom";
import { useState } from "react";
import comicData from "../assets/comics-data.json";

export default function ComicDetail() {
  const { id } = useParams();
  console.log(typeof parseInt(id));

  const comic = comicData.find((comic) => comic.id === id);
  const [quantity, setQuantity] = useState(1);

  console.log(comic);

  if (!comic) {
    return <div>Comic not found!</div>;
  }

  const handleAddToCart = () => {
    // Implement your cart logic here (e.g., update cart state, show success message)
    console.log(`Added ${quantity} of ${comic.series} to the cart.`);
  };

  return (
    <div className="container mx-auto my-8">
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
              className="border border-gray-600 rounded p-2 w-20"
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
