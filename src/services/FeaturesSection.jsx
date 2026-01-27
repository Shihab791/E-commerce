import React from "react";

const features = [
  {
    title: "Fast & Free Shipping",
    desc:
      "Get your products delivered quickly and free of charge no hidden fees, no delays",
    icon: TruckIcon,
  },
  {
    title: "Easy To Shop",
    desc:
      "A seamless shopping experience designed to save you time and effort.",
    icon: BagIcon,
  },
  {
    title: "Hassle Free Return",
    desc: "Return your product easily—no complications, no worries.",
    icon: ReturnIcon,
  },
  {
    title: "24/7 Support",
    desc:
      "Round-the-clock assistance to ensure a smooth and worry-free experience.",
    icon: SupportIcon,
  },
];

export default function FeaturesSection() {
  return (
    <section className="w-full bg-[#F3F5F4] py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* ✅ 2 rows (8 items) like your screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-24 gap-y-20">
          {[...features, ...features].map((f, idx) => {
            const Icon = f.icon;
            return (
              <div key={idx} className="max-w-[240px]">
                <Icon className="h-10 w-10 text-[#2C2C2C]" />
                <h4 className="mt-6 text-[15px] font-medium text-[#2C2C2C]">
                  {f.title}
                </h4>
                <p className="mt-3 text-[14px] leading-6 text-[#8a8a8a]">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ================= ICONS (Inline SVG) ================= */

function TruckIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M3 6h11v10H3V6Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 10h4l3 3v3h-7v-6Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 18.5a1.5 1.5 0 1 0 0 .01"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M18 18.5a1.5 1.5 0 1 0 0 .01"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BagIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M7 8h10l-1 13H8L7 8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 8a3 3 0 0 1 6 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ReturnIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M7 7h10a4 4 0 0 1 4 4v1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M7 7 4 10m3-3 3 3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 17H7a4 4 0 0 1-4-4v-1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M17 17 20 14m-3 3-3-3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SupportIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3a7 7 0 0 0-7 7v4a2 2 0 0 0 2 2h1v-6H7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 3a7 7 0 0 1 7 7v4a2 2 0 0 1-2 2h-1v-6h2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 20.5c.8.3 1.6.5 2.5.5s1.7-.2 2.5-.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
