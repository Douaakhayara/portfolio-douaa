import React, { useState } from "react";
import Images from "../constans/Images";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = "service_sx1ukfa";
    const templateId = "template_z622zz7";
    const publicKey = "I8YJGjTE-XXpNj6m9";

    const templateParams = {
      form_name: name,
      form_email: email,
      to_name: 'douaa khayara',
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email Sent Successfully", response);
        setSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error Sending Email", error);
        setSuccess(false);
      });
  };

  return (
    <section
      id="contact"
      className="relative max-w-md mx-auto mt-10 p-8 bg-gray-900/80 rounded-xl shadow-lg text-white z-10"
    >
      {/* Video Background */}
      <video
        src={Images.video}
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-full h-full object-cover -z-20"
      ></video>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 -z-10"></div>

      <h2 className="text-3xl font-extrabold text-center text-green-400 mb-6">
        Contact Me
      </h2>

      <form onSubmit={sendEmail} className="space-y-5">
        <input
          type="text"
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-950 text-white placeholder-green-400"
        />

        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          className="w-full px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-950 text-white placeholder-green-400"
        />

        <textarea
          name="message"
          rows="4"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Message"
          className="w-full px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-950 text-white placeholder-green-400 resize-none"
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Send Message
        </button>

        {success && (
          <p className="text-green-400 text-sm mt-3 text-center">
            ✅ Message sent successfully!
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
