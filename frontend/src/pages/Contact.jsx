import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[250px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={assets.hero_img}
            alt="Fresh Groceries"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/90 to-emerald-500/90"></div>
        <div className="relative flex flex-col items-center justify-center h-full px-4 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Get in Touch</h1>
          <p className="mt-4 text-lg text-emerald-100 max-w-2xl">
            We&apos;re here to help with all your grocery needs
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Store Locations */}
          <div className="p-6 bg-white rounded-xl shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-emerald-50">
                <MapPin className="w-5 h-5 text-emerald-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Visit Our Stores</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 transition-all duration-300 bg-gray-50 rounded-lg hover:bg-emerald-50">
                <h3 className="font-semibold text-gray-900">Main Store</h3>
                <p className="mt-1 text-sm text-gray-600">123 Grocery Street, Mumbai</p>
                <p className="text-xs text-gray-500">Open 7:00 AM - 10:00 PM</p>
              </div>
              <div className="p-4 transition-all duration-300 bg-gray-50 rounded-lg hover:bg-emerald-50">
                <h3 className="font-semibold text-gray-900">Downtown Branch</h3>
                <p className="mt-1 text-sm text-gray-600">456 Market Road, Mumbai</p>
                <p className="text-xs text-gray-500">Open 7:00 AM - 10:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="p-6 bg-white rounded-xl shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-emerald-50">
                <MessageSquare className="w-5 h-5 text-emerald-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Contact Us</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 transition-all duration-300 bg-gray-50 rounded-lg hover:bg-emerald-50">
                <div className="p-2 rounded-lg bg-emerald-50">
                  <Phone className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Call Us</h3>
                  <a href="tel:+919876543210" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 transition-all duration-300 bg-gray-50 rounded-lg hover:bg-emerald-50">
                <div className="p-2 rounded-lg bg-emerald-50">
                  <Mail className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email Us</h3>
                  <a href="mailto:info@freshmart.com" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors">
                    info@freshmart.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 transition-all duration-300 bg-gray-50 rounded-lg hover:bg-emerald-50">
                <div className="p-2 rounded-lg bg-emerald-50">
                  <Clock className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Business Hours</h3>
                  <p className="text-sm text-gray-600">
                    Mon-Sat: 7:00 AM - 10:00 PM<br />
                    Sun: 8:00 AM - 9:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate("/collection")}
            className="flex items-center gap-2 px-8 py-3 mx-auto text-white transition-all bg-emerald-600 rounded-lg hover:bg-emerald-500 hover:shadow-lg"
          >
            Start Shopping
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;