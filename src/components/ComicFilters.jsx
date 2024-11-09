/* eslint-disable react/prop-types */
export default function ComicFilters({
  priceFilter,
  handlePriceChange,
  genreFilter,
  yearFilter,
  handleYearChange,
  handleGenreChange,
  handleClearFilters,
}) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      <div>
        <label className="text-white mb-2">
          {priceFilter
            ? `Price Range: $ 0 - ${priceFilter}`
            : `Price range not set`}
        </label>
        <input
          type="range"
          min="0"
          max="15"
          value={priceFilter}
          onChange={handlePriceChange}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>

      <select
        value={yearFilter}
        onChange={handleYearChange}
        className="w-full md:w-1/4 p-3 rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-yellow-500"
      >
        <option value="">All Years</option>
        <option value="1939">1939</option>
        <option value="1940">1940</option>
        <option value="1941">1941</option>
        <option value="1942">1942</option>
        <option value="1943">1943</option>
        <option value="1944">1944</option>
        <option value="1945">1945</option>
        <option value="1947">1947</option>
        <option value="1948">1948</option>
        <option value="1951">1951</option>
        <option value="1954">1954</option>
        <option value="1985">1985</option>
      </select>

      <select
        value={genreFilter}
        onChange={handleGenreChange}
        className="w-full md:w-1/4 p-3 rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-yellow-500"
      >
        <option value="">All Genres</option>
        <option value="Superhero">Superhero</option>
        <option value="Mystery">Mystery</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Adventure">Adventure</option>
        <option value="Comedy">Comedy</option>
      </select>
      <button
        onClick={handleClearFilters}
        className="text-stone-400 hover:text-stone-100"
      >
        Clear Filters
      </button>
    </div>
  );
}
