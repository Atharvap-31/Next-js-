"use client";

import React, { useState } from "react";

const BlogCard = ({ title, index }) => {
  const [count, setCounter] = useState(0);

  return (
    <div className="bg-white shadow-md p-6 rounded-md border">
      <h2 className="text-xl font-semibold text-purple-600 mb-2 capitalize">
        {title}
      </h2>
      <button
        onClick={() => setCounter(count + 1)}
        className="bg-purple-600 cursor-pointer text-white px-4 py-2 rounded hover:bg-purple-700 transition"
      >
        Like : {count}
      </button>
    </div>
  );
};

export default BlogCard;
