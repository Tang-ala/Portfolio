import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Header = () => (
  <header className="header bg-gradient-to-l from-blue-50 to-blue-100 shadow-md sticky top-0 z-50">
    <div className="container max-w-[70%] mx-auto flex items-center justify-between px-4 py-4">
      <div className="logo text-xl font-bold text-blue-600">
        <i className="fas fa-user-alt" style={{ marginRight: "8px" }}></i>
        Tanjona
      </div>
      <nav className="nav">
        <ul className="nav-list flex space-x-6">
          <li>
            <a
              href="#home"
              className="nav-link active text-gray-800 hover:text-blue-600"
            >
              Accueil
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="nav-link text-gray-800 hover:text-blue-600"
            >
              À propos
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="nav-link text-gray-800 hover:text-blue-600"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="nav-link text-gray-800 hover:text-blue-600"
            >
              Projets
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="nav-link text-gray-800 hover:text-blue-600"
            >
              Compétences
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="nav-link text-gray-800 hover:text-blue-600"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="hamburger ml-4 flex flex-col justify-center cursor-pointer md:hidden">
          <div className="bar w-6 h-0.5 bg-gray-800 my-0.5"></div>
          <div className="bar w-6 h-0.5 bg-gray-800 my-0.5"></div>
          <div className="bar w-6 h-0.5 bg-gray-800 my-0.5"></div>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
