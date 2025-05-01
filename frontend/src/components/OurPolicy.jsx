import {
  Truck,
  HeartHandshake,
  Leaf,
  Shield,
  Clock,
  CreditCard,
} from "lucide-react";

const OurPolicy = () => {
  return (
    <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
      {/* Section Title */}
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Why Choose FreshMart?
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">
          We&apos;re committed to delivering fresh, high-quality groceries right
          to your doorstep
        </p>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
        {/* Fresh Products */}
        <div className="relative p-6 bg-white border rounded-2xl">
          <div className="flex items-center justify-center w-12 h-12 mb-4 bg-emerald-100 rounded-xl">
            <Leaf className="w-6 h-6 text-emerald-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">
            Fresh Products
          </h3>
          <p className="mt-2 text-gray-600">
            We source our products directly from local farmers and trusted
            suppliers to ensure maximum freshness.
          </p>
        </div>

        {/* Quality Assurance */}
        <div className="relative p-6 bg-white border rounded-2xl">
          <div className="flex items-center justify-center w-12 h-12 mb-4 bg-emerald-100 rounded-xl">
            <Shield className="w-6 h-6 text-emerald-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">
            Quality Assured
          </h3>
          <p className="mt-2 text-gray-600">
            Every product undergoes strict quality checks to meet our high
            standards of excellence.
          </p>
        </div>

        {/* Customer Care */}
        <div className="relative p-6 bg-white border rounded-2xl">
          <div className="flex items-center justify-center w-12 h-12 mb-4 bg-emerald-100 rounded-xl">
            <HeartHandshake className="w-6 h-6 text-emerald-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Customer Care</h3>
          <p className="mt-2 text-gray-600">
            Our dedicated support team is here to help you with any questions or
            concerns.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-2 gap-8 mt-16 sm:grid-cols-3 lg:grid-cols-3">
        {/* Delivery */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-emerald-100">
            <Truck className="w-6 h-6 text-emerald-600" />
          </div>
          <h3 className="text-sm font-semibold text-gray-900">Fast Delivery</h3>
          <p className="mt-1 text-sm text-gray-500">
            Free delivery on orders above ₹499
          </p>
        </div>

        {/* Timings */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-emerald-100">
            <Clock className="w-6 h-6 text-emerald-600" />
          </div>
          <h3 className="text-sm font-semibold text-gray-900">
            Extended Hours
          </h3>
          <p className="mt-1 text-sm text-gray-500">Open 7 AM to 10 PM daily</p>
        </div>

        {/* Payment */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-emerald-100">
            <CreditCard className="w-6 h-6 text-emerald-600" />
          </div>
          <h3 className="text-sm font-semibold text-gray-900">
            Secure Payment
          </h3>
          <p className="mt-1 text-sm text-gray-500">Multiple payment options</p>
        </div>
      </div>
    </div>
  );
};

export default OurPolicy;
