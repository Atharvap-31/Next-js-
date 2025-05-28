import React from "react";

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-purple-700 mb-6 text-center">
        About Me
      </h1>

      <div className="bg-white shadow-lg rounded-lg p-8 space-y-6 text-gray-800 leading-relaxed">
        <p className="text-lg font-semibold text-purple-600">
          Front-End Developer | React.js | Tailwind CSS | Redux | API
          Integration
        </p>

        <p>
          I’m a{" "}
          <span className="font-semibold">
            detail-oriented and results-driven Front-End Developer
          </span>{" "}
          with
          <span className="font-semibold"> 1 year of experience</span> building
          responsive, scalable, and user-friendly web applications.
        </p>

        <p>
          My technical toolkit includes{" "}
          <span className="font-medium">React.js</span>,{" "}
          <span className="font-medium">Tailwind CSS</span>, and advanced state
          management tools like <span className="font-medium">Redux</span> and
          the <span className="font-medium">Context API</span>. I specialize in
          integrating RESTful APIs using{" "}
          <span className="font-medium">Axios</span>,{" "}
          <span className="font-medium">Fetch API</span>, and{" "}
          <span className="font-medium">Tanstack Query</span> for smooth
          asynchronous data flows.
        </p>

        <p>
          I have hands-on experience building{" "}
          <span className="font-medium">reusable components</span> and front-end
          libraries that promote clean and maintainable code. I'm also skilled
          in <span className="font-medium">performance optimization</span>,
          ensuring fast and responsive UIs across all devices and browsers.
        </p>

        <p>
          Collaboration is at the heart of my workflow. I’ve worked closely with{" "}
          <span className="font-medium">UI/UX designers</span>,{" "}
          <span className="font-medium">backend developers</span>, and{" "}
          <span className="font-medium">product managers</span> to ship
          high-quality features on time.
        </p>

        <p>
          I'm proficient in <span className="font-medium">Git</span>, and I've
          contributed to projects via platforms like{" "}
          <span className="font-medium">GitHub</span> and{" "}
          <span className="font-medium">Bitbucket</span>.
        </p>

        <p>
          Above all, I'm passionate about delivering{" "}
          <span className="font-semibold">
            clean, accessible, and delightful user experiences
          </span>{" "}
          by following modern front-end architecture and design best practices.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
