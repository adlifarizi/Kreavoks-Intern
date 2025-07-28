import PortfolioCard from "@/components/cards/PortfolioCard";
import { Portfolio } from "@/types";

interface PortfolioGridProps {
  paginatedItems: Portfolio[];
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const PortfolioGrid: React.FC<PortfolioGridProps> = ({
  paginatedItems,
  totalPages,
  currentPage,
  setCurrentPage,
}) => {
  return (
    <>
      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedItems.length > 0 ? (
          paginatedItems.map((portfolio) => (
            <PortfolioCard key={portfolio.id} portfolio={portfolio} />
          ))
        ) : (
          <div className="col-span-full py-12 text-center">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No results found</h3>
            <p className="text-gray-600">
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
            >
              <i className="fa-solid fa-chevron-left text-sm"></i>
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 flex items-center justify-center rounded-full ${
                  currentPage === page
                    ? "bg-blue-500 text-white"
                    : "border border-gray-300 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
            >
              <i className="fa-solid fa-chevron-right text-sm"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioGrid;
