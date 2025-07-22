import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/services";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navList = document.querySelector(".nav-list");
    const navLinks = document.querySelectorAll(".nav-link");

    // ✅ Vérifie que l'élément existe avant de lui attacher un événement
    if (hamburger && navList && navLinks.length > 0) {
      const toggleMenu = () => {
        hamburger.classList.toggle("active");
        navList.classList.toggle("active");
      };

      hamburger.addEventListener("click", toggleMenu);

      const handleLinkClick = (e) => {
        hamburger.classList.remove("active");
        navList.classList.remove("active");
        navLinks.forEach((item) => item.classList.remove("active"));
        e.currentTarget.classList.add("active");
      };

      navLinks.forEach((link) => {
        link.addEventListener("click", handleLinkClick);
      });

      const handleScroll = () => {
        document
          .querySelectorAll(".fade-in:not(.active)")
          .forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < window.innerHeight - 100) {
              element.classList.add("active");
            }
          });

        const sections = document.querySelectorAll("section");
        let current = "";
        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute("id");
          }
        });

        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
          }
        });
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll();

      return () => {
        hamburger.removeEventListener("click", toggleMenu);
        navLinks.forEach((link) =>
          link.removeEventListener("click", handleLinkClick)
        );
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <>
      <div className="flex flex-col min-h-screen bg-gradient-to-t from-gray-100 to-blue-100">
        <Header />
        <main className="flex-grow max-w-[70%] w-[67%] mx-auto">
          <Hero />
          <About />
          <Services />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
