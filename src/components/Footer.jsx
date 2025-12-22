import {
  FaBuilding,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-100 border-t">
      {/* TOP FOOTER */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <FaBuilding className="text-primary text-xl" />
              <h4 className="font-bold text-lg text-slate-900">
                Real Estate Project
              </h4>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Premium real estate solutions for your dream home and investment
              needs.
            </p>

            <div className="flex gap-4 text-slate-500">
              <FaFacebookF className="hover:text-primary cursor-pointer" />
              <FaTwitter className="hover:text-primary cursor-pointer" />
              <FaInstagram className="hover:text-primary cursor-pointer" />
              <FaLinkedinIn className="hover:text-primary cursor-pointer" />
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-bold text-slate-900 mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              {[
                "Home",
                "Project",
                "Amenities",
                "Gallery",
                "Location",
                "Contact",
              ].map((item) => (
                <li key={item} className="hover:text-primary cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-bold text-slate-900 mb-5">Contact Us</h4>

            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex gap-3">
                <FaMapMarkerAlt className="text-primary mt-1" />
                <span>
                  123 Real Estate Avenue, Hyderabad,
                  <br />
                  Telangana 500032, India
                </span>
              </li>

              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-primary" />
                <span>+91 98765 43210</span>
              </li>

              <li className="flex items-center gap-3">
                <FaWhatsapp className="text-primary" />
                <span>+91 98765 43210</span>
              </li>

              <li className="flex items-center gap-3">
                <FaEnvelope className="text-primary" />
                <span>info@realestate-project.com</span>
              </li>

              <li className="flex items-center gap-3">
                <FaClock className="text-primary" />
                <span>Mon-Sat: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h4 className="font-bold text-slate-900 mb-5">
              Subscribe to Newsletter
            </h4>

            <p className="text-sm text-slate-600 mb-4">
              Stay updated with our latest projects and offers.
            </p>

            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full px-4 py-2 border rounded-md mb-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <button className="w-full bg-primary hover:bg-primaryDark text-white py-2 rounded-md font-medium transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          
          <div className="text-center md:text-left space-y-1">
            <p>
              RERA Reg. No: TSRERA/PRJ/123456/2023 | GST No: 36AABCT1234Z1ZA
            </p>
            <p>© 2023 Real Estate Project. All rights reserved.</p>
          </div>

          <div className="flex gap-6">
            <span className="hover:text-primary cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-primary cursor-pointer">
              Terms & Conditions
            </span>
            <span className="hover:text-primary cursor-pointer">
              Disclaimer
            </span>
            <span className="hover:text-primary cursor-pointer">
              Sitemap
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
