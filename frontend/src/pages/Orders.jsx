import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Package, Truck, CheckCircle2, Clock, AlertCircle } from "lucide-react";
import axios from "axios";

const getStatusIcon = (status) => {
  switch (status.toLowerCase()) {
    case "delivered":
      return <CheckCircle2 className="w-5 h-5 text-emerald-500" />;
    case "shipped":
      return <Truck className="w-5 h-5 text-blue-500" />;
    case "processing":
      return <Package className="w-5 h-5 text-yellow-500" />;
    case "pending":
      return <Clock className="w-5 h-5 text-orange-500" />;
    default:
      return <AlertCircle className="w-5 h-5 text-gray-500" />;
  }
};

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadOrderData = async () => {
    try {
      if (!token) return null;
      setLoading(true);
      const response = await axios.post(
        `${backendUrl}/api/order/userorders`,
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        const allOrdersItem = response.data.orders.flatMap((order) =>
          order.items.map((item) => ({
            ...item,
            status: order.status,
            payment: order.payment,
            paymentMethod: order.paymentMethod,
            date: order.date,
            orderId: order._id,
          }))
        );
        setOrderData(allOrdersItem.reverse());
      }
    } catch (error) {
      console.error("Error loading orders", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-6 h-6 border-2 rounded-full border-emerald-500 animate-spin border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
      {/* Header */}
      <div className="pb-8">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Order History
        </h1>
        <p className="mt-10 text-sm text-gray-600">
          Check the status of recent orders and track your deliveries
        </p>
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {orderData.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 bg-white rounded-lg">
            <Package className="w-12 h-12 text-gray-400" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">
              No orders yet
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Start shopping to place your first order
            </p>
          </div>
        ) : (
          orderData.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden bg-white border rounded-lg shadow-sm"
            >
              <div className="p-6">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  {/* Order Info */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <img
                        src={item.image[0]}
                        alt={item.name}
                        className="object-cover w-24 h-24 rounded-lg"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {item.name}
                      </h3>
                      <div className="mt-1 text-sm text-gray-500">
                        <p>Order #{item.orderId?.slice(-6)}</p>
                        <p>
                          Placed on {new Date(item.date).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="mt-2 text-sm">
                        <span className="font-medium text-emerald-600">
                          {currency}
                          {item.price}
                        </span>
                        <span className="mx-2 text-gray-500">·</span>
                        <span className="text-gray-500">
                          Qty: {item.quantity}
                        </span>
                        {item.size && (
                          <>
                            <span className="mx-2 text-gray-500">·</span>
                            <span className="text-gray-500">
                              Size: {item.size}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Status and Actions */}
                  <div className="flex flex-col items-end gap-4">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(item.status)}
                      <span className="text-sm font-medium text-gray-900">
                        {item.status}
                      </span>
                    </div>
                    <button
                      onClick={loadOrderData}
                      className="px-4 py-2 text-sm font-medium rounded-lg text-emerald-600 bg-emerald-50 hover:bg-emerald-100"
                    >
                      Track Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Orders;
