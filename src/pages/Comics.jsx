import { useState } from "react";
import ComicCard from "../components/ComicCard";
import comicData from "../assets/comics-data.json";
import ComicFilters from "../components/ComicFilters";
export default function Comics() {
  const [priceFilter, setPriceFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const comicsPerPage = 12;

  // Filtering comics
  const filteredComics = comicData.filter((comic) => {
    const matchPrice = priceFilter
      ? comic.Price <= parseFloat(priceFilter)
      : true;
    const matchYear = yearFilter ? comic.Year == parseInt(yearFilter) : true;

    return matchPrice && matchYear;
  });

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
        handlePriceChange={handlePriceChange}
        handleYearChange={handleYearChange}
        handleClearFilters={handleClearFilters}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentComics.length > 0 ? (
          currentComics.map((comic) => {
            return <ComicCard key={comic.id} comic={comic} />;
          })
        ) : (
          <p className="text-center text-gray-400 col-span-full">
            No filters match your filters
          </p>
        )}
      </div>

      <div className="flex justify-center items-center mt-6">
        <button
          onClick={() => handlePagination(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 disabled:text-gray-500 hover:text-gray-400 flex items-center"
        >
          <i className="bx bx-chevron-left bx-sm"></i>
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePagination(index + 1)}
            className={`px-4 py-2 ${
              currentPage === index + 1
                ? " text-white hover:text-gray-300"
                : " text-gray-500 hover:text-gray-400"
            } rounded text-lg `}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => handlePagination(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 flex items-center disabled:text-gray-500 "
        >
          <i className="bx bx-chevron-right bx-sm"></i>
        </button>
      </div>
    </div>
  );
}
