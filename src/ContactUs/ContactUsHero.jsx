import React from "react";
import { Link, useLocation } from "react-router-dom";
import homeSofa from "../assets/homeSofa.png";
/* ✅ ONE NavLink only (router-based) */
const NavLink = ({ to, children }) => {
  const { pathname } = useLocation();
  const active = pathname === to;

  return (
    <Link
      to={to}
      className={`px-3 py-2 text-sm md:text-base font-medium transition ${
        active ? "text-white" : "text-white/70 hover:text-white"
      }`}
    >
      <span className="relative inline-block">
        {children}
        {active && (
          <span className="absolute left-0 -bottom-2 h-[3px] w-full rounded-full bg-amber-400" />
        )}
      </span>
    </Link>
  );
};

export default function ContactUs() {
  return (
    <section
      className="
        relative w-full
        h-[70vh] min-h-[560px]
        overflow-hidden
        bg-gradient-to-b
        from-[#0FB07A] via-[#0B7E63] to-[#053A34]
      "
    >

      {/* ================= HERO CONTENT ================= */}
      <div className="mx-auto max-w-7xl px-4 md:px-10 h-[calc(70vh-88px)] min-h-[472px] flex items-center">
        <div className="grid w-full items-center lg:grid-cols-2 lg:gap-16">
          {/* LEFT TEXT */}
          <div className="max-w-[560px] lg:pr-6">
            <h1 className="text-white font-extrabold leading-[1.05] text-4xl sm:text-5xl md:text-6xl">
              Contact Us
            </h1>

            <p className="mt-6 text-white/70 text-sm sm:text-base leading-relaxed">
              We design spaces that reflect your lifestyle and personality.
              <br className="hidden sm:block" />
              From modern homes to luxury interiors, we bring your vision to life.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <button className="btn rounded-full border-0 bg-amber-400 px-10 text-black hover:bg-amber-300">
                Shop Now
              </button>

              <button className="btn btn-outline rounded-full border-white/50 text-white hover:bg-white/10 px-10">
                Explore
              </button>
            </div>
          </div>

          {/* RIGHT SOFA */}
          <div className="relative hidden lg:block">
            {/* dots */}
            <div className="absolute right-16 top-10">
              <div className="grid grid-cols-10 gap-3 opacity-25">
                {Array.from({ length: 50 }).map((_, i) => (
                  <span key={i} className="h-2 w-2 rounded-full bg-white/60" />
                ))}
              </div>
            </div>

            <img
              src={homeSofa}
              alt="Sofa"
              className="
                ml-auto
                w-full
                max-w-[720px]
                xl:max-w-[820px]
                drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]
                select-none
              "
              draggable="false"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
