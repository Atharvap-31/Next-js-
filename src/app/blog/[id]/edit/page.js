"use client";

import Loading from "@/app/loading";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { id } = useParams();
  const [post, setPost] = useState({ title: "", body: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        const data = await res.json();
        setPost({ title: data.title || "", body: data.body || "" });
      } catch (error) {
        console.error("Failed to fetch post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    });
    alert("Post updated!");
  };

  if (loading) return <p className="p-6">
    <Loading />
  </p>;

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4">
      <input
        className="w-full p-2 border"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <textarea
        className="w-full p-2 border"
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
    </form>
  );
};

export default Page;
