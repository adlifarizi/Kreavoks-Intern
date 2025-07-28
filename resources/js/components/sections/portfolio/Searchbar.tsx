import React from "react";

interface SearchbarProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    className?: string;
}

const Searchbar: React.FC<SearchbarProps> = ({
    searchQuery,
    setSearchQuery,
    className = "",
}) => {
    return (
        <div className={`w-full md:w-auto ${className}`}>
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search portfolio..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fa-solid fa-search text-gray-400"></i>
                </div>
            </div>
        </div>
    );
};

export default Searchbar;
