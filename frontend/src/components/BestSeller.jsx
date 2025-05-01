import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";
import { TrendingUp } from "lucide-react";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 4)); // Reduced to 4 for better layout
  }, [products]);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col items-center max-w-2xl mx-auto text-center">
        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-emerald-100">
          <TrendingUp className="w-6 h-6 text-emerald-600" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Most Popular Items
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          Discover our customers&apos; favorite picks, fresh and hand-selected
          for quality
        </p>
      </div>

      {/* Product Grid */}
      <div className="mt-12">
        {bestSeller.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {bestSeller.map((item) => (
              <ProductItem
                key={item._id}
                id={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12">
            <p className="text-lg text-gray-600">No bestsellers available</p>
            <p className="mt-2 text-sm text-gray-500">
              Check back soon for our popular items
            </p>
          </div>
        )}
      </div>

      {/* View All Link */}
      <div className="mt-12 text-center">
        <a
          href="/collection"
          className="inline-flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-500"
        >
          View all products
          <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default BestSeller;
