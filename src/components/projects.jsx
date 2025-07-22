import React from "react";

const projects = [
  {
    title: "E-commerce web",
    description:
      "Site web d'une boutique de la vente des sneakers avec panier et gestion de prix",
    link: "https://github.com/Tang-ala/TechWebAvance",
    image: "/images/ecommerce.png", 
  },
  {
    title: "E-gaz App",
    description:
      "Application mobile de gestion de vente et évaluation des bouteilles de vitogaz",
    link: "https://github.com/Tang-ala/Egaz",
    image: "/images/egaz.jpg",
  },
  {
    title: "Wifizone",
    description:
      "Application mobile de gestion de vente et évaluation des tickets pour un marchand",
    link: "https://github.com/JugheadStrix/wifizone",
    image: "/images/wifizone.jpg",
  },
  {
    title: "Portfolio Web",
    description: "Site personnel moderne",
    link: "https://github.com/Tang-ala/Portfolio",
    image: "/images/portfolio.png",
  },
];


const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100 rounded-2xl fade-in">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-3xl font-bold mb-8 text-center">
          Projets
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                Voir sur Git →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
