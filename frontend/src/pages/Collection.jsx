import { useContext, useMemo, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from '../components/ProductItem';
import { SlidersHorizontal } from 'lucide-react';

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [sortType, setSortType] = useState('relevant');

  // Sorting Logic
  const sortedProducts = useMemo(() => {
    const productsCopy = [...products];

    switch (sortType) {
      case 'low-high':
        return productsCopy.sort((a, b) => a.price - b.price);
      case 'high-low':
        return productsCopy.sort((a, b) => b.price - a.price);
      case 'newest':
        return productsCopy.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      default:
        return productsCopy; // Relevant (default sorting)
    }
  }, [sortType, products]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="pb-6 border-b">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Fresh Groceries
              </h1>
              <p className="mt-2 text-sm text-gray-600">
                {sortedProducts.length} products available
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-2 bg-white border rounded-lg">
                <SlidersHorizontal className="w-4 h-4 text-gray-400" />
                <select
                  onChange={(e) => setSortType(e.target.value)}
                  className="text-sm text-gray-600 bg-transparent border-none outline-none focus:ring-0"
                >
                  <option value="relevant">Sort by: Relevant</option>
                  <option value="low-high">Price: Low to High</option>
                  <option value="high-low">Price: High to Low</option>
                  <option value="newest">Newest Arrivals</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="py-8">
          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
              {sortedProducts.map((item) => (
                <ProductItem
                  key={item._id}
                  id={item._id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  concentration={item.concentration}
                  size={item.size}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20">
              <p className="text-lg text-gray-600">No products available.</p>
              <p className="mt-2 text-sm text-gray-500">Please check back later.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
