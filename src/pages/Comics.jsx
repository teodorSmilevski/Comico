import ComicCard from "../components/ComicCard";
import comicData from "../assets/comics-data.json";

export default function Comics() {
  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-center mb-4">Our Comics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {comicData.map((comic) => (
          <ComicCard key={comic.id} comic={comic} />
        ))}
      </div>
    </div>
  );
}
