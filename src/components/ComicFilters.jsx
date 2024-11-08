/* eslint-disable react/prop-types */
export default function ComicFilters({
  priceFilter,
  handlePriceChange,
  yearFilter,
  handleYearChange,
  handleClearFilters,
}) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      <input
        type="number"
        placeholder="Max Price"
        value={priceFilter}
        onChange={handlePriceChange}
        className="w-full md:w-1/4 p-3 rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-yellow-500"
      />

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
      <button
        onClick={handleClearFilters}
        className="text-stone-400 hover:text-stone-100"
      >
        Clear Filters
      </button>
    </div>
  );
}
