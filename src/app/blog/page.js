"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import EditPage from "./edit/[id]/page";

// export const metadata = {
//   title: "Blog Page",
//   description: "This is the blog page of our application",
//   openGraph: {
//     title: "Next.js Blog Page",
//     description: "This is blog page of our app",
//     url: "https://website.com/blog",
//   },
// };

const Page = ({ params }) => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    let didCancel = false;

    const fetchPost = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();

        if (!didCancel) {
          setPost(data);
        }
      } catch (error) {
        console.log("Error fetching posts:", error);
      }
    };
    fetchPost();

    return () => {
      didCancel = true; // cleanup for component unmount
    };
  }, []);

  const handleDelete = async (id) => {
    await fetch(`/api/blog/${id}`, {
      method: "DELETE",
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-purple-700 mb-6 text-center">
        Blog Posts
      </h1>

      <div className="space-y-6">
        {post?.slice(0, 10).map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <BlogCard
              title={item.title}
              index={item.id}
              handleDelete={handleDelete}
            />
          </div>
        ))}
        <EditPage id={params.id} />;
      </div>
    </div>
  );
};

export default Page;
