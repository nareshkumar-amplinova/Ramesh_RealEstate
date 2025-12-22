import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";
import visitImage from "../assets/site-visit.png";

const Contact = () => {
  return (
    <div className="bg-white">
      {/* HEADER */}
      <section className="py-16 text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Contact Information
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Get in touch with our team for any inquiries about our real estate
          projects. We’re here to assist you.
        </p>
      </section>

      {/* TOP CONTACT CARDS */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 grid md:grid-cols-3 gap-8 mb-20">
        {/* ADDRESS */}
        <div className="text-center space-y-4">
          <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
            <FaMapMarkerAlt />
          </div>
          <h3 className="font-semibold">Office Address</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Prestige Technostar Building
            <br />
            123 Whitefield Main Road
            <br />
            Bangalore, Karnataka 560066
            <br />
            India
          </p>
        </div>

        {/* PHONE */}
        <div className="text-center space-y-4">
          <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
            <FaPhoneAlt />
          </div>
          <h3 className="font-semibold">Phone & WhatsApp</h3>
          <p className="text-sm text-slate-600">
            Sales: +91 80 4567 8901
            <br />
            Support: +91 80 4567 8902
            <br />
            WhatsApp: +91 99887 76655
          </p>
          <button className="mt-3 bg-primary text-white px-5 py-2 rounded-md text-sm">
            Chat on WhatsApp
          </button>
        </div>

        {/* EMAIL */}
        <div className="text-center space-y-4">
          <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
            <FaEnvelope />
          </div>
          <h3 className="font-semibold">Email Us</h3>
          <p className="text-sm text-slate-600">
            Sales: sales@realestate-project.com
            <br />
            Support: support@realestate-project.com
            <br />
            Careers: careers@realestate-project.com
          </p>
          <button className="mt-3 bg-primary text-white px-5 py-2 rounded-md text-sm">
            Send Email
          </button>
        </div>
      </section>

      {/* WORKING HOURS + FORM */}
<section className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-14 mb-24">

  {/* LEFT */}
  <div className="space-y-12">

    {/* WORKING HOURS */}
    <div>
      <h3 className="font-bold text-xl text-primary mb-6">
        Working Hours
      </h3>

      <div className="grid grid-cols-2 gap-6 text-sm text-slate-600">
        <div>
          <p className="font-medium text-slate-800">Monday – Friday</p>
          <p>9:00 AM – 6:00 PM</p>
        </div>
        <div>
          <p className="font-medium text-slate-800">Saturday</p>
          <p>10:00 AM – 4:00 PM</p>
        </div>
        <div>
          <p className="font-medium text-slate-800">Sunday</p>
          <p>Closed</p>
        </div>
        <div>
          <p className="font-medium text-slate-800">Holidays</p>
          <p>By Appointment Only</p>
        </div>
      </div>
    </div>

    {/* SITE VISIT CTA */}
    <div>
      <h4 className="font-semibold text-lg mb-3">
        Site Visit Timings
      </h4>

      <p className="text-sm text-slate-600 mb-6 max-w-md">
        We offer guided site visits every day from 10:00 AM to 5:00 PM by
        appointment only.
      </p>

      <button className="w-full bg-primary text-white py-3.5 rounded-md font-medium shadow-sm hover:bg-primaryDark transition">
        Schedule a Site Visit
      </button>
    </div>

  </div>

  {/* FORM */}
  <div>
    <h3 className="font-bold text-xl text-primary mb-8">
      Send us a Message
    </h3>

    <form className="grid grid-cols-2 gap-5">

      {/* NAME */}
      <div className="col-span-1">
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Your Name
        </label>
        <input
          type="text"
          placeholder="Enter your full name"
          className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>

      {/* EMAIL */}
      <div className="col-span-1">
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>

      {/* PHONE */}
      <div className="col-span-1">
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Phone Number
        </label>
        <input
          type="text"
          placeholder="Enter your phone number"
          className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>

      {/* SUBJECT */}
      <div className="col-span-1">
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Subject
        </label>
        <input
          type="text"
          placeholder="Property inquiry"
          className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>

      {/* MESSAGE */}
      <div className="col-span-2">
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Message
        </label>
        <textarea
          rows="4"
          placeholder="Your message here..."
          className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>

      {/* SUBMIT */}
      <button className="col-span-2 bg-primary text-white py-3.5 rounded-md font-medium flex items-center justify-center gap-2 shadow-sm hover:bg-primaryDark transition">
        <FaPaperPlane className="text-sm" />
        Send Message
      </button>

    </form>
  </div>

</section>


      {/* MAP */}
      <section className="mb-20">
        <h3 className="text-center text-xl text-primary font-bold mb-6">Find Us on Map</h3>

        <div className="max-w-6xl mx-auto h-[350px] rounded-xl overflow-hidden">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Whitefield%20Bangalore&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
      </section>

      <section className="pt-10 pb-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="bg-sky-100 rounded-3xl overflow-hidden grid lg:grid-cols-2 items-center">

          {/* LEFT CONTENT */}
          <div className="p-10 lg:p-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Schedule a Site Visit
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-xl">
              Experience our project firsthand. Schedule a site visit at your
              convenient time and our representative will assist you.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-white px-8 py-3 rounded-lg font-medium shadow-sm hover:bg-primaryDark transition">
                Book Site Visit
              </button>

              <button className="border border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-white transition">
                Call Now
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="h-full">
            <img
              src={visitImage}
              alt="Schedule Site Visit"
              className="w-full h-full object-cover rounded-tr-3xl rounded-br-3xl"
            />
          </div>
        </div>
      </div>
    </section>

    </div>
  );
};

export default Contact;
