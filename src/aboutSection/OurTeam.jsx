import React from "react";

// ✅ replace with your real images (unchanged)
import maruf from "../assets/maruf.jpeg";
import nishi from "../assets/nishi.jpeg";
import mehedi from "../assets/mehedi.jpeg";
import era from "../assets/era.jpg";
import shihab from "../assets/shihab.jpeg";
import mostafiz from "../assets/mostafiz.jpeg";
import noman from "../assets/noman.jpeg";
import faria from "../assets/faria.jpeg";

const team = [
  {
    id: 1,
    name: "Jubaer Alam Maruf",
    role: "CEO / Founder",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: maruf,
  },
  {
    id: 2,
    name: "Nijhum Nishi",
    role: "Co-Founder",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: nishi,
  },
  {
    id: 3,
    name: "Mehedi Hassan Sarker",
    role: "Marketing",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: mehedi,
  },
  {
    id: 4,
    name: "Afsana Yeemin Era",
    role: "UI/UX Designer",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: era,
  },
  {
    id: 5,
    name: "Md Enzamul Haque Shihab",
    role: "Product Designer",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: shihab,
  },
  {
    id: 6,
    name: "Mostafizur Rahman",
    role: "Frontend Developer",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: mostafiz,
  },
  {
    id: 7,
    name: "noman Bhuiyan",
    role: "Backend Developer",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: noman,
  },
  {
    id: 8,
    name: "Farha Alam Moumi",
    role: "Support Engineer",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: faria,
  },
];

export default function OurTeam() {
  return (
    <section className="w-full bg-[#F3F5F4] py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <p className="text-center text-3xl md:text-4xl font-extrabold text-[#2C2C2C]">
          Our Team
        </p>

        {/* ✅ BIG layout like 2nd picture */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-28">
          {team.map((m) => (
            <div key={m.id} className="max-w-[360px]">
              {/* ✅ BIG image */}
              <div className="w-full h-[320px] overflow-hidden bg-white shadow-sm">
                <img
                  src={m.img}
                  alt={m.name}
                  className="h-full w-full object-cover"
                  draggable="false"
                />
              </div>

              {/* ✅ BIG text */}
              <div className="mt-6">
                <h3 className="text-2xl font-semibold text-[#2C2C2C] underline underline-offset-8">
                  {m.name}
                </h3>

                <p className="mt-2 text-sm font-medium text-[#6f6f6f]">
                  {m.role}
                </p>

                <p className="mt-4 text-[15px] leading-7 text-[#8a8a8a]">
                  {m.desc}
                </p>

                <a
                  href="#"
                  className="mt-4 inline-block text-sm font-medium text-[#2C2C2C] underline underline-offset-4 hover:opacity-80 transition"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
