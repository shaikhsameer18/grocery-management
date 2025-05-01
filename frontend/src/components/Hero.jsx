import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import {
  ShoppingBag,
  ArrowRight,
  Leaf,
  Truck,
  Clock,
  Star,
} from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen bg-white">
      <div className="flex flex-col h-full lg:flex-row">
        <div className="flex flex-col justify-center w-full px-6 py-8 lg:w-1/2 lg:px-16">
          <div className="max-w-xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium rounded-full text-emerald-700 bg-emerald-50">
              <Star className="w-4 h-4" />
              <span>India&apos;s Most Trusted Grocery Store</span>
            </div>

            <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Fresh Groceries,
              <span className="text-emerald-600"> Delivered Daily</span>
            </h1>

            <p className="mt-4 text-lg text-gray-600">
              Experience the convenience of fresh groceries delivered to your
              doorstep. We source directly from local farms to bring you the
              freshest produce daily.
            </p>

            <div className="flex flex-col gap-4 mt-6 sm:flex-row">
              <button
                onClick={() => navigate("/collection")}
                className="flex items-center justify-center gap-2 px-8 py-3 text-white transition-all duration-300 rounded-lg group bg-emerald-600 hover:bg-emerald-500 hover:shadow-lg"
              >
                <ShoppingBag className="w-5 h-5 transition-transform group-hover:scale-110" />
                Start Shopping
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => navigate("/about")}
                className="flex items-center justify-center gap-2 px-8 py-3 transition-all duration-300 border-2 rounded-lg group text-emerald-700 border-emerald-600 hover:bg-emerald-50 hover:shadow-md"
              >
                Learn More
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-3 p-3 transition-all duration-300 rounded-lg group hover:bg-emerald-50">
                <div className="p-2 transition-colors rounded-lg bg-emerald-50 group-hover:bg-emerald-100">
                  <Leaf className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Fresh Produce</p>
                  <p className="text-xs text-gray-500">Daily from local farms</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 transition-all duration-300 rounded-lg group hover:bg-emerald-50">
                <div className="p-2 transition-colors rounded-lg bg-emerald-50 group-hover:bg-emerald-100">
                  <Truck className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Fast Delivery</p>
                  <p className="text-xs text-gray-500">Within 2 hours</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 transition-all duration-300 rounded-lg group hover:bg-emerald-50">
                <div className="p-2 transition-colors rounded-lg bg-emerald-50 group-hover:bg-emerald-100">
                  <Clock className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">24/7 Service</p>
                  <p className="text-xs text-gray-500">Shop anytime</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative w-full lg:w-1/2">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent"></div>
          <img
            className="object-cover w-full h-full"
            src={assets.hero_img}
            alt="Fresh Groceries"
            style={{ zIndex: 0 }}
          />
          {/* Floating Elements */}
          <div className="absolute p-3 transition-all duration-300 bg-white rounded-lg shadow-lg top-1/4 left-1/4 hover:shadow-xl">
            <p className="text-sm font-medium text-emerald-600">Fresh Fruits</p>
            <p className="text-xs text-gray-500">Daily Stock</p>
          </div>
          <div className="absolute p-3 transition-all duration-300 bg-white rounded-lg shadow-lg bottom-1/4 right-1/4 hover:shadow-xl">
            <p className="text-sm font-medium text-emerald-600">Organic Veggies</p>
            <p className="text-xs text-gray-500">Local Farms</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
