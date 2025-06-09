"use client";

import React, { useEffect, useState } from "react";
import { notFound, useParams } from "next/navigation";
import { useRouter } from "next/navigation";

// export async function generateMetadata({ params }) {
//   const post = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${params.id}`
//   ).then((res) => res.json());

//   return {
//     title: post.title,
//     description: post.body,
//   };
// }

const Page = () => {
  const [post, setPost] = useState([]);
  const { id } = useParams();

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data = await res.json();
      setPost(data);
    };

    fetchData();
  }, []);


  return (
    <div className="max-w-2xl mx-auto p-4">
      <button
        onClick={() => router.back()}
        className="text-white bg-red-500 p-2.5 rounded-md"
      >
        Back
      </button>
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-700">{post.body}</p>
    </div>
  );
};

export default Page;
