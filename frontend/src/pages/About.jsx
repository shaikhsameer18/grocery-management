import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import {
  Leaf,
  Truck,
  Shield,
  Heart,
  Users,
  Package,
  ArrowRight,
} from "lucide-react";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white ">
      {/* Hero Section */}
      <div className="relative h-[300px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/90 to-emerald-500/90"></div>
        <div className="absolute inset-0">
          <img
            src={assets.hero_img}
            alt="FreshMart Store"
            className="object-cover w-full h-full opacity-20"
          />
        </div>
        <div className="relative flex flex-col items-center justify-center h-full px-4 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Our Story
          </h1>
          <p className="max-w-2xl mt-4 text-lg text-emerald-100">
            From a small local store to Mumbai&apos;s most trusted grocery brand
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl px-4 py-12 mx-auto">
        {/* Timeline Section */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="p-6 bg-white shadow-md rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-emerald-50">
                <Leaf className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">2010</h3>
            </div>
            <p className="text-gray-600">
              Started as a small local grocery store in Mumbai
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-emerald-50">
                <Truck className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">2015</h3>
            </div>
            <p className="text-gray-600">
              Launched our online platform for doorstep delivery
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-emerald-50">
                <Package className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">2020</h3>
            </div>
            <p className="text-gray-600">
              Opened multiple stores across Mumbai
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Our Values
          </h2>
          <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3">
            <div className="p-6 transition-all duration-300 bg-white shadow-md rounded-xl hover:shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-emerald-50">
                  <Shield className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Quality First
                </h3>
              </div>
              <p className="text-gray-600">We never compromise on quality</p>
            </div>
            <div className="p-6 transition-all duration-300 bg-white shadow-md rounded-xl hover:shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-emerald-50">
                  <Users className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Customer Focus
                </h3>
              </div>
              <p className="text-gray-600">Your satisfaction is our priority</p>
            </div>
            <div className="p-6 transition-all duration-300 bg-white shadow-md rounded-xl hover:shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-emerald-50">
                  <Heart className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Sustainability
                </h3>
              </div>
              <p className="text-gray-600">
                Committed to eco-friendly practices
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-6 mt-12 md:grid-cols-4">
          <div className="p-4 text-center bg-white shadow-md rounded-xl">
            <div className="text-2xl font-bold text-emerald-600">50K+</div>
            <div className="text-sm text-gray-600">Happy Customers</div>
          </div>
          <div className="p-4 text-center bg-white shadow-md rounded-xl">
            <div className="text-2xl font-bold text-emerald-600">1000+</div>
            <div className="text-sm text-gray-600">Products</div>
          </div>
          <div className="p-4 text-center bg-white shadow-md rounded-xl">
            <div className="text-2xl font-bold text-emerald-600">24/7</div>
            <div className="text-sm text-gray-600">Support</div>
          </div>
          <div className="p-4 text-center bg-white shadow-md rounded-xl">
            <div className="text-2xl font-bold text-emerald-600">10+</div>
            <div className="text-sm text-gray-600">Stores</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate("/collection")}
            className="flex items-center gap-2 px-8 py-3 mx-auto text-white transition-all rounded-lg bg-emerald-600 hover:bg-emerald-500 hover:shadow-lg"
          >
            Start Shopping
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
