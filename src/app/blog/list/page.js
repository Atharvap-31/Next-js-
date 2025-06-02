"use client";
import { JSON_ULR } from "@/app/constant/urlConstant";
import { getPosts } from "@/app/utils/api";
import { useState } from "react";

export default function PostForm() {
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(JSON_ULR, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "My Title",
        body: "My body content",
        userId: 1,
      }),
    });

    const data = await res.json();
    setResponse(data);
    console.log(data); // This logs in the browser
  };

  return (
    <div className="p-6">
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit Post
      </button>

      {response && (
        <pre className="mt-4 bg-gray-100 p-4 rounded">
          {JSON.stringify(response, null, 2)}
        </pre>
      )}
    </div>
  );
}
