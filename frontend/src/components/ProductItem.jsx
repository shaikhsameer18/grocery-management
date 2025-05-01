import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      onClick={() => window.scrollTo(0, 0)}
      to={`/product/${id}`}
      className="relative block overflow-hidden transition-all bg-white border rounded-lg group hover:shadow-md"
    >
      <div className="relative overflow-hidden aspect-square">
        <img
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
          src={image[0]}
          alt={name}
          loading="lazy"
        />
        <div className="absolute inset-0 transition-opacity opacity-0 bg-black/5 group-hover:opacity-100" />
      </div>

      <div className="p-4">
        <h3 className="mb-1 text-sm font-medium text-gray-900 line-clamp-1">
          {name}
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-emerald-600">
            {currency}
            {price}
          </p>
          <div className="p-2 transition-opacity rounded-full opacity-0 bg-emerald-50 text-emerald-600 group-hover:opacity-100">
            <ShoppingBag className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
