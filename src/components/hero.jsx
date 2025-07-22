import React from "react";

const Hero = () => (
  <section id="home" className="hero text-black py-16 fade-in">
    <div className="container mx-auto px-2 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
      <div className=" mx-auto hero-content text-center md:text-left max-w-xl">
        <h1 className="hero-title text-blue-900 md:text-4xl font-bold mb-4 fade-in">
          Salut, je suis Tanjona
        </h1>
        <h2 className="hero-subtitle text-2xl mb-4 fade-in">
          Développeur Web & Mobile
        </h2>
        <p className="hero-text mb-6 fade-in">
          Je crée des sites web et applications mobiles fonctionnels avec une
          attention particulière à l'expérience utilisateur.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 fade-in">
          <a
            href="#projects"
            className="btn btn-primary bg-white text-blue-900 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition"
          >
            Voir mes projets
          </a>
          <a
            href="/CV classe M1.pdf"
            download="Tanjona_CV.pdf"
            className="btn btn-secondary bg-blue-900 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-blue-800 transition inline-flex items-center gap-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-4-4m4 4l4-4m5.78-2.96A7.5 7.5 0 1112 4.5C7.97 4.5 4.78 7.22 3.22 10.96"
              />
            </svg>
            Télécharger CV
          </a>
        </div>
      </div>
      <div className="relative w-full max-w-md transform transition-all duration-500 hover:scale-105">
        <img
          src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2"
          alt="Développeur au travail"
          className="rounded-xl shadow-lg"
        />
      </div>
    </div>
  </section>
);

export default Hero;
