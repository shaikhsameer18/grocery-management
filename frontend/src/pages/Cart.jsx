import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import CartTotal from "../components/CartTotal";
import { Trash2, ShoppingBag } from "lucide-react";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  if (cartData.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <ShoppingBag className="w-16 h-16 text-gray-300" />
        <h2 className="mt-4 text-2xl font-semibold text-gray-700">
          Your cart is empty
        </h2>
        <p className="mt-2 text-gray-500">
          Add items to your cart to continue shopping
        </p>
        <button
          onClick={() => navigate("/collection")}
          className="px-6 py-2 mt-6 text-white transition-all rounded-lg bg-emerald-600 hover:bg-emerald-500"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl px-4 py-8 mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
        Shopping Cart
      </h1>

      <div className="mt-8">
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );
          return (
            <div
              key={index}
              className="flex flex-col gap-4 p-4 mb-4 bg-white border rounded-lg shadow-sm sm:flex-row sm:items-center sm:gap-6"
            >
              <div className="flex items-start flex-1 gap-4">
                <div className="overflow-hidden rounded-lg bg-gray-50">
                  <img
                    className="object-cover w-24 h-24 sm:w-32 sm:h-32"
                    src={productData.image[0]}
                    alt={productData.name}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900">
                    {productData.name}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 mt-2">
                    <span className="text-lg font-medium text-emerald-600">
                      {currency}
                      {productData.price}
                    </span>
                    <span className="px-3 py-1 text-sm rounded-full text-emerald-700 bg-emerald-50">
                      {item.size}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 sm:gap-6">
                <div className="flex items-center">
                  <input
                    type="number"
                    min={1}
                    defaultValue={item.quantity}
                    onChange={(e) =>
                      e.target.value === "" || e.target.value === "0"
                        ? null
                        : updateQuantity(
                            item._id,
                            item.size,
                            Number(e.target.value)
                          )
                    }
                    className="w-16 px-2 py-1 text-center border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <button
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                  className="p-2 text-gray-400 transition-colors rounded-full hover:bg-gray-100 hover:text-red-500"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col items-end justify-end mt-8">
        <div className="w-full p-6 bg-white border rounded-lg shadow-sm sm:w-[450px]">
          <CartTotal />
          <button
            onClick={() => navigate("/place-order")}
            className="flex items-center justify-center w-full gap-2 px-6 py-3 mt-6 text-white transition-all rounded-lg bg-emerald-600 hover:bg-emerald-500 hover:shadow-md"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
