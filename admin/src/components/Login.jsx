import axios from "axios";
import { useState } from "react";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { Mail, Lock, LogIn } from "lucide-react";
import PropTypes from "prop-types";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backendUrl + "/api/user/admin", {
        email,
        password,
      });
      if (response.data.success) {
        setToken(response.data.token);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gray-50">
      <div className="w-full max-w-md px-8 py-8 mx-4 bg-white shadow-lg rounded-2xl">
        <div className="flex flex-col items-center mb-6">
          <div className="p-3 mb-4 rounded-full bg-emerald-100">
            <LogIn className="w-6 h-6 text-emerald-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to manage your store
          </p>
        </div>
        <form onSubmit={onSubmitHandler} className="space-y-5">
          <div className="relative">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Mail className="w-5 h-5 text-gray-400" />
              </div>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="w-full py-2 pl-10 pr-4 transition-colors border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                type="email"
                placeholder="admin@freshmart.com"
                required
              />
            </div>
          </div>
          <div className="relative">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Lock className="w-5 h-5 text-gray-400" />
              </div>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="w-full py-2 pl-10 pr-4 transition-colors border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                type="password"
                placeholder="••••••••"
                required
              />
            </div>
          </div>
          <button
            className="flex items-center justify-center w-full gap-2 px-4 py-2 font-medium text-white transition-colors duration-200 rounded-lg bg-emerald-600 hover:bg-emerald-500"
            type="submit"
          >
            <LogIn className="w-5 h-5" />
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
