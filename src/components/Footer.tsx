import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";

const Footer = () => {
  const [year, setYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());

    // Orb follow effect
    const orb = document.querySelector<HTMLDivElement>(".orb");
    const handleMouseMove = (e: MouseEvent) => {
      if (orb) {
        orb.style.left = `${e.clientX}px`;
        orb.style.top = `${e.clientY}px`;
      }
    };
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <footer className="relative bg-gradient-to-br from-[#080116] to-[#0C0C0C] text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#6A5FFE] rounded-full filter blur-3xl animate-float1"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-[#6A5FFE] rounded-full filter blur-3xl animate-float2"></div>
        <div className="absolute bottom-10 left-1/2 w-48 h-48 bg-[#6A5FFE] rounded-full filter blur-3xl animate-float3"></div>
      </div>

      {/* Main footer content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Logo/Name section */}
          <div className="group">
            <div className="flex items-center space-x-2 mb-6">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-[#6A5FFE]">
                Keyframevisuals.com
              </h2>
            </div>
            <p className="text-gray-300 mb-6">
              Ready to scale your brand with clear, high-quality visuals?
            </p>

            {/* <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#6A5FFE] hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
              >
             
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
             
            </div> */}
          </div>

          {/* Quick Links */}
          <div className="group">
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              <span className="relative z-10">Quick Links</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#6A5FFE] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </h3>
            <ul className="space-y-3">
              {["portfolio", "Clients", "Services"].map((item, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 flex items-center"
                  >
                    <span className="w-1 h-1 bg-[#6A5FFE] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center animate-pulse">
                    <svg
                      className="w-4 h-4 text-[#6A5FFE]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-gray-300">Email</p>
                  <a
                    href="mailto:director.keyframe@gmail.com"
                    target="_blank"
                    className="text-white hover:text-[#6A5FFE] transition"
                  >
                    director.keyframe@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center animate-pulse">
                    <FaFacebookF className="w-3.5 h-3.5 text-[#6A5FFE]" />
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-gray-300">Facebook</p>
                  <a
                    href="https://www.facebook.com/keyframe.ae"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#6A5FFE] transition"
                  >
                    Visit Page
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div
                    className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center animate-pulse"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <FaWhatsapp className="w-4 h-4 text-[#6A5FFE]" />
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-gray-300">WhatsApp</p>
                  <a
                    href="https://wa.me/8801908020345"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#6A5FFE] transition"
                  >
                    +8801908-020345
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center animate-pulse">
                    <FaXTwitter className="w-4 h-4 text-[#6A5FFE]" />
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-gray-300">X (Twitter)</p>
                  <a
                    href="https://x.com/sakib_ahmed1708"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#6A5FFE] transition"
                  >
                    Follow Us
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center animate-pulse">
                    <FaLinkedinIn className="w-4 h-4 text-[#6A5FFE]" />
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-gray-300">LinkedIn</p>
                  <a
                    href="https://linkedin.com/company/keyframe-ae"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#6A5FFE] transition"
                  >
                    Connect
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Book a meeting</h3>
            <p className="text-gray-300 mb-4">
              Have a project in mind? Email us.
            </p>
            <form className="mt-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#6A5FFE] focus:border-transparent placeholder-gray-500 text-white"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#6A5FFE] hover:bg-[#5B23FF] text-white rounded-lg px-4 py-1 transition"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; <span className="text-[#6A5FFE]">{year}</span> keyframe. All
            rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              Cookies
            </a>
          </div>
        </div>
      </div>

      {/* Floating orb */}
      <div className="orb absolute w-64 h-64 rounded-full bg-[#6A5FFE]/10 filter blur-3xl pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
