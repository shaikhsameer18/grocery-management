import { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { Loader2 } from "lucide-react";

const Verify = () => {
  const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext);
  const [searchParams] = useSearchParams();

  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const verifyPayment = async () => {
    try {
      if (!token) {
        return null;
      }

      const response = await axios.post(
        `${backendUrl}/api/order/verifyStripe`,
        { success, orderId },
        { headers: { token } }
      );

      if (response.data.success) {
        setCartItems({});
        navigate("/orders");
      } else {
        navigate("/cart");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    verifyPayment();
  }, [token]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-sm">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-emerald-100">
              <Loader2 className="w-8 h-8 text-emerald-600 animate-spin" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Verifying Payment
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Please wait while we verify your payment. This may take a few
              moments.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-12 h-12 border-4 rounded-full border-t-emerald-500 animate-spin"></div>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500">
              Do not close or refresh this page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify;
