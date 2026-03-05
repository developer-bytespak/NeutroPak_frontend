'use client';

import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will contact you soon!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <main className="bg-white overflow-x-hidden">
      {/* Page Header */}
      <section
        className="relative bg-center bg-cover py-12 sm:py-20 md:py-32"
        style={{
          backgroundImage: 'url(/contact_sec.png)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">Contact Us</h1>
          <p className="text-sm sm:text-base md:text-lg text-yellow-50">We'd love to hear from you. Get in touch with our team.</p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
            {/* Left Side - Contact Info */}
            <div>
              <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-700 italic mb-4">Still Need Assistance?</p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-red-900 mb-6 leading-tight">
                Reach Out Directly — We're Happy to Help
              </h1>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-8 leading-relaxed">
                For bulk orders, white-label services, wholesale supply, or any specific questions — feel free to contact us. Our team will get back to you as soon as possible.
              </p>

              {/* Contact Details */}
              <div className="space-y-4 flex flex-col items-start">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <p className="text-gray-600 text-xs sm:text-sm">Email :</p>
                    <a href="mailto:nutreopak@gmail.com" className="font-semibold text-gray-900 hover:text-red-900 text-sm sm:text-base">
                      nutreopak@gmail.com
                    </a>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="flex items-start gap-6 mt-8">
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/nutreopak"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300"
                    title="Follow us on Facebook"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/nutreopak"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full hover:from-pink-600 hover:to-rose-600 transition-all duration-300"
                    title="Follow us on Instagram"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white rounded-2xl border-2 border-red-200 p-4 sm:p-6 md:p-8 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border-b-2 border-red-300 focus:outline-none focus:border-red-900 bg-transparent text-gray-900 placeholder-gray-400"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border-b-2 border-red-300 focus:outline-none focus:border-red-900 bg-transparent text-gray-900 placeholder-gray-400"
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone Number"
                  className="w-full px-4 py-3 border-b-2 border-red-300 focus:outline-none focus:border-red-900 bg-transparent text-gray-900 placeholder-gray-400"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your Inquiry / Message"
                  rows={5}
                  className="w-full px-4 py-3 border-b-2 border-red-300 focus:outline-none focus:border-red-900 bg-transparent text-gray-900 placeholder-gray-400 resize-none"
                />

                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-full transition-colors duration-300 text-lg"
                >
                  Get In Touch
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
