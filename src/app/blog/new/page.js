"use client";
import React, { useState } from "react";

const Page = () => {
  const [inputValue, setInputValue] = useState("");
  const [bodyValue, setBodyValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = { inputValue, bodyValue };

    try {
      const res = await fetch("/api/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });

      const data = await res.json();
      console.log(data);
    } catch (error) {}

    console.log(newPost);
  };

  return (
    <div className="flex justify-center items-center mt-20 ">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="bg-white p-6 rounded-xl shadow-md w-80"
      >
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Post
        </label>
        <input
          type="text"
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <textarea
          type="text"
          value={bodyValue}
          onChange={(e) => setBodyValue(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full cursor-pointer bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Page;
