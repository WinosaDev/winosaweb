"use client";

import { Phone, MapPin, MessageCircle } from "lucide-react";

export default function SectionCompanyInfo() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Title */}
        <h2 className="text-5xl font-bold text-gray-900 mb-16">
          Get in touch
        </h2>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT SIDE - FORM */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Send a Message
            </h3>

            <p className="text-gray-500 mb-10">
              We'd love to hear from you. Fill out the form and our team will
              get back to you shortly.
            </p>

            <form className="space-y-8">

              {/* Row 1 */}
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <label className="text-sm text-gray-600">Name</label>
                  <input
                    type="text"
                    className="w-full border-b border-gray-400 focus:border-yellow-500 outline-none py-2 bg-transparent"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">Email Address</label>
                  <input
                    type="email"
                    className="w-full border-b border-gray-400 focus:border-yellow-500 outline-none py-2 bg-transparent"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <label className="text-sm text-gray-600">
                    Interested In
                  </label>
                  <select
                    className="w-full border-b border-gray-400 focus:border-yellow-500 outline-none py-2 bg-transparent"
                  >
                    <option>Web Development</option>
                    <option>UI/UX Design</option>
                    <option>Branding</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm text-gray-600">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="w-full border-b border-gray-400 focus:border-yellow-500 outline-none py-2 bg-transparent"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-sm text-gray-600">Message</label>
                <textarea
                  rows={4}
                  className="w-full border-b border-gray-400 focus:border-yellow-500 outline-none py-2 bg-transparent"
                ></textarea>
              </div>

              {/* Submit */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-md font-medium transition"
                >
                  + Submit
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT SIDE - COMPANY INFO */}
          <div className="lg:border-l lg:pl-16 border-gray-200 space-y-12">

            {/* Call Us */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">
                Call Us
              </h4>
              <div className="flex items-center gap-3 text-yellow-600">
                <Phone size={18} />
                <span className="font-medium">(235) 325-1351</span>
              </div>
            </div>

            {/* Visit Us */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">
                Visit Us
              </h4>
              <div className="flex items-start gap-3 text-yellow-600">
                <MapPin size={18} className="mt-1" />
                <span className="text-gray-600">
                  1234 Gold Street, San Francisco, CA
                </span>
              </div>
            </div>

            {/* Live Chat */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">
                Live Chat
              </h4>
              <div className="flex items-center gap-3 text-yellow-600 cursor-pointer hover:underline">
                <MessageCircle size={18} />
                <span>Start Chat</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
