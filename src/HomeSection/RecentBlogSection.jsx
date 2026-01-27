import React from "react";

// ✅ change these image paths as your project
import vlog1 from "../assets/vlog1.jpeg";
import vlog2 from "../assets/vlog2.jpeg";
import vlog3 from "../assets/vlog3.jpeg";
import bigChair from "../assets/bigChair.png"; // big chair (right-bottom)

const posts = [
  {
    id: 1,
    img: vlog1,
    title: "First Time Home Owner Ideas",
    author: "Taric Raza",
    date: "oct25,2026",
  },
  {
    id: 2,
    img: vlog2,
    title: "First Time Home Owner Ideas",
    author: "Maruf hasan",
    date: "oct25,2026",
  },
  {
    id: 3,
    img: vlog3,
    title: "First Time Home Owner Ideas",
    author: "Hasan",
    date: "oct25,2026",
  },
];

export default function RecentBlogSection() {
  const CHAIR = {
     right: "260px",    
  bottom: "-60px",  
  width: "620px",
  };

  return (
    <section className="w-full bg-[#F3F5F4] relative">
      {/* ✅ enough height so chair can sit without going too far down */}
      <div className="mx-auto max-w-7xl px-6 md:px-12 pt-14 pb-[520px] relative z-10">
        {/* header */}
        <div className="flex items-start justify-between">
          <h2 className="text-[44px] md:text-[52px] font-semibold text-[#2b2b2b]">
            Recent Blog
          </h2>

          <a
            href="#"
            className="mt-4 text-[14px] text-[#2b2b2b] underline underline-offset-4"
          >
            View All posts
          </a>
        </div>

        {/* cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          {posts.map((p) => (
            <div key={p.id} className="relative">
              <div className="w-full h-[240px] rounded-[28px] overflow-hidden bg-[#E9ECEB]">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover"
                  draggable="false"
                />
              </div>

              <h4 className="mt-6 text-[18px] font-semibold text-[#2b2b2b]">
                {p.title}
              </h4>

              <p className="mt-1 text-[15px] text-[#7b7b7b]">
                By <span className="text-[#2b2b2b]">{p.author}</span> on{" "}
                <span className="text-[#2b2b2b]">{p.date}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* BIG CHAIR (decor) */}
      <img
        src={bigChair}
        alt="Decor chair"
        className="pointer-events-none select-none absolute hidden md:block z-0"
        style={{
  right: "260px",
      bottom: "-60px",
      width: "620px",
}}
        draggable="false"
      />
    </section>
  );
}
