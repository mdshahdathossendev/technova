import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react'; // Optional: Install lucide-react for icons

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Have questions about a gadget, an order, or looking for tech support? We are here to help.
          </p>
        </div>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Column 1 & 2: Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    name="firstName"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 p-3 border"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    name="lastName"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 p-3 border"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 p-3 border"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 p-3 border"
                >
                  <option>Order Tracking & Delivery</option>
                  <option>Technical Support</option>
                  <option>Returns & Refunds</option>
                  <option>Product Inquiry</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 p-3 border"
                  placeholder="Tell us how we can help..."
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Column 3: Contact Info Details */}
          <div className="bg-indigo-900 text-white rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="text-indigo-200 mb-8">
                Reach out to us directly through any of these channels. Our support squad is always online during working hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-indigo-300 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="text-indigo-200 text-sm">+88019370034</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-indigo-300 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="text-indigo-200 text-sm">hmdashahdat501@gamil.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-indigo-300 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">HQ Office</p>
                    <p className="text-indigo-200 text-sm">
                      101 Tech Boulevard, Suite 400<br />
                      San Francisco, CA 94107
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-indigo-300 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Business Hours</p>
                    <p className="text-indigo-200 text-sm">Mon - Fri: 9 AM - 6 PM EST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Optional bottom branding accent */}
            <div className="mt-12 pt-6 border-t border-indigo-800 text-xs text-indigo-300">
              © 2026 GadgetHQ Inc. Fast, reliable tech support.
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}