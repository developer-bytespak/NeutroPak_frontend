'use client';

import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      subject: '',
      message: '',
    });
  };

  return (
    <main className="bg-white">
      {/* Page Header */}
      <section className="bg-gold-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Contact Us</h1>
          <p className="text-lg text-gray-600">We'd love to hear from you. Get in touch with our team.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <aside className="lg:col-span-1">
            <div className="card p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">📍 Address</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Shop No 1 Main Swabi Topi Road
                <br />
                Near PSO Pump Gulu Dheri
                <br />
                District Swabi, KPK, Pakistan
              </p>
            </div>

            <div className="card p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">📞 Phone</h3>
              <p className="text-gray-600 text-sm">
                <a href="tel:+923379788677" className="text-gold-600 hover:text-gold-700 font-semibold">
                  +92 337 9788677
                </a>
              </p>
            </div>

            <div className="card p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">✉️ Email</h3>
              <p className="text-gray-600 text-sm">
                <a href="mailto:info@honeeza.com" className="text-gold-600 hover:text-gold-700 font-semibold">
                  info@honeeza.com
                </a>
              </p>
            </div>

            <div className="card p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">💬 Social Media</h3>
              <div className="flex gap-3">
                <a href="https://instagram.com/honeeza" target="_blank" rel="noopener noreferrer" className="text-gold-600 hover:text-gold-700 font-semibold text-sm">
                  Instagram
                </a>
                <a href="https://facebook.com/honeeza" target="_blank" rel="noopener noreferrer" className="text-gold-600 hover:text-gold-700 font-semibold text-sm">
                  Facebook
                </a>
                <a href="https://wa.me/923379788677" target="_blank" rel="noopener noreferrer" className="text-gold-600 hover:text-gold-700 font-semibold text-sm">
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">⏰ Business Hours</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                <strong>Mon-Fri:</strong> 9:00 AM - 5:00 PM
                <br />
                <strong>Saturday:</strong> 10:00 AM - 4:00 PM
                <br />
                <strong>Sunday:</strong> Closed
              </p>
            </div>
          </aside>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="select-field"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="order">Order Related</option>
                    <option value="quality">Quality Concern</option>
                    <option value="bulk">Bulk Order</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="textarea-field"
                    placeholder="Please tell us how we can help..."
                    rows={6}
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Frequently Contacted For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 text-center">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Bulk Orders</h4>
              <p className="text-gray-600 text-sm">Contact us for wholesale, corporate, or bulk honey orders with special pricing.</p>
            </div>
            <div className="card p-6 text-center">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Product Info</h4>
              <p className="text-gray-600 text-sm">Questions about our honey varieties, origins, or health benefits?</p>
            </div>
            <div className="card p-6 text-center">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Delivery Issues</h4>
              <p className="text-gray-600 text-sm">Have concerns about your order or delivery? We're here to help!</p>
            </div>
            <div className="card p-6 text-center">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Feedback</h4>
              <p className="text-gray-600 text-sm">Share your experience and help us improve our service.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
