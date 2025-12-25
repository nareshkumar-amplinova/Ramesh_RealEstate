import React from "react";
import {
  FaRoad,
  FaCity,
  FaMapMarkerAlt,
  FaLocationArrow,
  FaIndustry,
  FaPlane,
  FaChartLine, 
  FaUniversity,
} from "react-icons/fa";

import heroImage from "../../assets/download-1.png";
import locationMap from "../../assets/location.png";
import microsoftImg from "../../assets/Microsoft.png";
import inorbitImg from "../../assets/InOrbit.png";
import apolloImg from "../../assets/Apollo.png";
import schoolImg from "../../assets/DPS.png";
import financialImg from "../../assets/Financial.png";
import lakeImg from "../../assets/Durgam-Cheruvu.png";
import cityViewImg from "../../assets/experience-visit.png";
import visitImage from "../../assets/site-visit.png";

import exteriorImg from "../../assets/gallery-1.png";
import lobbyImg from "../../assets/gallery-2.png";
import livingImg from "../../assets/gallery-3.png";
import bedroomImg from "../../assets/gallery-4.png";


const GoldenHeightsShad = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-[600px] flex items-center">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Riverside Residences"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/10" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="max-w-2xl text-white pt-16 pl-4 sm:pl-8 lg:pl-16">
              <h1 className="text-5xl lg:text-6xl font-bold mb-4">
                Health Village Wellness Center
              </h1>

              <h3 className="text-lg lg:text-xl text-gray-200 mb-4">
                Aduri’s Golden Heights – Health Village Wellness Center <br/>
                Premium Wellness Township | Balanagar, Shadnagar
              </h3>

              <p className="text-gray-300 text-lg mb-4">
                MUDA Approved 75-Acre Gated Residential Wellness Community with Open Plots, Luxury Villas & Future Apartments. Featuring a dedicated Ayurveda & Wellness Hub, 51+ lifestyle amenities, and future-ready infrastructure in a high-growth corridor.
              </p>
              <h3 className="text-lg lg:text-xl text-gray-200 mb-6">
                Price: ₹20,299 / sq. yd
              </h3>
              <div className="flex gap-5">
                <button className="bg-primary text-white px-8 py-3.5 rounded-md shadow-lg">
                  Get Pricing
                </button>
                <button className="bg-white text-primary border border-primary px-8 py-3.5 rounded-md">
                  Book Site Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LOCATION ADVANTAGES ================= */}
<section className="pt-10 pb-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 lg:px-8">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-primary mb-3">
        Location Advantages
      </h2>
      <p className="text-slate-600 max-w-2xl mx-auto">
        Strategically located in a prime growth corridor offering excellent connectivity, lifestyle convenience, and long-term investment value.
      </p>
    </div>

    {/* Content */}
    <div className="grid lg:grid-cols-2 gap-8 items-start">

      {/* ================= LEFT : KEY BENEFITS ================= */}
<div className="w-full">
  <h3 className="text-lg font-semibold text-primary mb-8">
    Key Location Benefits
  </h3>

  <div className="space-y-8">
    {[
      {
        icon: <FaRoad />,
        title: "Proposed Regional Ring Road (RRR)",
        desc:
          "Located on the proposed RRR corridor, ensuring excellent future connectivity and appreciation.",
      },
      {
        icon: <FaChartLine />,
        title: "Close to Shadnagar Growth Zone",
        desc:
          "Situated near Shadnagar, a rapidly developing residential, industrial, and infrastructure hub.",
      },
      {
        icon: <FaIndustry />,
        title: "Near MS Data Center & Pharma SEZs",
        desc:
          "Proximity to major data centers and pharma zones is driving employment and real estate demand.",
      },
      {
        icon: <FaUniversity />,
        title: "Upcoming Educational & Institutional Hub",
        desc:
          "Close to Symbiosis University and other upcoming educational institutions.",
      },
    ].map((item, index) => (
      <div key={index} className="flex items-start gap-5">
        {/* Icon */}
        <div className="w-11 h-11 flex items-center justify-center rounded-full bg-primary/10 text-primary text-base shrink-0">
          {item.icon}
        </div>

        {/* Text */}
        <div>
          <h4 className="text-sm font-semibold text-slate-800 mb-1">
            {item.title}
          </h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            {item.desc}
          </p>
        </div>
      </div>
    ))}
  </div>

  {/* Button */}
  <div className="flex justify-center pt-6">
  <button className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primaryDark transition">
    View on Google Maps
  </button>
