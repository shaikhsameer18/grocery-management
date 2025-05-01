import { useContext, useState } from "react";
// import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import {
  Home,
  Store,
  Info,
  Phone,
  Search,
  User,
  ShoppingCart,
  Menu,
  ChevronLeft,
  Leaf,
  // Apple,
  // Beef,
  // Milk,
  // Utensils,
  // Droplet,
  // Package,
} from "lucide-react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  return (
    <div className="bg-white border-b">
      <div className="flex items-center justify-between px-6 py-5 font-medium text-emerald-600">
        <Link to="/" className="flex items-center gap-2">
          <Leaf className="w-8 h-8 text-emerald-500" />
          <span className="text-xl font-bold">FreshMart</span>
        </Link>

        <ul className="hidden gap-6 text-sm sm:flex">
          <NavLink
            to="/"
            className="flex items-center gap-2 transition-colors hover:text-emerald-500"
          >
            <Home className="w-4 h-4" />
            <p>HOME</p>
          </NavLink>
          <NavLink
            to="/collection"
            className="flex items-center gap-2 transition-colors hover:text-emerald-500"
          >
            <Store className="w-4 h-4" />
            <p>SHOP</p>
          </NavLink>
          <NavLink
            to="/about"
            className="flex items-center gap-2 transition-colors hover:text-emerald-500"
          >
            <Info className="w-4 h-4" />
            <p>ABOUT</p>
          </NavLink>
          <NavLink
            to="/contact"
            className="flex items-center gap-2 transition-colors hover:text-emerald-500"
          >
            <Phone className="w-4 h-4" />
            <p>CONTACT</p>
          </NavLink>
        </ul>

        <div className="flex items-center gap-6">
          <Search
            onClick={() => {
              setShowSearch(true);
              navigate("/collection");
            }}
            className="w-5 h-5 transition-colors cursor-pointer hover:text-emerald-500"
          />

          <div className="relative group">
            <User
              onClick={() => (token ? null : navigate("/login"))}
              className="w-5 h-5 transition-colors cursor-pointer hover:text-emerald-500"
            />
            {token && (
              <div className="absolute right-0 z-50 hidden pt-4 group-hover:block">
                <div className="flex flex-col gap-2 px-5 py-3 bg-white border border-gray-100 rounded-lg shadow-lg text-emerald-600 w-36">
                  <p
                    onClick={() => navigate("/orders")}
                    className="transition-colors cursor-pointer hover:text-emerald-500"
                  >
                    Orders
                  </p>
                  <p
                    onClick={logout}
                    className="transition-colors cursor-pointer hover:text-emerald-500"
                  >
                    Logout
                  </p>
                </div>
              </div>
            )}
          </div>
          <Link to="/cart" className="relative">
            <ShoppingCart className="w-5 h-5 transition-colors hover:text-emerald-500" />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-emerald-500 text-white aspect-square rounded-full text-[8px]">
              {getCartCount()}
            </p>
          </Link>
          <Menu
            onClick={() => setVisible(true)}
            className="w-5 h-5 transition-colors cursor-pointer sm:hidden hover:text-emerald-500"
          />
        </div>

        <div
          className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-300 ${
            visible ? "w-full" : "w-0"
          }`}
        >
          <div className="flex flex-col text-emerald-600">
            <div
              onClick={() => setVisible(false)}
              className="flex items-center gap-4 p-3 transition-colors cursor-pointer hover:text-emerald-500"
            >
              <ChevronLeft className="w-4 h-4" />
              <p>Back</p>
            </div>
            <NavLink
              onClick={() => setVisible(false)}
              className="flex items-center gap-2 py-3 pl-6 transition-colors border-b hover:text-emerald-500"
              to="/"
            >
              <Home className="w-4 h-4" />
              HOME
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="flex items-center gap-2 py-3 pl-6 transition-colors border-b hover:text-emerald-500"
              to="/collection"
            >
              <Store className="w-4 h-4" />
              SHOP
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="flex items-center gap-2 py-3 pl-6 transition-colors border-b hover:text-emerald-500"
              to="/about"
            >
              <Info className="w-4 h-4" />
              ABOUT
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="flex items-center gap-2 py-3 pl-6 transition-colors border-b hover:text-emerald-500"
              to="/contact"
            >
              <Phone className="w-4 h-4" />
              CONTACT
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
