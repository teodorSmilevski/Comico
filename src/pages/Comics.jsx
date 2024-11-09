import { useState } from "react";
import ComicCard from "../components/ComicCard";
import comicData from "../assets/comics-data.json";
import ComicFilters from "../components/ComicFilters";
import Pagination from "../components/Comics/Pagination";
export default function Comics() {
  const [priceFilter, setPriceFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const comicsPerPage = 12;

  // Filtering comics
  const filteredComics = comicData.filter((comic) => {
    const matchPrice = priceFilter
      ? comic.Price <= parseFloat(priceFilter)
      : true;
    const matchYear = yearFilter ? comic.Year == parseInt(yearFilter) : true;
    const matchGenre = genreFilter ? comic.genre === genreFilter : true;

    return matchPrice && matchYear && matchGenre;
  });

  function handleGenreChange(e) {
    setGenreFilter(e.target.value);
  }

  function handlePriceChange(e) {
    setPriceFilter(e.target.value);
  }

  function handleYearChange(e) {
    setYearFilter(e.target.value);
  }

  function handleClearFilters() {
    setPriceFilter("");
    setYearFilter("");
  }

  // Pagination
  const indexLast = currentPage * comicsPerPage;
  const indexFirst = indexLast - comicsPerPage;
  const currentComics = filteredComics.slice(indexFirst, indexLast);

  function handlePagination(pageNum) {
    setCurrentPage(pageNum);
  }
  const totalPages = Math.ceil(filteredComics.length / comicsPerPage);

  return (
    <div className="my-20">
      <h1 className="text-3xl font-bold  mb-4">Our Comics</h1>

      <ComicFilters
        priceFilter={priceFilter}
        genreFilter={genreFilter}
        handlePriceChange={handlePriceChange}
        handleYearChange={handleYearChange}
        handleGenreChange={handleGenreChange}
        handleClearFilters={handleClearFilters}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentComics.length > 0 ? (
          currentComics.map((comic) => {
            return <ComicCard key={comic.id} comic={comic} />;
          })
        ) : (
          <p className="text-center text-gray-400 col-span-full h0">
            No results match your filters
          </p>
        )}
      </div>

      {currentComics.length > 0 && (
        <Pagination
          handlePagination={handlePagination}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      )}
    </div>
  );
}
