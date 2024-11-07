import { Link } from "react-router-dom";
import comicsData from "../../assets/comics-data.json";
import ComicCard from "../ComicCard";

export default function FeaturedComics() {
  const n = comicsData.length;
  const latestComics = [
    comicsData[n - 1],
    comicsData[n - 2],
    comicsData[n - 3],
  ];
  console.log(latestComics);

  return (
    <section className="bg-gray-900 text-white py-32 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-yellow-400 mb-14">
          Latest Comics
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {latestComics.map((comic) => {
            return (
              <Link key={comic.id} to={`/comics/${comic.id}`} className="block">
                <ComicCard comic={comic} />
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link to="/comics">
            <button className="bg-red-500 text-white py-2 px-6 rounded-full mb-4 hover:bg-red-600">
              See More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
