import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';
import { Sparkles } from 'lucide-react';

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 8)); // Reduced to 8 for better layout
  }, [products]);

  return (
    <div className="relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <div className="w-56 h-56 transform rotate-45 border-8 rounded-full border-emerald-600" />
        <div className="absolute transform rotate-45 border-8 rounded-full w-72 h-72 border-emerald-600" />
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-emerald-100">
            <Sparkles className="w-6 h-6 text-emerald-600" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Fresh Arrivals
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Explore our latest collection of fresh, high-quality groceries
          </p>
        </div>

        {/* Product Grid */}
        <div className="mt-12">
          {latestProducts.length > 0 ? (
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
              {latestProducts.map((item) => (
                <ProductItem 
                  key={item._id} 
                  id={item._id} 
                  image={item.image} 
                  name={item.name} 
                  price={item.price} 
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12">
              <p className="text-lg text-gray-600">No products available</p>
              <p className="mt-2 text-sm text-gray-500">Check back soon for new arrivals</p>
            </div>
          )}
        </div>

        {/* View All Link */}
        <div className="mt-12 text-center">
          <a 
            href="/collection" 
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white rounded-lg bg-emerald-600 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            Browse All Products
          </a>
        </div>
      </div>
    </div>
  );
};

export default LatestCollection;
