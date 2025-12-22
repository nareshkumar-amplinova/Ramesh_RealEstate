import React from "react";
import { FaLinkedinIn, FaTwitter, FaEnvelope} from "react-icons/fa";
import { FiEye, FiTarget } from "react-icons/fi";

// Images (update paths if needed)
import ceoImg from "../assets/Durgam-Cheruvu.png";
import ctaImg from "../assets/download-1.png";

const About = () => {
  return (
    <div className="bg-white">

      {/* ================= ABOUT COMPANY ================= */}
<section className="pt-10 pb-20 bg-white">
  <div className="max-w-6xl mx-auto px-5">

    <div className="grid lg:grid-cols-2 gap-10 items-center">

      {/* LEFT CONTENT */}
      <div className="text-center lg:text-left">

        <h2 className="text-xl md:text-2xl lg:text-[28px] font-bold tracking-tight text-primary mb-4 whitespace-nowrap">
  Vishwajeet Construction & Developers
</h2>


        <p className="text-slate-600 text-sm leading-relaxed mb-7 max-w-xl mx-auto lg:mx-0">
          With over two decades of experience in the real estate industry,
          Vishwajeet Construction & Developers has established itself as a
          premier developer of residential and commercial properties across
          major Indian cities. Our commitment to quality, innovation, and
          customer satisfaction has made us a trusted name in the real estate
          sector.
        </p>

        {/* STATS */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-6 mb-8 max-w-md mx-auto lg:mx-0">
          <div>
            <h4 className="text-xl font-semibold text-primary">24</h4>
            <p className="text-xs text-slate-500">Years of Experience</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-primary">42</h4>
            <p className="text-xs text-slate-500">Completed Projects</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-primary">3.2M</h4>
            <p className="text-xs text-slate-500">Sq. Ft. Developed</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-primary">5800+</h4>
            <p className="text-xs text-slate-500">Happy Families</p>
          </div>
        </div>

        <button className="bg-primary text-white px-7 py-3 rounded-md text-sm font-medium hover:bg-primaryDark transition">
          View Our Properties
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative flex justify-center">

        <div className="relative w-full max-w-xl">

          {/* IMAGE */}
          <img
            src={ceoImg}
            alt="Founder & CEO"
            className="w-full h-[360px] object-cover rounded-2xl shadow-lg"
          />

          {/* INFO CARD */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-xl px-6 py-4 shadow-lg w-[300px] text-center">
            <h4 className="text-base font-semibold text-primary">
              Vishwajeet Sharma
            </h4>
            <p className="text-sm text-slate-500 mb-3">
              Founder & CEO
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex justify-center gap-4 text-primary text-lg">
              <a href="#" className="hover:opacity-80 transition">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <FaTwitter />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <FaEnvelope />
              </a>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>

{/* ================= VISION & MISSION ================= */}
<section className="pt-10 pb-20 bg-slate-50">
  <div className="max-w-6xl mx-auto px-6">

    {/* Section Heading */}
    <h2 className="text-3xl font-bold text-center text-primary mb-12">
      Our Vision & Mission
    </h2>

    <div className="grid md:grid-cols-2 gap-8">

      {/* OUR VISION */}
      <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
        
        {/* ICON + TITLE */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <FiEye className="text-2xl" />
          </div>

          <h3 className="text-lg font-semibold text-primary">
            Our Vision
          </h3>
        </div>

        {/* TEXT (unchanged) */}
        <p className="text-slate-600 text-sm leading-relaxed">
          To be the most trusted and respected real estate developer by creating
          sustainable living spaces that enhance the quality of life for our
          customers while maintaining the highest standards of ethics, quality,
          and customer satisfaction.
        </p>
      </div>

      {/* OUR MISSION */}
      <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
        
        {/* ICON + TITLE */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <FiTarget className="text-2xl" />
          </div>

          <h3 className="text-lg font-semibold text-primary">
            Our Mission
          </h3>
        </div>

        {/* TEXT (unchanged) */}
        <p className="text-slate-600 text-sm leading-relaxed">
          To deliver exceptional value to our customers through innovative
          design, superior construction quality, and transparent business
          practices while contributing positively to the communities we
          operate in.
        </p>
      </div>

    </div>
  </div>
</section>

{/* ================= ABOUT COMPANY ================= */}
<section className="pt-10 pb-20 bg-white">
  <div className="max-w-6xl mx-auto px-5">

    <div className="grid lg:grid-cols-2 gap-10 items-center">

      {/* LEFT CONTENT */}
      <div className="text-center lg:text-left">

        <h2 className="text-xl md:text-2xl lg:text-[28px] font-bold tracking-tight text-primary mb-4 whitespace-nowrap">
  Vishwajeet Construction & Developers
</h2>


        <p className="text-slate-600 text-sm leading-relaxed mb-7 max-w-xl mx-auto lg:mx-0">
          With over two decades of experience in the real estate industry,
          Vishwajeet Construction & Developers has established itself as a
          premier developer of residential and commercial properties across
          major Indian cities. Our commitment to quality, innovation, and
          customer satisfaction has made us a trusted name in the real estate
          sector. With over two decades of experience in the real estate industry,
          Vishwajeet Construction & Developers has established itself as a
          premier developer of residential and commercial properties across
          major Indian cities. Our commitment to quality, innovation, and
          customer satisfaction has made us a trusted name in the real estate
          sector.
        </p>

        

        <button className="bg-primary text-white px-7 py-3 rounded-md text-sm font-medium hover:bg-primaryDark transition">
          View Our Properties
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative flex justify-center">

        <div className="relative w-full max-w-xl">

          {/* IMAGE */}
          <img
            src={ceoImg}
            alt="Founder & CEO"
            className="w-full h-[360px] object-cover rounded-2xl shadow-lg"
          />

          {/* INFO CARD */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-xl px-6 py-4 shadow-lg w-[300px] text-center">
            <h4 className="text-base font-semibold text-primary">
              Vishwajeet Sharma
            </h4>
            <p className="text-sm text-slate-500 mb-3">
              Founder & CEO
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex justify-center gap-4 text-primary text-lg">
              <a href="#" className="hover:opacity-80 transition">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <FaTwitter />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <FaEnvelope />
              </a>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>

{/* ================= ABOUT COMPANY ================= */}
<section className="pt-10 pb-20 bg-white">
  <div className="max-w-6xl mx-auto px-5">

    <div className="grid lg:grid-cols-2 gap-10 items-center">

      {/* LEFT CONTENT */}
      <div className="text-center lg:text-left">

        <h2 className="text-xl md:text-2xl lg:text-[28px] font-bold tracking-tight text-primary mb-4 whitespace-nowrap">
  Vishwajeet Construction & Developers
</h2>


        <p className="text-slate-600 text-sm leading-relaxed mb-7 max-w-xl mx-auto lg:mx-0">
          With over two decades of experience in the real estate industry,
          Vishwajeet Construction & Developers has established itself as a
          premier developer of residential and commercial properties across
          major Indian cities. Our commitment to quality, innovation, and
          customer satisfaction has made us a trusted name in the real estate
          sector. With over two decades of experience in the real estate industry,
          Vishwajeet Construction & Developers has established itself as a
          premier developer of residential and commercial properties across
          major Indian cities. Our commitment to quality, innovation, and
          customer satisfaction has made us a trusted name in the real estate
          sector.
        </p>

        <button className="bg-primary text-white px-7 py-3 rounded-md text-sm font-medium hover:bg-primaryDark transition">
          View Our Properties
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative flex justify-center">

        <div className="relative w-full max-w-xl">

          {/* IMAGE */}
          <img
            src={ceoImg}
            alt="Founder & CEO"
            className="w-full h-[360px] object-cover rounded-2xl shadow-lg"
          />

          {/* INFO CARD */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-xl px-6 py-4 shadow-lg w-[300px] text-center">
            <h4 className="text-base font-semibold text-primary">
              Vishwajeet Sharma
            </h4>
            <p className="text-sm text-slate-500 mb-3">
              Founder & CEO
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex justify-center gap-4 text-primary text-lg">
              <a href="#" className="hover:opacity-80 transition">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <FaTwitter />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <FaEnvelope />
              </a>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>
      {/* ================= CTA ================= */}
<section className="pt-10 pb-20 bg-white">
  <div className="max-w-6xl mx-auto px-6">

    {/* Blue CTA Box */}
    <div className="bg-[#d9ecf4] rounded-2xl px-8 lg:px-12 py-10 flex flex-col lg:flex-row items-center justify-between gap-6">

      {/* LEFT CONTENT */}
      <div className="max-w-xl text-center lg:text-left">
        <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
          Interested in Learning More?
        </h3>

        <p className="text-slate-700 text-sm leading-relaxed mb-6">
          Fill out our inquiry form and our sales representative will get in
          touch with you to provide detailed information and schedule a site
          visit.
        </p>

        <button className="bg-primary text-white px-7 py-3 rounded-md text-sm font-medium hover:bg-primaryDark transition">
          Contact Us Now
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex-shrink-0 lg:-translate-x-8">
        <img
          src={ctaImg}
          alt="Contact Agent"
          className="w-64 h-64 rounded-full object-cover shadow-md"
        />
      </div>

    </div>
  </div>
</section>



    </div>
  );
};

export default About;
