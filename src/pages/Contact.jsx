import React, { useState } from "react";
import Layout from "../component/Layout";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Data formulir yang dikirim!");
    // Proses pengiriman formulir atau tindakan lainnya di sini
    console.log("Data formulir yang dikirim:", formData);
  };

  return (
    <Layout>
      <div className="container mx-auto pt-24 h-screen bg-gradient-to-r from-blue-500 to-purple-500">
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white px-12 py-10 rounded-xl shadow-lg"
        >
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            Send Message
          </h1>
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-800 mb-2">
              Nama
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-800 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-800 mb-2">
              Pesan
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300"
          >
            Kirim Pesan
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;
