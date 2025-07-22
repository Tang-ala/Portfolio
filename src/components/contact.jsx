import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_juzewxo",
        "template_gcaxa0n",
        form.current,
        "iWNXxrVBfWwtaQfia"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message envoyé avec succès !");
          form.current.reset(); // Réinitialise le formulaire
        },
        (error) => {
          console.log(error.text);
          alert("Erreur lors de l'envoi. Veuillez réessayer.");
        }
      );
  };

  return (
    <section id="contact" className="py-16 bg-gray-100 fade-in">
      <div className="container mx-auto px-4 max-w-xl">
        <h2 className="section-title text-3xl font-bold mb-8 text-center">
          Contact
        </h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white shadow-lg rounded-2xl p-8 space-y-4"
        >
          <input
            type="text"
            name="title"
            placeholder="Sujet"
            className="w-full p-3 border rounded-xl"
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Nom"
            className="w-full p-3 border rounded-xl"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 border rounded-xl"
            required
          />
          <textarea
            name="message"
            placeholder="Votre message"
            rows="5"
            className="w-full p-3 border rounded-xl"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