</div>
</div>


      {/* ================= RIGHT : IMAGE + TEXT ================= */}
      <div className="flex flex-col items-center text-center">
        <div className="rounded-xl overflow-hidden shadow-lg mb-6 w-full">
          <img
            src={locationMap}
            alt="Project Location Map"
            className="w-full object-cover"
          />
        </div>

        <p className="text-slate-500 flex items-center gap-2 text-sm">
          <FaMapMarkerAlt className="text-primary" />
          Project Location:<br/>
          Balanagar, Near Shadnagar, Hyderabad – Telangana
        </p>
      </div>

    </div>
  </div>
</section>



      {/* ================= CONNECTIVITY & DISTANCE ================= */}
<section className="pt-10 pb-20 bg-slate-50">
  <div className="max-w-7xl mx-auto px-4 lg:px-8">

    {/* Heading */}
    <h3 className="text-center text-2xl font-bold text-primary mb-12">
      Connectivity & Distance
    </h3>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

      {[
        {
          icon: <FaRoad />,
          title: "Ring Road",
          subtitle: "Proposed Regional Ring Road (RRR)",
          distance: "Close Proximity",
          progress: "w-[25%]",
        },
        {
          icon: <FaCity />,
          title: "Town",
          subtitle: "Shadnagar Town",
          distance: "Approx. 15 mins",
          progress: "w-[40%]",
        },
        {
          icon: <FaUniversity />,
          title: "University",
          subtitle: "Symbiosis University",
          distance: "Approx. 10–15 mins",
          progress: "w-[70%]",
        },
        {
          icon: <FaPlane />,
          title: "Airport",
          subtitle: "RGIA Airport",
          distance: "Approx. 45–50 mins",
          progress: "w-[85%]",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-6 text-center shadow-sm border border-slate-100"
        >
          {/* Icon */}
          <div className="text-primary text-2xl mb-4 flex justify-center">
            {item.icon}
          </div>

          {/* Title */}
          <h4 className="font-semibold text-slate-800 mb-1">
            {item.title}
          </h4>

          {/* Subtitle */}
          <p className="text-xs text-slate-500 mb-3">
            {item.subtitle}
          </p>

          {/* Distance */}
          <p className="text-sm font-semibold text-primary mb-4">
            {item.distance}
          </p>

          {/* Progress Bar */}
          <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
            <div
              className={`h-full bg-primary rounded-full ${item.progress}`}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* ================= NEARBY LANDMARKS ================= */}
<section className="pt-10 pb-10 bg-white">
  <div className="max-w-7xl mx-auto px-4 lg:px-8">
    <h3 className="text-center text-2xl font-bold text-primary mb-12">
      Nearby Landmarks
    </h3>

    <div className="grid md:grid-cols-3 gap-10">
      {[
        {
          img: microsoftImg,
          title: "MS Data Center",
          desc: "A major digital infrastructure hub boosting residential and investment demand.",
        },
        {
          img: inorbitImg,
          title: "Proposed Regional Ring Road (RRR)",
          desc: "Future-ready connectivity corridor enhancing long-term land value.",
        },
        {
          img: apolloImg,
          title: "Symbiosis University",
          desc: "Upcoming educational institution attracting students, faculty, and residential growth.",
        },
        {
          img: schoolImg,
          title: "Pharma SEZs & Industrial Corridors",
          desc: "Employment-driven zones supporting sustained real estate appreciation.",
        },
        {
          img: financialImg,
          title: "Shadnagar Town",
          desc: "Well-developed town with markets, hospitals, schools, and daily conveniences.",
        },
        {
          img: lakeImg,
          title: "Shamshabad International Airport (RGIA)",
          desc: "Smooth airport access supporting a premium lifestyle and investment appeal.",
        },
      ].map((item, i) => (
        <div key={i} className="space-y-4 max-w-sm mx-auto">
  {/* Image */}
  <div className="rounded-xl overflow-hidden">
    <img
      src={item.img}
      alt={item.title}
      className="h-44 w-full object-cover"
    />
  </div>

  {/* Content */}
  <div>
    <h4 className="font-semibold text-slate-900 mb-1">
      {item.title}
    </h4>

    <p className="text-sm text-slate-600 leading-relaxed">
      {item.desc}
    </p>
  </div>
</div>

      ))}
    </div>
  </div>
</section>

{/* ================= PROJECT GALLERY ================= */}
<section className="pt-10 pb-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 lg:px-8">

    {/* Header */}
    <div className="mb-10">
      <h2 className="text-3xl font-bold text-primary mb-2">
        Project Gallery
      </h2>
      <p className="text-slate-600">
        Explore our project through these carefully curated visuals
      </p>
    </div>

    {/* Gallery */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        {
          img: exteriorImg,
          title: "Exterior View",
          desc: "Building Façade",
        },
        {
          img: lobbyImg,
          title: "Main Entrance",
          desc: "Luxury Lobby Area",
        },
        {
          img: livingImg,
          title: "Sample Apartment",
          desc: "Living Area",
        },
        {
          img: bedroomImg,
          title: "Master Bedroom",
          desc: "Premium Interiors",
        },
      ].map((item, index) => (
        <div key={index} className="space-y-3">
          
          {/* Image */}
          <div className="rounded-xl overflow-hidden shadow-sm">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-56 object-cover hover:scale-105 transition duration-300"
            />
          </div>

          {/* Caption */}
          <div>
            <p className="text-sm font-medium text-slate-800">
              {item.title}
            </p>
            <p className="text-xs text-slate-500">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* ================= EXPERIENCE LOCATION ADVANTAGE ================= */}
<section className="pt-10 pb-10">
  <div className="max-w-7xl mx-auto px-4 lg:px-8">
    <div className="bg-primary rounded-2xl p-8 lg:p-12 grid lg:grid-cols-2 gap-12 items-center">

      {/* LEFT CONTENT */}
      <div className="text-white">
        <h3 className="text-2xl font-bold mb-3">
          Ready to Invest in a Wellness-Focused Lifestyle Community?
        </h3>

        <p className="text-sm text-white/80 mb-6 max-w-md">
          Schedule a site visit to experience <span className="text-bold">Aduri’s Golden Heights – Health Village Wellness Center</span> and secure your premium plot in a future-ready wellness township.
        </p>

        {/* FORM CARD */}
        <div className="bg-white rounded-xl p-6 text-slate-800 max-w-md">
          <h4 className="font-semibold text-primary mb-4">
            Request Site Visit
          </h4>

          <form className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Your Name
        </label>
            <input
              type="text"
              placeholder="Your Name"
              className="border rounded-md px-4 py-2.5 text-sm col-span-1"
            />
          </div>
          <div className="col-span-1">
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Phone Number
        </label>
            <input
              type="text"
              placeholder="Phone Number"
              className="border rounded-md px-4 py-2.5 text-sm col-span-1"
            />
          </div>

          <div className="col-span-2">
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Email Address
        </label>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-md px-4 py-3 text-sm"
            />
          </div>

            <select className="border rounded-md px-4 py-2.5 text-sm col-span-2 text-slate-500">
              <option>Preferred Visit Date</option>
            </select>

            <button
              type="submit"
              className="col-span-2 bg-primary text-white py-3 rounded-md text-sm font-medium hover:bg-primaryDark transition"
            >
              Schedule Now
            </button>
          </form>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex flex-col items-center">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src={cityViewImg}
            alt="Location Map View"
            className="w-full h-full object-cover"
          />
        </div>

        <button className="mt-4 bg-white text-primary px-6 py-2.5 rounded-md text-sm font-medium shadow hover:bg-slate-100 transition">
          View Detailed Location Map
        </button>
      </div>

    </div>
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

    </>
  );
};

export default GoldenHeightsShad;
