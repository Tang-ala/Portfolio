import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const services = [
  {
    icon: "fas fa-code",
    title: "Développement Web",
    description: "Sites web personnalisés avec React et Node.js.",
  },
  {
    icon: "fas fa-mobile-alt",
    title: "Développement Mobile",
    description: "Applications cross-platform avec Flutter.",
  },
  {
    icon: "fas fa-server",
    title: "Développement Backend",
    description: "Backends robustes et APIs en Node.js ou Java.",
  },
  {
    icon: "fas fa-database",
    title: "Architecture de Base de Données",
    description: "Conception et gestion efficace de bases de données.",
  },
];

const Services = () => (
  <section id="services" className="section services py-20 fade-in">
    <div className="container mx-auto px-4">
      <h2 className="section-title text-3xl font-bold text-center mb-10">
        Mes Services
      </h2>
      <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            className="service-card fade-in bg-gray-50 border rounded-xl p-6 text-center shadow hover:shadow-lg transition"
            key={index}
          >
            <div className="service-icon text-3xl text-blue-600 mb-4">
              <i className={service.icon}></i>
            </div>
            <h3 className="service-title text-xl font-semibold mb-2">
              {service.title}
            </h3>
            <p className="service-description text-gray-600">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
