let posts = [
  { id: 1, title: "First Post", body: "Hello World" },
  { id: 2, title: "Second Post", body: "Another One" },
];

export async function GET(_, { params }) {
  const post = posts.find((p) => p.id == params.id);
  return Response.json(post || {});
}

export async function PUT(request, { params }) {
  const body = await request.json();
  posts = posts.map((p) =>
    p.id == params.id ? { ...p, title: body.title, body: body.body } : p
  );
  return Response.json({ message: "Updated" });
}

export async function DELETE(_, { params }) {
  posts = posts.filter((p) => p.id != params.id);
  return Response.json({ message: "Deleted" });
}
