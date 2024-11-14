import React from "react";
import Layout from "../component/Layout";

const Projects = () => {
  const projects = [
    {
      title: "Gabutz Web",
      description: "Project sederhana yang dibangun menggunakan react",
      imageUrl: "/react-tools.png",
      link: "https://tools-react-ten.vercel.app/",
    },
    {
      title: "Industry Web",
      description: "Project sederhana yang dibangun menggunakan html css js",
      imageUrl: "/munjalindra-website.png",
      link: "https://panntod.github.io/Munjalindra-Web/",
    },
    {
      title: "Personal Web",
      description: "Website portfolio, digunakan untuk memberi resume",
      imageUrl: "/portfolio-web.png",
      link: "https://pandhu-munjalindra.xyz",
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto pt-24 flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500">
        <h1 className="text-4xl font-bold mb-8 text-white">Proyek Saya</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-white rounded-lg overflow-hidden shadow-md transition duration-300 transform hover:scale-105"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-600">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 block text-blue-500 hover:underline hover:text-blue-600 transition duration-300"
                >
                  Lihat Detail
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
