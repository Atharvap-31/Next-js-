
import Link from "next/link";

export const metadata = {
  title: "Atharva Patil - Frontend Developer",
  description:
    "Welcome to my portfolio! I am Atharva Patil, a passionate Frontend Developer specializing in creating beautiful and functional web applications using React and Next.js. Explore my projects and get in touch!",
  opengraph: {
    title: "Atharva Patil - Frontend Developer",
    description:
      "Welcome to my portfolio! I am Atharva Patil, a passionate Frontend Developer specializing in creating beautiful and functional web applications using React and Next.js. Explore my projects and get in touch!",
  },
};

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-4">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-4">
        Hi, I'm <span className="text-purple-600">Atharva Patil</span>
      </h1>

      <p className="text-xl sm:text-2xl font-medium text-center max-w-xl mb-6">
        A passionate <span className="text-pink-500">Frontend Developer</span>{" "}
        crafting delightful UIs with React & Next.js.
      </p>

      <div className="flex gap-4">
        <Link
          href="/projects"
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-md transition"
        >
          View Projects
        </Link>
        <Link
          href="/contact"
          className="border border-purple-600 hover:bg-purple-100 text-purple-600 font-semibold py-2 px-6 rounded-md transition"
        >
          Contact Me
        </Link>
      </div>

      <p className="mt-10 text-sm text-gray-500 dark:text-gray-400">
        Built with 💜 using Next.js & Tailwind CSS
      </p>
    </section>
  );
}
