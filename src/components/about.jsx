import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import moi from "./../assets/images/me.jpg"


const About = () => (
  <section id="about" className="section about py-20 fade-in">
    <div className="container mx-auto px-4">
      <h2 className="section-title text-3xl font-bold text-center mb-10">
        À propos de moi
      </h2>
      <div className="about-content flex flex-col md:flex-row gap-12 items-center justify-between">
        <div className="relative w-64 h-64 transform transition-all duration-500 hover:scale-110 hover:rotate-3 md:mx-auto">
          <div className="w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400 p-1">
            <img
              src={moi}
              alt="Moi"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg animate-pulse"></div>
          <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full shadow-md opacity-80"></div>
        </div>

        <div className="about-text fade-in w-full md:w-1/2 text-gray-700 space-y-4">
          <p>
            Je suis un développeur web et mobile passionné à cause de mes
            formations dans la création de solutions digitales pendant 4 ans
            accompagnés des stages.
          </p>
          <p>Mon approche combine expertise technique et sens du design.</p>

          <div className="about-details space-y-2 mt-6">
            <div className="detail-item flex items-center gap-2">
              <i className="fas fa-user text-blue-600"></i> RASAMOELINA
              Tanjonanirina Melky
            </div>
            <div className="detail-item flex items-center gap-2">
              <i className="fab fa-whatsapp text-green-600"></i>
              <a
                href="https://wa.me/261342486429"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                0342486429 (WhatsApp)
              </a>
            </div>
            <div className="detail-item flex items-center gap-2">
              <i className="fas fa-envelope text-blue-600"></i>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=rasamoelinatanjona007@gmail.com"
                className="text-blue-700 hover:underline"
              >
                rasamoelinatanjona007@gmail.com
              </a>
            </div>
            <div className="detail-item flex items-center gap-2">
              <i className="fab fa-github text-blue-600"></i>
              <a
                href="https://github.com/Tang-ala"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                github.com/Tang-ala
              </a>
            </div>

            <div className="detail-item flex items-center gap-2">
              <i className="fas fa-graduation-cap text-blue-600"></i> Licence
              Informatique
            </div>
            <div className="detail-item flex items-center gap-2">
              <i className="fas fa-map-marker-alt text-blue-600"></i> 0103/3304
              Andohan'Ivory Fianarantsoa
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
