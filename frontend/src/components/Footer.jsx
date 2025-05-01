import React from "react";
import { Link } from "react-router-dom";
import {
  Leaf,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  ShoppingBag,
  Truck,
  Shield,
  Heart,
} from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-white">
      {/* Features Section */}
      <div className="grid grid-cols-2 gap-4 px-4 py-8 border-b md:grid-cols-4">
        <div className="flex items-center gap-3">
          <Truck className="w-6 h-6 text-emerald-500" />
          <div>
            <p className="text-sm font-semibold">Free Delivery</p>
            <p className="text-xs text-gray-600">On orders over ₹499</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Shield className="w-6 h-6 text-emerald-500" />
          <div>
            <p className="text-sm font-semibold">Secure Payment</p>
            <p className="text-xs text-gray-600">100% secure checkout</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <ShoppingBag className="w-6 h-6 text-emerald-500" />
          <div>
            <p className="text-sm font-semibold">Fresh Products</p>
            <p className="text-xs text-gray-600">Daily fresh stock</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Heart className="w-6 h-6 text-emerald-500" />
          <div>
            <p className="text-sm font-semibold">Quality Assured</p>
            <p className="text-xs text-gray-600">Best quality products</p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="flex flex-col sm:grid grid-cols-[2fr_1fr_1fr_1fr] gap-8 py-12 px-4">
        <div>
          <div className="flex items-center gap-2 mb-5">
            <Leaf className="w-8 h-8 text-emerald-500" />
            <span className="text-xl font-bold text-emerald-600">
              FreshMart
            </span>
          </div>
          <p className="text-sm leading-relaxed text-gray-600">
            Welcome to <strong>FreshMart</strong>, your one-stop destination for
            fresh groceries and daily essentials. We bring the best quality
            products right to your doorstep, ensuring freshness and convenience
            in every delivery.
          </p>
        </div>

        <div>
          <p className="mb-5 text-lg font-semibold text-emerald-600">
            Quick Links
          </p>
          <ul className="flex flex-col gap-2 text-sm text-gray-600">
            <Link to="/" className="transition-colors hover:text-emerald-500">
              Home
            </Link>
            <Link
              to="/collection"
              className="transition-colors hover:text-emerald-500"
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="transition-colors hover:text-emerald-500"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="transition-colors hover:text-emerald-500"
            >
              Contact
            </Link>
          </ul>
        </div>

        <div>
          <p className="mb-5 text-lg font-semibold text-emerald-600">
            Categories
          </p>
          <ul className="flex flex-col gap-2 text-sm text-gray-600">
            <Link
              to="/fruits-vegetables"
              className="transition-colors hover:text-emerald-500"
            >
              Fruits & Vegetables
            </Link>
            <Link
              to="/dairy"
              className="transition-colors hover:text-emerald-500"
            >
              Dairy & Eggs
            </Link>
            <Link
              to="/meat-seafood"
              className="transition-colors hover:text-emerald-500"
            >
              Meat & Seafood
            </Link>
            <Link
              to="/pantry"
              className="transition-colors hover:text-emerald-500"
            >
              Pantry
            </Link>
          </ul>
        </div>

        <div>
          <p className="mb-5 text-lg font-semibold text-emerald-600">
            Contact Us
          </p>
          <ul className="flex flex-col gap-3 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-500" />
              <span>123 Grocery Street, Mumbai</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-500" />
              <a
                href="tel:+91 98765 43210"
                className="transition-colors hover:text-emerald-500"
              >
                +91 98765 43210
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-500" />
              <a
                href="mailto:info@freshmart.com"
                className="transition-colors hover:text-emerald-500"
              >
                info@freshmart.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-500" />
              <span>7:00 AM - 10:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Links & Copyright */}
      <div className="px-4 py-6 border-t">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex gap-4">
            <a
              href="#"
              className="text-gray-400 transition-colors hover:text-emerald-500"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 transition-colors hover:text-emerald-500"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 transition-colors hover:text-emerald-500"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm text-gray-600">
            Copyright © 2024 FreshMart - All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
