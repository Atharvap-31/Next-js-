"use client";

import Link from "next/link";
import React, { useState } from "react";

const BlogCard = ({ title, index, handleDelete }) => {
  const [count, setCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // const handleDelete = async (id) => {
  //   // const confirmed = confirm("Are you sure you want to delete this post?");
  //   // if (!confirmed) return;

  //   try {
  //     setIsLoading(true);

  //     const res = await fetch(
  //       `https://jsonplaceholder.typicode.com/posts/${id}`,
  //       {
  //         method: "DELETE",
  //       }
  //     );
  //     if (res.ok) {
  //       alert("Post deleted!");
  //       setIsLoading(false);

  //       // Optional: refresh data (or remove post from state)
  //     } else {
  //       alert("Failed to delete post");
  //     }
  //   } catch (err) {
  //     console.error("Error deleting:", err);
  //     alert("Something went wrong!");
  //   }
  // };

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

      <div className="flex gap-3 mt-4">
        <Link href={`blog/edit/${index}`}>
          <button
            // disabled={isLoading}
            className="bg-blue-600 cursor-pointer ml-4 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Edit
          </button>
        </Link>
        <button
          onClick={() => handleDelete(index)}
          disabled={isLoading}
          className={`cursor-pointer  text-white px-4 ${
            isLoading ? "bg-black" : "bg-red-600"
          } py-2 rounded hover:bg-red-700 ml-4`}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
