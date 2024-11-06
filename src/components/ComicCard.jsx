/* eslint-disable react/prop-types */
export default function ComicCard({ comic }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <img
        src={comic.Cover}
        alt={comic.Series}
        className="h-48 w-full object-cover rounded"
      />
      <h2 className="text-lg font-bold mt-2">{comic.Series}</h2>
      <p>
        Published: {comic.Published} {comic.Year}
      </p>
      <p>Price: {comic.Price} den.</p>
    </div>
  );
}
