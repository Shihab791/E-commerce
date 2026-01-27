import React from "react";
import design from "../assets/design.png"; // put image in src/assets/why.png

const Feature = ({ icon, title, desc }) => (
  <div className="flex flex-col gap-4">
    <div className="h-10 w-10 text-[#2b2b2b]">{icon}</div>

    <div>
      <h4 className="font-semibold text-[#2b2b2b]">{title}</h4>
      <p className="mt-2 text-sm leading-6 text-[#8a8a8a] max-w-[240px]">
        {desc}
      </p>
    </div>
  </div>
);

export default function Chose() {
  return (
    <section className="w-full bg-[#F3F5F4]">
      <div className="mx-auto max-w-7xl px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* LEFT */}
          <div>
            <h2 className="text-4xl md:text-[44px] font-semibold text-[#2b2b2b]">
              Why Chose US
            </h2>

            <p className="mt-4 text-[15px] leading-6 text-[#8a8a8a] max-w-xl">
              We deliver high-quality products crafted with premium materials.
              Our focus on design, durability, and customer satisfaction sets us
              apart.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-12">
              <Feature
                title="Fast & Free Shipping"
                desc="Get your products delivered quickly and free of charge no hidden fees, no delays"
                icon={
                  <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
                    <path
                      d="M3 7h11v10H3V7Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14 10h4l3 3v4h-7v-7Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M18 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                  </svg>
                }
              />

              <Feature
                title="Easy To Shop"
                desc="A seamless shopping experience designed to save you time and effort."
                icon={
                  <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
                    <path
                      d="M7 7h12v12H7V7Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 9V5h4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M9 5H5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M11 11h4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M11 14h6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                }
              />

              <Feature
                title="24/7 Support"
                desc="Round-the-clock assistance to ensure a smooth and worry-free experience."
                icon={
                  <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
                    <path
                      d="M12 21a9 9 0 1 0-9-9 9 9 0 0 0 9 9Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M8.5 12a3.5 3.5 0 1 1 6.2 2.2"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12 17h.01"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                    />
                  </svg>
                }
              />

              <Feature
                title="Hassle Free Return"
                desc="Return your product easily—no complications, no worries."
                icon={
                  <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
                    <path
                      d="M7 7h10a4 4 0 0 1 0 8H9"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M10 11 7 14l3 3"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17 17H7a4 4 0 0 1 0-8h1"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                }
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center lg:justify-end">
            {/* 🔥 dotted pattern OUTSIDE card (behind card) */}
            <div className="absolute -top-6 -left-6 z-0">
              <div className="grid grid-cols-9 gap-4">
                {Array.from({ length: 45 }).map((_, i) => (
                  <span key={i} className="h-2 w-2 rounded-full bg-[#F4B000]" />
                ))}
              </div>
            </div>

            {/* image card */}
            <div className="relative z-10 w-full max-w-[520px] rounded-[28px] overflow-hidden bg-[#e9eceb]">
              <img
                src={design}
                alt="Why choose us"
                className="w-full h-[520px] object-cover"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
