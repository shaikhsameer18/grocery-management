// import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="relative flex items-center py-4">
      <div className="flex-grow border-t border-gray-200"></div>
      <h2 className="flex-shrink-0 px-4 text-lg font-medium text-gray-700">
        {text1} <span className="font-semibold text-emerald-600">{text2}</span>
      </h2>
      <div className="flex-grow border-t border-gray-200"></div>
    </div>
  );
};

export default Title;
