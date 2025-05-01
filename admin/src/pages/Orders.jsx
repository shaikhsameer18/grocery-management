import { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import {
  Package,
  MapPin,
  CreditCard,
  Calendar,
  Truck,
  CheckCircle2,
} from "lucide-react";
import PropTypes from "prop-types";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) return null;

    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/status",
        { orderId, status: event.target.value },
        { headers: { token } }
      );
      if (response.data.success) {
        await fetchAllOrders();
      }
    } catch (error) {
      console.log(error);
      toast.error(response.data.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  const getStatusColor = (status) => {
    switch (status) {
      case "Order Placed":
        return "bg-blue-100 text-blue-700";
      case "Packing":
        return "bg-yellow-100 text-yellow-700";
      case "Shipped":
        return "bg-purple-100 text-purple-700";
      case "Out for delivery":
        return "bg-orange-100 text-orange-700";
      case "Delivered":
        return "bg-emerald-100 text-emerald-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Orders Management
          </h1>
          <p className="mt-1 text-sm text-gray-600">
            View and manage all customer orders
          </p>
        </div>

        <div className="space-y-4">
          {orders.map((order, index) => (
            <div
              key={index}
              className="overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm"
            >
              {/* Order Header */}
              <div className="p-4 border-b border-gray-100 bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Package className="w-5 h-5 text-emerald-500" />
                    <span className="font-medium text-gray-900">
                      Order #{order._id.slice(-6)}
                    </span>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>

              {/* Order Content */}
              <div className="p-4">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {/* Order Items */}
                  <div>
                    <h3 className="mb-2 text-sm font-medium text-gray-900">
                      Order Items
                    </h3>
                    <div className="space-y-1">
                      {order.items.map((item, idx) => (
                        <p key={idx} className="text-sm text-gray-600">
                          {item.name} x {item.quantity}
                          {item.size && (
                            <span className="text-gray-500">
                              {" "}
                              ({item.size})
                            </span>
                          )}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Customer Details */}
                  <div>
                    <h3 className="mb-2 text-sm font-medium text-gray-900">
                      Customer Details
                    </h3>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-gray-900">
                        {order.address.firstName} {order.address.lastName}
                      </p>
                      <div className="flex items-start gap-2 text-sm text-gray-600">
                        <MapPin className="flex-shrink-0 w-4 h-4 mt-1" />
                        <div>
                          <p>{order.address.street}</p>
                          <p>
                            {order.address.city}, {order.address.state}
                          </p>
                          <p>
                            {order.address.country} - {order.address.zipcode}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        {order.address.phone}
                      </p>
                    </div>
                  </div>

                  {/* Order Details */}
                  <div>
                    <h3 className="mb-2 text-sm font-medium text-gray-900">
                      Order Details
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Package className="w-4 h-4" />
                        <span>{order.items.length} items</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <CreditCard className="w-4 h-4" />
                        <span>
                          {order.paymentMethod} -{" "}
                          {order.payment ? "Paid" : "Pending"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(order.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
                        <Truck className="w-4 h-4" />
                        <span>
                          {currency}
                          {order.amount}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Status Update */}
                <div className="pt-4 mt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gray-400" />
                    <select
                      onChange={(event) => statusHandler(event, order._id)}
                      value={order.status}
                      className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    >
                      <option value="Order Placed">Order Placed</option>
                      <option value="Packing">Packing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Out for delivery">Out for delivery</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Orders.propTypes = {
  token: PropTypes.string.isRequired,
};

export default Orders;
