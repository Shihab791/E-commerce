import React from "react";

import sofa from "../assets/sofa.jpeg";
import tableLamp from "../assets/tableLamp.jpeg";
import tool from "../assets/tool.png";

const Bullet = ({ children }) => (
  <div className="flex gap-3">
    <span className="mt-2 h-2 w-2 rounded-full border-2 border-[#2E6E55]" />
    <p className="text-[15px] leading-6 text-[#7f7f7f] max-w-[260px]">
      {children}
    </p>
  </div>
);

export default function ModernDesignSection() {
  // ✅ easy tuning controls (change only these values)
  const POS = {
    dots: { top: -48, left: -80 },
    sofa: { width: 560, height: 540, ml: -64 },

    // ✅ tableLamp একটু উপরে উঠানো হয়েছে (56 -> 32)
    lamp: { top: 32, right: -60, width: 280, height: 160 },

    tool: { top: 210, left: 340, width: 440, height: 440 },
  };

  return (
    <section className="w-full bg-[#F3F5F4] overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start">
          {/* ================= LEFT COLLAGE ================= */}
          <div className="relative overflow-visible">
            {/* DOTS */}
            <div
              className="absolute hidden lg:block"
              style={{ top: POS.dots.top, left: POS.dots.left }}
            >
              <div className="grid grid-cols-9 gap-4">
                {Array.from({ length: 54 }).map((_, i) => (
                  <span key={i} className="h-2 w-2 rounded-full bg-[#2E6E55]" />
                ))}
              </div>
            </div>

            {/* SOFA */}
            <div
              className="relative z-10 rounded-[32px] overflow-hidden bg-[#e9eceb]"
              style={{
                width: POS.sofa.width,
                marginLeft: POS.sofa.ml,
              }}
            >
              <img
                src={sofa}
                alt="Interior"
                className="w-full object-cover"
                style={{ height: POS.sofa.height }}
                draggable="false"
              />
            </div>

            {/* TABLE LAMP */}
            <div
              className="absolute z-30 rounded-[22px] overflow-hidden bg-[#e9eceb] shadow-sm"
              style={{
                top: POS.lamp.top,
                right: POS.lamp.right,
                width: POS.lamp.width,
              }}
            >
              <img
                src={tableLamp}
                alt="Interior detail"
                className="w-full object-cover"
                style={{ height: POS.lamp.height }}
                draggable="false"
              />
            </div>

            {/* TOOL (stool) */}
            <div
              className="absolute z-30 rounded-[32px] overflow-hidden bg-[#cfe2ef] shadow-lg"
              style={{
                top: POS.tool.top,
                left: POS.tool.left,
                width: POS.tool.width,
              }}
            >
              <img
                src={tool}
                alt="Stool"
                className="w-full object-cover"
                style={{ height: POS.tool.height }}
                draggable="false"
              />
            </div>

            {/* spacer for overlap */}
            <div className="h-[260px]" />
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="lg:pl-32 lg:pt-10">
            <h2 className="text-[46px] font-semibold leading-[1.1] text-[#2b2b2b]">
              We Help You Make <br />
              Modern Interior <br />
              Design
            </h2>

            <p className="mt-6 text-[15px] leading-6 text-[#8a8a8a] max-w-[520px]">
              Elegant interior designs made for modern lifestyles.
              <br />
              Where comfort meets creativity and quality.
              <br />
              Designed to elevate every space.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-x-12 gap-y-6">
              <Bullet>Designing modern interiors that fit your lifestyle.</Bullet>
              <Bullet>Smart, stylish, and functional interiors made easy.</Bullet>
              <Bullet>Designing modern interiors that fit your lifestyle.</Bullet>
              <Bullet>Smart, stylish, and functional interiors made easy.</Bullet>
            </div>

            <button className="mt-12 rounded-full bg-[#2C2C2C] text-white px-12 py-3 hover:bg-black">
              Explore
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
