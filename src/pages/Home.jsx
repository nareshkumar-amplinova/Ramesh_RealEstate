import heroImage from "../assets/hero.jpg";
import bannerImage from "../assets/image-1.jpg";
import livingImage from "../assets/download-1.png";
import amenitiesImage from "../assets/download-2.png";
import viewImage from "../assets/download-1.png";
import lifestyleImage from "../assets/download-2.png";
import { FaLocationArrow, FaGem, FaChartLine } from "react-icons/fa";
import gallery1 from "../assets/gallery-1.png";
import gallery2 from "../assets/gallery-2.png";
import gallery3 from "../assets/gallery-3.png";
import gallery4 from "../assets/gallery-4.png";
import gallery5 from "../assets/gallery-5.png";
import gallery6 from "../assets/gallery-6.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* HERO */}
  <section className="relative h-[600px] flex items-center">
  {/* Background */}
  <div className="absolute inset-0">
    <img
      src={heroImage}
      alt="Aduri Group Projects"
      className="w-full h-full object-cover"
    />

    {/* Gradient */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/10" />
  </div>

  {/* Content */}
  <div className="relative z-10 w-full">
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
      <div className="max-w-2xl text-white pt-16 pl-4 sm:pl-8 lg:pl-16">
        <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Aduri Group Projects
        </h1>

        <h2 className="text-xl lg:text-2xl font-medium text-gray-200 mb-4">
          Building Trusted Landmarks. Creating Future-Ready Communities.
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed mb-12">
          Experience premium plotted developments across Telangana with DTCP / RERA approvals, clear titles, and high-growth locations.<br/>
          ✔ Open Plots | ✔ Wellness Townships <br/> ✔ Highway-Facing Projects | ✔ Ideal for Investment & Construction
        </p>

        <div className="flex gap-5">
          <button
  onClick={() => {
    document
      .getElementById("premium-projects")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
  className="bg-primary hover:bg-primaryDark text-white px-8 py-3.5 rounded-md shadow-lg transition"
>
  View Projects
</button>
<button
  onClick={() => {
    document
      .getElementById("site-visit")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
  className="bg-white text-primary border border-primary px-8 py-3.5 rounded-md shadow-lg hover:bg-slate-50 transition"
>
  Book Site Visit
</button>

        </div>
      </div>
    </div>
  </div>
  </section>

{/* FEATURES */}
  <section className="pt-10 pb-10 bg-white">
  <div className="max-w-7xl mx-auto px-4 lg:px-8">
    <div className="grid md:grid-cols-3 gap-12">

      {/* Feature 1 */}
      <div className="bg-slate-50 rounded-xl p-8">
        <div className="flex items-center gap-3 mb-4">
          <FaGem className="text-primary text-lg" />
          <h3 className="text-lg font-semibold text-slate-900">
            Legally Approved Projects
          </h3>
        </div>
        <p className="text-slate-600 leading-relaxed">
          DTCP / MUDA / RERA-approved layouts ensure complete peace of mind and secure investment.
        </p>
      </div>

      {/* Feature 2 */}
      <div className="bg-slate-50 rounded-xl p-8">
        <div className="flex items-center gap-3 mb-4">
          <FaLocationArrow className="text-primary text-lg" />
          <h3 className="text-lg font-semibold text-slate-900">
            Strategic Locations
          </h3>
        </div>
        <p className="text-slate-600 leading-relaxed">
          Projects located near highways, growth corridors, temples, IT & industrial hubs.
        </p>
      </div>

      {/* Feature 3 */}
      <div className="bg-slate-50 rounded-xl p-8">
        <div className="flex items-center gap-3 mb-4">
          <FaChartLine className="text-primary text-lg" />
          <h3 className="text-lg font-semibold text-slate-900">
            High ROI Potential
          </h3>
        </div>
        <p className="text-slate-600 leading-relaxed">
          Designed for long-term appreciation with infrastructure-ready development.
        </p>
      </div>

    </div>
  </div>
  </section>

     {/* ================= EXPERIENCE ================= */}
<section 
id="premium-projects"
className="pt-10 pb-14 bg-slate-50">
  <div className="max-w-7xl mx-auto px-4 lg:px-8">

    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-10">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
        Explore Our Premium Projects
      </h2>
      <p className="text-slate-600 text-base md:text-lg leading-relaxed">
        Thoughtfully planned developments tailored for investors, families, and future homeowners.
      </p>
    </div>

    {/* Slider Wrapper */}
    <div className="relative">

      {/* LEFT ARROW */}
      <button
  onClick={() =>
    document.getElementById("experience-slider").scrollBy({
      left: -300,
      behavior: "smooth",
    })
  }
  className="
    absolute left-2 sm:-left-5
    top-1/2 -translate-y-1/2
    z-20
    bg-white shadow-md
    w-8 h-8 sm:w-10 sm:h-10
    rounded-full
    flex items-center justify-center
    text-primary text-lg sm:text-xl
  "
>
  ‹
</button>


      {/* RIGHT ARROW */}
      <button
  onClick={() =>
    document.getElementById("experience-slider").scrollBy({
      left: 300,
      behavior: "smooth",
    })
  }
  className="
    absolute right-2 sm:-right-5
    top-1/2 -translate-y-1/2
    z-20
    bg-white shadow-md
    w-8 h-8 sm:w-10 sm:h-10
    rounded-full
    flex items-center justify-center
    text-primary text-lg sm:text-xl
  "
>
  ›
</button>


      {/* Slider */}
      <div
        id="experience-slider"
        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-4"
      >
        {[
          {
  img: livingImage,
  title: "Aduri’s Golden Heights @ Rajapur",
  subtitle: "Premium Open Plots | Near NH-44, Shadnagar",
  desc:
    "DTCP & TS RERA Approved plotted development just 1 km from Hyderabad–Bangalore Highway.",
  price: "Starting from ₹13,799 / sq. yd",
  btn: "View Project",
  path: "/projects/rajapur",
},
{
  img: amenitiesImage,
  title: "Golden Heights – Health Village, Shadnagar",
  subtitle: "75-Acre Wellness Township | Open Plots, Villas & Apartments",
  desc:
    "A landmark health-focused gated community featuring Ayurveda & Wellness Hub,51+ lifestyle amenities, and future-ready infrastructure.",
  price: "Starting from ₹20, 299 / sq. yd",
  btn: "View Project",
  path: "/projects/shadnagar",
},
{
  img: viewImage,
  title: "Golden Heights – Budhera, Sadasivapet",
  subtitle: "65-Acre DTCP Township | Mumbai NH-65",
  desc:
    "Highway-facing mega residential township near IIT Hyderabad, SEZs & industrial hubs. Perfect for both end-use and long-term investment.",
  price: "Starting from ₹20,299 / sq. yd",
  btn: "View Project",
  path: "/projects/sadasivapet",
},         
{
  img: lifestyleImage,
  title: "Golden Heights – Patloor, Budhera",
  subtitle: "DTCP & RERA Approved Open Plots | High ROI Zone",
  desc:
    "Compact 7-acre project with excellent road visibility on Shankarpally–Momipet Road. Best suited for investors, weekend homes & future villas.",
  price: "Limited Plots Available",
  btn: "View Project",
  path: "/projects/budhera",
},
{
  img: livingImage,
  title: "Aduri’s Aabharana @ Yadadri",
  subtitle: "DTCP-Approved Open Plots Near Yadadri Temple",
  desc:
    "Construction-ready, Vaastu-compliant plots in a spiritually significant and fast-developing region near Hyderabad.",
  price: "Divine Living | Smart Investment",
  btn: "View Project",
  path: "/projects/aabharana",
},
        ].map((item, i) => (
          <div
            key={i}
            className="min-w-[320px] bg-white rounded-2xl shadow-md flex flex-col"
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="h-56 w-full object-cover"
            />

            {/* Content */}
            <div className="p-5 text-center flex flex-col h-full">
  <h3 className="text-base font-semibold text-primary mb-2">
    {item.title}
  </h3>

  <p className="text-sm font-medium text-slate-700 mb-1">
    {item.subtitle}
  </p>

  <p className="text-sm text-slate-600 leading-relaxed mb-3">
    {item.desc}
  </p>

  <p className="text-sm font-semibold text-primary mb-4">
    {item.price}
  </p>

  <button
  onClick={() => navigate(item.path)}
  className="mt-auto bg-primary text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-primaryDark transition"
>
  {item.btn}
</button>
</div>

          </div>
        ))}
      </div>
    </div>

  </div>
</section>

{/* PROJECT GALLERY */}
<section className="pt-10 pb-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 lg:px-8">

    {/* Heading */}
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-primary mb-2">
        Project Gallery
      </h2>
      <p className="text-slate-600">
        Explore our project through these carefully curated visuals
      </p>
    </div>

    {/* Images Grid */}
    <div className="grid md:grid-cols-3 gap-8">
      {[
        { image: gallery1, label: "Exterior View - Building Facade" },
        { image: gallery2, label: "Main Entrance Lobby" },
        { image: gallery3, label: "Sample Apartment - Living Area" },
        { image: gallery4, label: "Sample Apartment - Kitchen" },
        { image: gallery5, label: "Rooftop Amenities - Swimming Pool" },
        { image: gallery6, label: "Fitness Center" },
      ].map((item, index) => (
        <div key={index}>
          <div className="overflow-hidden rounded-lg">
            <img
              src={item.image}
              alt={item.label}
              className="w-full h-56 object-cover hover:scale-105 transition duration-500"
            />
          </div>
          <p className="mt-3 text-sm text-slate-600">
            {item.label}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>

{/* ================= TESTIMONIALS ================= */}
<section className="pt-10 pb-10 bg-slate-50">
  <div className="max-w-6xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
        What Our Clients Say
      </h2>
      <p className="text-slate-600 text-sm md:text-base">
        Discover why our clients trust us with their real estate investment
        decisions
      </p>
    </div>

    {/* ===== ROW 1 : 3 TESTIMONIALS ===== */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14">

      {/* Testimonial 1 */}
      <div className="bg-white rounded-xl p-6 shadow-sm text-center space-y-5">
        <div className="text-primary">★★★★★</div>
        <p className="text-slate-600 italic leading-relaxed text-sm">
          “The amenities in this project are exceptional. The landscaped gardens
          and clubhouse exceeded my expectations.”
        </p>
        <div className="flex items-center justify-center gap-3">
          <img
            src="https://i.pravatar.cc/60?img=12"
            alt="Rajesh Kumar"
            className="h-10 w-10 rounded-full"
          />
          <div className="text-left">
            <p className="font-semibold text-sm">Rajesh Kumar</p>
            <p className="text-xs text-slate-500">
              Business Owner, Hyderabad
            </p>
          </div>
        </div>
      </div>

      {/* Testimonial 2 (highlight) */}
      <div className="bg-sky-100 rounded-xl p-8 shadow-sm text-center space-y-5">
        <div className="text-primary">★★★★★</div>
        <p className="text-slate-700 italic leading-relaxed text-sm">
          “The location is perfect for my family—close to schools, hospitals,
          and shopping centers. Truly worth every rupee!”
        </p>
        <div className="flex items-center justify-center gap-3">
          <img
            src="https://i.pravatar.cc/60?img=47"
            alt="Priya Sharma"
            className="h-12 w-12 rounded-full"
          />
          <div className="text-left">
            <p className="font-semibold text-sm">Priya Sharma</p>
            <p className="text-xs text-slate-500">
              IT Professional, Bangalore
            </p>
          </div>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="bg-white rounded-xl p-6 shadow-sm text-center space-y-5">
        <div className="text-primary">★★★★★</div>
        <p className="text-slate-600 italic leading-relaxed text-sm">
          “As a first-time homebuyer, the team guided me through every step.
          The experience was smooth and transparent.”
        </p>
        <div className="flex items-center justify-center gap-3">
          <img
            src="https://i.pravatar.cc/60?img=32"
            alt="Vikram Reddy"
            className="h-10 w-10 rounded-full"
          />
          <div className="text-left">
            <p className="font-semibold text-sm">Vikram Reddy</p>
            <p className="text-xs text-slate-500">
              Software Engineer, Hyderabad
            </p>
          </div>
        </div>
      </div>

    </div>

    {/* ===== ROW 2 : 2 TESTIMONIALS (CENTERED) ===== */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">

      {/* Testimonial 4 */}
      <div className="bg-white rounded-xl p-6 shadow-sm text-center space-y-5">
        <div className="text-primary">★★★★★</div>
        <p className="text-slate-600 italic leading-relaxed text-sm">
          “The gated community provides excellent security and facilities.
          My children love the play areas and open spaces.”
        </p>
        <div className="flex items-center justify-center gap-3">
          <img
            src="https://i.pravatar.cc/60?img=5"
            alt="Sunita Patel"
            className="h-10 w-10 rounded-full"
          />
          <div className="text-left">
            <p className="font-semibold text-sm">Sunita Patel</p>
            <p className="text-xs text-slate-500">
              Entrepreneur, Mumbai
            </p>
          </div>
        </div>
      </div>

      {/* Testimonial 5 */}
      <div className="bg-white rounded-xl p-6 shadow-sm text-center space-y-5">
        <div className="text-primary">★★★★★</div>
        <p className="text-slate-600 italic leading-relaxed text-sm">
          “I purchased this property as an investment and the returns have been
          impressive. Maintenance services are prompt and reliable.”
        </p>
        <div className="flex items-center justify-center gap-3">
          <img
            src="https://i.pravatar.cc/60?img=8"
            alt="Anand Verma"
            className="h-10 w-10 rounded-full"
          />
          <div className="text-left">
            <p className="font-semibold text-sm">Anand Verma</p>
            <p className="text-xs text-slate-500">
              Retired Banker, Chennai
            </p>
          </div>
        </div>
      </div>

    </div>

  </div>
</section>


{/* OVERALL CUSTOMER SATISFACTION */}
<section className="pt-10 pb-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 lg:px-8">

    {/* Rating */}
    <div className="text-center mb-16">
      <h3 className="text-2xl font-bold text-slate-900 mb-3">
        Overall Customer Satisfaction
      </h3>

      <div className="flex items-center justify-center gap-2 text-primary text-xl mb-2">
        ★★★★☆
        <span className="text-slate-900 text-base font-semibold ml-2">
          4.8/5
        </span>
      </div>

      <p className="text-slate-600 text-sm">
        Based on 128 verified customer reviews
      </p>
    </div>

    {/* Stats */}
    <div className="grid md:grid-cols-3 gap-8 bg-slate-100 rounded-xl py-10 px-6 text-center">

      <div>
        <p className="text-3xl font-bold text-primary mb-2">96%</p>
        <p className="text-slate-600 text-sm">
          Would recommend to friends & family
        </p>
      </div>

      <div>
        <p className="text-3xl font-bold text-primary mb-2">92%</p>
        <p className="text-slate-600 text-sm">
          Satisfied with construction quality
        </p>
      </div>

      <div>
        <p className="text-3xl font-bold text-primary mb-2">98%</p>
        <p className="text-slate-600 text-sm">
          Happy with location & connectivity
        </p>
      </div>

    </div>
  </div>
</section>

{/* BOOK A SITE VISIT */}
<section 
 id="site-visit"
className="pt-10 pb-10 bg-slate-50">
  <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-16">

    {/* TOP BANNER */}
    <div className="relative h-[380px] rounded-2xl overflow-hidden">
      <img
        src={bannerImage}
        alt="Book Site Visit"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Book a Site Visit Today
        </h2>

        <p className="max-w-2xl text-gray-200 mb-8">
          Experience our premium properties firsthand and discover your dream
          home with a personalized guided tour.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <button 
          onClick={() => navigate("/contact")}
          className="bg-primary px-6 py-3 rounded-md font-medium shadow">
            Call Now
          </button>
          <button 
          onClick={() => navigate("/contact")}
          className="bg-emerald-600 px-6 py-3 rounded-md font-medium shadow">
            WhatsApp Now
          </button>
          <button 
          onClick={() => navigate("/contact")}
          className="bg-white text-primary px-6 py-3 rounded-md font-medium shadow">
            Enquire Now
          </button>
        </div>
      </div>
    </div>

   {/* ================= FORM + INFO ================= */}
<div className="bg-slate-50">
  <div className="max-w-6xl mx-auto px-6">

    <div className="flex justify-center">
      <div className="grid lg:grid-cols-2 gap-10 max-w-5xl w-full items-start">

        {/* ================= LEFT : SCHEDULE FORM ================= */}
        <div className="bg-white rounded-xl shadow-sm p-8 w-full">

          <h3 className="text-xl font-bold text-slate-900 mb-6">
            Schedule Your Visit
          </h3>

          <form className="space-y-4">

            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full border rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full border rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Preferred Visit Date
                </label>
                <input
                  type="date"
                  className="w-full border rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Preferred Time Slot
                </label>
                <input
                  type="time"
                  className="w-full border rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Additional Requirements
              </label>
              <textarea
                rows="3"
                placeholder="Any specific requirements or questions"
                className="w-full border rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

            <button className="w-full bg-primary text-white py-3 rounded-md font-medium hover:bg-primaryDark transition">
              Submit Request
            </button>

          </form>
        </div>

        {/* ================= RIGHT : INFO BOXES ================= */}
        <div className="space-y-6 w-full">

          {/* WHY VISIT */}
          <div className="bg-sky-100 rounded-2xl p-6">
            <h4 className="text-lg font-bold text-slate-800 mb-4">
              Why Visit Our Project?
            </h4>

            <ul className="space-y-4">
              {[
                ["Experience the Luxury", "Walk through premium spaces and quality craftsmanship."],
                ["Explore the Amenities", "World-class amenities designed for modern living."],
                ["Meet Our Experts", "Get all your questions answered during your visit."],
                ["Special Offers", "Exclusive site-visit offers available to visitors."],
              ].map(([title, desc], i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-primary mt-0.5">✔</span>
                  <div>
                    <p className="font-semibold text-sm text-slate-800">
                      {title}
                    </p>
                    <p className="text-sm text-slate-600 leading-snug">
                      {desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="bg-white rounded-2xl p-6 border">
            <h4 className="text-lg font-bold text-slate-800 mb-4">
              Contact Information
            </h4>

            <ul className="space-y-4 text-sm text-slate-700">
              <li className="flex gap-3">📍 123 Real Estate Avenue, Hyderabad, Telangana 500032</li>
              <li className="flex gap-3">📞 +91 98765 43210</li>
              <li className="flex gap-3">💬 +91 98765 43210</li>
              <li className="flex gap-3">✉️ info@realestate-project.com</li>
              <li className="flex gap-3">
                🕒 Mon–Sat: 9:00 AM – 6:00 PM<br />
                Sun: 10:00 AM – 4:00 PM
              </li>
            </ul>
          </div>

        </div>

      </div>
    </div>

  </div>
</div>


    {/* MAP */}
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-center text-xl font-bold mb-6">
        Find Us Here
      </h3>

      <div className="h-[320px] rounded-lg overflow-hidden mb-6">
        <iframe
          title="Project Location"
          src="https://www.google.com/maps?q=Hyderabad&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </div>

      <div className="text-center">
        <button className="bg-primary text-white px-6 py-3 rounded-md">
          Get Directions
        </button>
      </div>
    </div>

  </div>
</section>

{/* CTA */}
<section className="pt-10 pb-20 bg-white">
  <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
      Ready to Invest with Confidence?
    </h2>

    <p className="text-slate-600 text-lg mb-10">
      Whether you’re looking for high-return investments, construction-ready plots, or wellness-focused living, Aduri Group has the perfect project for you. <br />
      📞 Call / WhatsApp: +91 83742 49705 <br />
      🏡 Site Visits Available | Bank Loan Assistance | Limited Inventory
    </p>

    <div className="flex justify-center gap-5">
      <button 
      onClick={() => navigate("/contact")}
      className="bg-primary hover:bg-primaryDark text-white px-8 py-3.5 rounded-md font-medium shadow transition">
        Get Pricing
      </button>

      <button 
      onClick={() => {
    document
      .getElementById("site-visit")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
      className="border border-primary text-primary px-8 py-3.5 rounded-md font-medium hover:bg-slate-50 transition">
        Book Site Visit
      </button>
    </div>
  </div>
</section>

    </>
  );
};

export default Home;
