import React from "react";

interface CategoryFilterProps {
    categories: string[];
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
    className?: string;
}

const CategoryFilterPortfolio: React.FC<CategoryFilterProps> = ({
    categories,
    selectedCategory,
    onSelectCategory,
    className,
}) => {
    return (
        <div className={`flex flex-wrap gap-2 items-center ${className || ""}`}>
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onSelectCategory(category)}
                    className={`relative px-2 md:px-4 py-1.5 rounded-none bg-transparent text-sm whitespace-nowrap transition-all duration-500
            ${
                selectedCategory === category
                    ? "text-blue-600 font-bold"
                    : "text-gray-500 font-medium hover:text-blue-500"
            }
        `}
                    style={{ boxShadow: "none" }}
                >
                    {category === "all" ? "All Project" : category}
                    {selectedCategory === category && (
                        <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-500 rounded"></span>
                    )}
                </button>
            ))}
        </div>
    );
};

export default CategoryFilterPortfolio;
