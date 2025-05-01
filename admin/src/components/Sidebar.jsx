// import React from 'react'
import { NavLink } from "react-router-dom";
import { PlusCircle, ListOrdered, ShoppingBag } from "lucide-react";

const Sidebar = () => {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 text-gray-600 transition-colors duration-200 rounded-lg ${
      isActive
        ? "bg-emerald-50 text-emerald-600"
        : "hover:bg-gray-50 hover:text-emerald-600"
    }`;

  return (
    <div className="w-64 min-h-screen bg-white border-r">
      <div className="flex flex-col gap-2 p-4">
        <NavLink className={linkClass} to="/add">
          <PlusCircle className="w-5 h-5" />
          <span className="text-sm font-medium">Add Items</span>
        </NavLink>

        <NavLink className={linkClass} to="/list">
          <ListOrdered className="w-5 h-5" />
          <span className="text-sm font-medium">List Items</span>
        </NavLink>

        <NavLink className={linkClass} to="/orders">
          <ShoppingBag className="w-5 h-5" />
          <span className="text-sm font-medium">Orders</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
