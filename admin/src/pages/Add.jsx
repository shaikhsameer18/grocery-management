import { useState } from "react";
// import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { Upload, Package, Tag, IndianRupee, Plus } from "lucide-react";
import PropTypes from "prop-types";

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Fruits & Vegetables");
  const [subCategory, setSubCategory] = useState("Fresh Fruits");
  const [bestseller, setBestseller] = useState(false);
  const [notes, setNotes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("colors", JSON.stringify(notes));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        { 
          headers: { token },
          timeout: 5000 // 5 second timeout
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        // Reset form
        setName("");
        setDescription("");
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setPrice("");
        setCategory("Fruits & Vegetables");
        setSubCategory("Fresh Fruits");
        setBestseller(false);
        setNotes([]);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      if (error.code === "ERR_NETWORK") {
        toast.error("Cannot connect to server. Please check if the backend server is running.");
      } else if (error.response) {
        // Server responded with error
        toast.error(error.response.data.message || "Error adding product");
      } else if (error.request) {
        // Request made but no response
        toast.error("No response from server. Please try again.");
      } else {
        // Something else went wrong
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="p-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Add New Product</h1>
          <p className="mt-1 text-sm text-gray-600">
            Fill in the details to add a new grocery item to your store.
          </p>
        </div>

        <form onSubmit={onSubmitHandler} className="space-y-6">
          {/* Image Upload Section */}
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Upload className="w-5 h-5 text-emerald-500" />
              <h2 className="text-lg font-medium text-gray-900">
                Upload Images
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { state: image1, setState: setImage1, id: "image1" },
                { state: image2, setState: setImage2, id: "image2" },
                { state: image3, setState: setImage3, id: "image3" },
                { state: image4, setState: setImage4, id: "image4" },
              ].map((image) => (
                <label
                  key={image.id}
                  htmlFor={image.id}
                  className="relative flex items-center justify-center border-2 border-dashed rounded-lg cursor-pointer aspect-square hover:border-emerald-500 group"
                >
                  {!image.state ? (
                    <div className="flex flex-col items-center gap-1">
                      <Upload className="w-6 h-6 text-gray-400 transition-colors group-hover:text-emerald-500" />
                      <span className="text-xs text-gray-500">Upload</span>
                    </div>
                  ) : (
                    <img
                      src={URL.createObjectURL(image.state)}
                      alt="Preview"
                      className="object-cover w-full h-full rounded-lg"
                    />
                  )}
                  <input
                    type="file"
                    id={image.id}
                    hidden
                    onChange={(e) => image.setState(e.target.files[0])}
                  />
                </label>
              ))}
            </div>
          </div>

          {/* Basic Details */}
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Package className="w-5 h-5 text-emerald-500" />
              <h2 className="text-lg font-medium text-gray-900">
                Basic Details
              </h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Product Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Enter product name"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Enter product description"
                  required
                />
              </div>
            </div>
          </div>

          {/* Categories and Price */}
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Tag className="w-5 h-5 text-emerald-500" />
              <h2 className="text-lg font-medium text-gray-900">
                Categories & Price
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="Fruits & Vegetables">
                    Fruits & Vegetables
                  </option>
                  <option value="Dairy & Eggs">Dairy & Eggs</option>
                  <option value="Meat & Seafood">Meat & Seafood</option>
                  <option value="Bakery">Bakery</option>
                  <option value="Pantry">Pantry</option>
                  <option value="Beverages">Beverages</option>
                  <option value="Snacks">Snacks</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Sub Category
                </label>
                <select
                  value={subCategory}
                  onChange={(e) => setSubCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="Fresh Fruits">Fresh Fruits</option>
                  <option value="Fresh Vegetables">Fresh Vegetables</option>
                  <option value="Herbs & Seasonings">Herbs & Seasonings</option>
                  <option value="Organic">Organic</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Price (₹)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <IndianRupee className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="0.00"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Additional Options */}
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Plus className="w-5 h-5 text-emerald-500" />
              <h2 className="text-lg font-medium text-gray-900">
                Additional Options
              </h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Product Tags
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Organic",
                    "Gluten-Free",
                    "Vegan",
                    "Local",
                    "Non-GMO",
                    "Sugar-Free",
                  ].map((note) => (
                    <button
                      key={note}
                      type="button"
                      onClick={() =>
                        setNotes((prev) =>
                          prev.includes(note)
                            ? prev.filter((item) => item !== note)
                            : [...prev, note]
                        )
                      }
                      className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                        notes.includes(note)
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {note}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="bestseller"
                  checked={bestseller}
                  onChange={() => setBestseller((prev) => !prev)}
                  className="w-4 h-4 border-gray-300 rounded text-emerald-600 focus:ring-emerald-500"
                />
                <label
                  htmlFor="bestseller"
                  className="text-sm font-medium text-gray-700 cursor-pointer"
                >
                  Mark as Featured Product
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex items-center justify-center w-full gap-2 px-6 py-3 text-sm font-medium text-white transition-colors rounded-lg bg-emerald-600 hover:bg-emerald-500 sm:w-auto"
          >
            <Plus className="w-5 h-5" />
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

Add.propTypes = {
  token: PropTypes.string.isRequired,
};

export default Add;
