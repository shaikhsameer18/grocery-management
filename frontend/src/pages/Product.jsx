import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import RelatedProducts from '../components/RelatedProducts';
import { Star, ShoppingBag, Truck, Shield, Clock } from 'lucide-react';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedVariant, setSelectedVariant] = useState('');

  useEffect(() => {
    const product = products.find(item => item._id === productId);
    if (product) {
      setProductData(product);
      setSelectedImage(product.image[0]);
    }
  }, [productId, products]);

  if (!productData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-6 h-6 border-2 border-emerald-500 rounded-full animate-spin border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Image Gallery */}
          <div className="flex flex-col-reverse">
            {/* Thumbnail Strip */}
            <div className="mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
              <div className="grid grid-cols-4 gap-4 sm:gap-6">
                {productData.image.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(img)}
                    className={`relative flex items-center justify-center h-24 bg-white rounded-md ${
                      selectedImage === img ? 'ring-2 ring-emerald-500' : 'hover:opacity-75'
                    }`}
                  >
                    <img
                      src={img}
                      alt=""
                      className="object-cover object-center w-full h-full rounded-md"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Main Image */}
            <div className="aspect-h-1 aspect-w-1 w-full">
              <img
                src={selectedImage}
                alt={productData.name}
                className="object-cover object-center w-full h-full rounded-lg"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{productData.name}</h1>
            
            {/* Rating */}
            <div className="mt-3 flex items-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < 4 ? 'text-yellow-400' : 'text-gray-200'}`}
                    fill={i < 4 ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
              <p className="ml-3 text-sm text-gray-500">(122 reviews)</p>
            </div>

            {/* Price */}
            <div className="mt-4">
              <p className="text-3xl font-bold text-emerald-600">
                {currency}{productData.price}
              </p>
            </div>

            {/* Description */}
            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <p className="text-base text-gray-700">{productData.description}</p>
            </div>

            {/* Features */}
            <div className="mt-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 p-3 bg-emerald-50 rounded-lg">
                  <Truck className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm text-gray-600">Free Delivery</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-emerald-50 rounded-lg">
                  <Shield className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm text-gray-600">Quality Assured</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-emerald-50 rounded-lg">
                  <Clock className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm text-gray-600">Express Delivery</span>
                </div>
              </div>
            </div>

            {/* Variant Selection */}
            {productData.colors && productData.colors.length > 0 && (
              <div className="mt-8">
                <h3 className="text-sm font-medium text-gray-900">Select Variant</h3>
                <div className="grid grid-cols-3 gap-3 mt-2">
                  {productData.colors.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md ${
                        selectedVariant === variant
                          ? 'bg-emerald-600 text-white'
                          : 'bg-white text-gray-900 border hover:bg-gray-50'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Add to Cart */}
            <div className="mt-8">
              <button
                onClick={() => addToCart(productData._id, selectedVariant)}
                className="flex items-center justify-center w-full gap-2 px-8 py-3 text-base font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                <ShoppingBag className="w-5 h-5" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
      </div>
    </div>
  );
};

export default Product;