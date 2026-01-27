import React from "react";

// ✅ sofa image import (তোমার assets এ file name/extension match করো)
import homeSofa from "../assets/homeSofa.png";

export default function AboutUs() {
  return (
    <section
      className="
        relative w-full
        h-[70vh] min-h-[560px]
        bg-gradient-to-b
        from-[#0FB07A] via-[#0B7E63] to-[#053A34]
        overflow-hidden
      "
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-full">
        <div className="grid h-full items-center gap-10 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="max-w-[560px] lg:pr-6">
            <h1 className="text-white font-extrabold leading-[1.05] text-4xl sm:text-5xl md:text-6xl">
              About Us
            </h1>

            <p className="mt-6 text-white/70 text-sm sm:text-base leading-relaxed">
              We design spaces that reflect your lifestyle and personality.
              <br className="hidden sm:block" />
              From modern homes to luxury interiors, we bring your vision to life.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <button
                className="
                  rounded-full border-0
                  bg-amber-400 text-black font-semibold
                  px-10 py-3
                  hover:bg-amber-300 transition
                "
              >
                Shop Now
              </button>

              <button
                className="
                  rounded-full
                  border border-white/60
                  text-white font-semibold
                  px-10 py-3
                  hover:bg-white/10 transition
                "
              >
                Explore
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-full flex items-center justify-center">
            {/* dotted decor (top-right) */}
            <div className="absolute right-6 top-24 hidden md:block">
              <div className="grid grid-cols-10 gap-4 opacity-25">
                {Array.from({ length: 60 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-2 w-2 rounded-full bg-white/60"
                  />
                ))}
              </div>
            </div>

            <img
              src={homeSofa}
              alt="Sofa"
              className="
                w-full max-w-[640px]
                object-contain
                drop-shadow-2xl
                select-none pointer-events-none
                translate-y-6
              "
              draggable="false"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
