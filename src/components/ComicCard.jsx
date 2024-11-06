/* eslint-disable react/prop-types */
export default function ComicCard({ comic }) {
  return (
    <div className="bg-gray-800 p-4 rounded shadow-lg transform transition-transform hover:scale-105">
      <img
        src={comic.Cover}
        alt={comic.Series}
        className="h-64 w-full object-cover rounded mb-4"
      />
      <h2 className="text-lg font-semibold  text-yellow-400 mt-2">
        {comic.Series}
      </h2>
      <p className=" text-gray-400">
        Published: {comic.Published} {comic.Year}
      </p>
      <p className=" text-gray-400">Price: {comic.Price} den.</p>
    </div>
  );
}
