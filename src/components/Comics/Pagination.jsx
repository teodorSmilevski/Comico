/* eslint-disable react/prop-types */
export default function Pagination({
  handlePagination,
  currentPage,
  totalPages,
}) {
  return (
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
  );
}
