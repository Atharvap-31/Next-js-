export default function DocsPage({ params }) {
  const { slug } = params;

  const path = slug?.join("/") || "home";

  return (
    <div className="min-h-screen bg-purple-50 text-gray-800 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-700 mb-4">
          📄 Documentation Page
        </h1>
        <p className="mb-2">
          <span className="font-semibold">Current Path:</span>{" "}
          <code className="bg-purple-100 px-2 py-1 rounded text-purple-800">
            /docs/{path}
          </code>
        </p>
        <div className="mt-6 bg-white rounded-lg shadow p-4">
          <p className="text-lg">
            This is the content for:{" "}
            <span className="font-mono text-purple-600">/{path}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
