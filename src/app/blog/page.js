import Link from "next/link";
import React from "react";
import BlogCard from "../components/BlogCard";

export const metadata = {
  title: "Blog Page",
  description: "This is the blog page of our application",
  openGraph: {
    title: "Next.js Blog Page",
    description: "This is blog page of our app",
    url: "https://website.com/blog",
  },
};

const page = async () => {                          
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-purple-700 mb-6 text-center">
        Blog Posts
      </h1>

      <div className="space-y-6">
        {data?.slice(0, 10).map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <BlogCard title={item.title} index={item.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
