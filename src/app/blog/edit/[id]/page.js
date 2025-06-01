"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

const EditPage = () => {
  const { id } = useParams();

  const router = useRouter();
  const [post, setPost] = useState({ title: "", body: "" });

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/blog/${id}`);
        const data = await res.json();
        setPost({
          title: data.title || "",
          body: data.body || "",
        });
      } catch (err) {
        console.error("Failed to fetch post", err);
      }
    };

    if (id) fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      await fetch(`/api/blog/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post),
      });

      router.push("/blog");
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Edit Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          placeholder="Title"
          className="w-full border px-4 py-2 mb-4"
        />

        <textarea
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          placeholder="Body"
          className="w-full border px-4 py-2 mb-4 h-32"
        />

        <button
          type="submit"
          className="bg-purple-600 cursor-pointer text-white px-4 py-2 rounded"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditPage;
