import React from "react";
import { Link } from "react-router-dom"; 
import { FaShoppingCart } from "react-icons/fa";

const EmptyCartPage = ({ title, message, btnText, link }) => {
  return (
    <div className="flex flex-col items-center justify-center  bg-gray-100 text-center p-6">
      <FaShoppingCart className="text-gray-400 text-6xl mb-4" />
      <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-2">{message}</p>
      <Link to={link}>
        <button className="mt-6 px-6 py-3 dark:bg-[#007D88] text-white rounded-lg shadow-md hover:dark:bg-[#007D88] transition">
          {btnText}
        </button>
      </Link>
    </div>
  );
};

export default EmptyCartPage;
