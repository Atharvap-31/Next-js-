async function POST(request) {
  const body = await request.json();

  return new Response(JSON.stringify({ message: "Success", data: body }), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
