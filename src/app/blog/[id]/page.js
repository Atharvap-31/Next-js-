import React from "react";
import { notFound } from "next/navigation";


export async function generateMetadata({ params }) {
  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`).then(res => res.json());

  return {
    title: post.title,
    description: post.body,
  };
}

const page = async ({ params }) => {

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const data = await res.json();

  if (!data) {
    return notFound();
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-2">{data.title}</h1>
      <p className="text-gray-700">{data.body}</p>
    </div>
  );
};

export default page;
