// import React from 'react'
// import { assets } from '../assets/assets'
import { LogOut, Leaf } from "lucide-react";
import PropTypes from "prop-types";

const Navbar = ({ setToken }) => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white border-b">
      <div className="flex items-center gap-2">
        <Leaf className="w-8 h-8 text-emerald-500" />
        <span className="text-xl font-bold text-emerald-600">
          FreshMart Admin
        </span>
      </div>
      <button
        onClick={() => setToken("")}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 rounded-lg bg-emerald-600 hover:bg-emerald-500"
      >
        <LogOut className="w-4 h-4" />
        Logout
      </button>
    </div>
  );
};

Navbar.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Navbar;
