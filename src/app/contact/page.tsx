'use client';

import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    whatsapp: '',
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
      whatsapp: '',
      message: '',
    });
  };

  return (
    <main className="bg-white">
      {/* Page Header */}
      <section
        className="relative bg-center bg-cover py-32"
        style={{
          backgroundImage: 'url(/contact_sec.png)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">Contact Us</h1>
          <p className="text-lg text-yellow-50">We'd love to hear from you. Get in touch with our team.</p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Contact Info */}
            <div>
              <p className="text-sm font-semibold text-gray-700 italic mb-4">Still Need Assistance?</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-red-900 mb-6 leading-tight">
                Reach Out Directly — We're Happy to Help
              </h1>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                For bulk orders, white-label services, wholesale supply, or any specific questions — feel free to contact us. Our team will get back to you as soon as possible.
              </p>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <p className="text-gray-600 text-sm">Email :</p>
                    <a href="mailto:info@NeutroPak.com" className="font-semibold text-gray-900 hover:text-red-900">
                      info@NeutroPak.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="text-gray-600 text-sm">Phone (NeutroPak Official) :</p>
                    <a href="tel:+923379788677" className="font-semibold text-gray-900 hover:text-red-900">
                      0337 9788677
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="text-gray-600 text-sm">Phone (Irfan ullah) :</p>
                    <a href="tel:+923138538060" className="font-semibold text-gray-900 hover:text-red-900">
                      0313 8538060
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="text-gray-600 text-sm">Phone (Jawed Ali) :</p>
                    <a href="tel:+923089137732" className="font-semibold text-gray-900 hover:text-red-900">
                      0308 9137732
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="text-gray-600 text-sm">Location :</p>
                    <p className="font-semibold text-gray-900">
                      Shop No 1 Main Swabi Topi Road Near PSO Pump Gulu Dheri District Swabi, KPK Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white rounded-2xl border-2 border-red-200 p-8 shadow-sm">
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

                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="Your WhatsApp Number"
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
