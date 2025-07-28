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
    <div
      className={`container mx-auto px-6 md:px-12 lg:px-16 pt-8 flex flex-wrap gap-2 items-center ${className || ""}`}
    >
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap transition-all duration-300 ${
            selectedCategory === category
              ? "bg-blue-500 text-white"
              : "cursor-pointer bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {category === "all" ? "All Projects" : category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilterPortfolio;