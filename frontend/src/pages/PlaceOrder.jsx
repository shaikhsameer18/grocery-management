import { useContext, useState } from "react";
import CartTotal from "../components/CartTotal";
import { ShopContext } from "../context/ShopContext";
import { CreditCard, MapPin, Truck } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const {
    navigate,
    backendUrl,
    token,
    cartItems,
    setCartItems,
    getCartAmount,
    delivery_fee,
    products,
  } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const initPay = (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Order Payment",
      description: "Order Payment",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        try {
          const { data } = await axios.post(
            `${backendUrl}/api/order/verifyRazorpay`,
            response,
            { headers: { token } }
          );
          if (data.success) {
            navigate("/orders");
            setCartItems({});
          }
        } catch (error) {
          console.error(error);
          toast.error("Payment verification failed!");
        }
      },
    };
    new window.Razorpay(options).open();
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      let orderItems = Object.entries(cartItems)
        .flatMap(([productId, sizes]) =>
          Object.entries(sizes).map(([size, quantity]) => {
            if (quantity > 0) {
              const itemInfo = structuredClone(
                products.find((product) => product._id === productId)
              );
              return itemInfo ? { ...itemInfo, size, quantity } : null;
            }
            return null;
          })
        )
        .filter(Boolean);

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      };

      let response;
      switch (method) {
        case "cod":
          response = await axios.post(
            `${backendUrl}/api/order/place`,
            orderData,
            { headers: { token } }
          );
          if (response.data.success) {
            setCartItems({});
            navigate("/orders");
          } else toast.error(response.data.message);
          break;

        case "stripe":
          response = await axios.post(
            `${backendUrl}/api/order/stripe`,
            orderData,
            { headers: { token } }
          );
          if (response.data.success)
            window.location.replace(response.data.session_url);
          else toast.error(response.data.message);
          break;

        case "razorpay":
          response = await axios.post(
            `${backendUrl}/api/order/razorpay`,
            orderData,
            { headers: { token } }
          );
          if (response.data.success) initPay(response.data.order);
          break;

        default:
          break;
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-x-12">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
              Checkout
            </h1>

            {/* Delivery Information */}
            <form onSubmit={onSubmitHandler} className="mt-8">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <div className="flex items-center gap-2 pb-4 mb-6 border-b">
                  <MapPin className="w-5 h-5 text-emerald-500" />
                  <h2 className="text-lg font-medium text-gray-900">
                    Delivery Information
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <input
                      required
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={onChangeHandler}
                      className="w-full px-3 py-2 mt-1 text-gray-900 border rounded-lg focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <input
                      required
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={onChangeHandler}
                      className="w-full px-3 py-2 mt-1 text-gray-900 border rounded-lg focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={onChangeHandler}
                    className="w-full px-3 py-2 mt-1 text-gray-900 border rounded-lg focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Street Address
                  </label>
                  <input
                    required
                    type="text"
                    name="street"
                    value={formData.street}
                    onChange={onChangeHandler}
                    className="w-full px-3 py-2 mt-1 text-gray-900 border rounded-lg focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      City
                    </label>
                    <input
                      required
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={onChangeHandler}
                      className="w-full px-3 py-2 mt-1 text-gray-900 border rounded-lg focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={onChangeHandler}
                      className="w-full px-3 py-2 mt-1 text-gray-900 border rounded-lg focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      ZIP Code
                    </label>
                    <input
                      required
                      type="text"
                      name="zipcode"
                      value={formData.zipcode}
                      onChange={onChangeHandler}
                      className="w-full px-3 py-2 mt-1 text-gray-900 border rounded-lg focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Country
                    </label>
                    <input
                      required
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={onChangeHandler}
                      className="w-full px-3 py-2 mt-1 text-gray-900 border rounded-lg focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={onChangeHandler}
                    className="w-full px-3 py-2 mt-1 text-gray-900 border rounded-lg focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div className="p-6 mt-8 bg-white rounded-lg shadow-sm">
                <div className="flex items-center gap-2 pb-4 mb-6 border-b">
                  <CreditCard className="w-5 h-5 text-emerald-500" />
                  <h2 className="text-lg font-medium text-gray-900">
                    Payment Method
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <label
                    className={`flex items-center gap-4 p-4 border rounded-lg cursor-pointer ${
                      method === "razorpay"
                        ? "border-emerald-500 bg-emerald-50"
                        : "hover:border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={method === "razorpay"}
                      onChange={() => setMethod("razorpay")}
                      className="w-4 h-4 border-gray-300 text-emerald-600 focus:ring-emerald-500"
                    />
                    <div className="flex items-center justify-between flex-1">
                      <span className="text-sm font-medium text-gray-900">
                        Pay with Razorpay
                      </span>
                      <CreditCard className="w-5 h-5 text-gray-400" />
                    </div>
                  </label>

                  <label
                    className={`flex items-center gap-4 p-4 border rounded-lg cursor-pointer ${
                      method === "cod"
                        ? "border-emerald-500 bg-emerald-50"
                        : "hover:border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={method === "cod"}
                      onChange={() => setMethod("cod")}
                      className="w-4 h-4 border-gray-300 text-emerald-600 focus:ring-emerald-500"
                    />
                    <div className="flex items-center justify-between flex-1">
                      <span className="text-sm font-medium text-gray-900">
                        Cash on Delivery
                      </span>
                      <Truck className="w-5 h-5 text-gray-400" />
                    </div>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="flex items-center justify-center w-full gap-2 px-6 py-3 mt-8 text-base font-medium text-white rounded-lg bg-emerald-600 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Place Order
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="mt-12 lg:mt-0">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <CartTotal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
