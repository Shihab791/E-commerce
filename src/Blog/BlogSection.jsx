import React from "react";
import vlog1 from "../assets/vlog1.jpeg";
import vlog2 from "../assets/vlog2.jpeg";
import vlog3 from "../assets/vlog3.jpeg";
import vlog4 from "../assets/vlog4.jpeg";
import vlog5 from "../assets/vlog5.jpeg";
import vlog6 from "../assets/vlog6.jpeg";
import vlog7 from "../assets/vlog7.jpeg";
import design from "../assets/design.png";
import Sofa from "../assets/sofa.jpeg";

const posts = [
  { id: 1, img: vlog1, title: "First Time Home Owner Ideas", author: "Kristin", date: "Dec 19, 2021" },
  { id: 2, img: vlog2, title: "First Time Home Owner Ideas", author: "Maruf", date: "Dec 19, 2021" },
  { id: 3, img: vlog3, title: "First Time Home Owner Ideas", author: "Nishi", date: "Dec 19, 2021" },
  { id: 4, img: vlog4, title: "First Time Home Owner Ideas", author: "Shihab", date: "Dec 19, 2021" },
  { id: 5, img: vlog5, title: "First Time Home Owner Ideas", author: "Mehedi", date: "Dec 19, 2021" },
  { id: 6, img: vlog6, title: "First Time Home Owner Ideas", author: "Mostafiz", date: "Dec 19, 2021" },
  { id: 7, img: vlog7, title: "First Time Home Owner Ideas", author: "Era", date: "Dec 19, 2021" },
  { id: 8, img: design, title: "First Time Home Owner Ideas", author: "Noman", date: "Dec 19, 2021" },
  { id: 9, img: Sofa, title: "First Time Home Owner Ideas", author: "Faria", date: "Dec 19, 2021" },
];

export default function RecentBlogSection() {
  return (
    <section className="w-full bg-[#F3F5F4] py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((p) => (
            <article key={p.id} className="group">
              {/* image */}
              <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
                <img
                  src={p.img}
                  alt={p.title}
                  className="
                    h-[210px] w-full object-cover
                    transition-transform duration-300
                    group-hover:scale-[1.03]
                  "
                  draggable="false"
                />
              </div>

              {/* content */}
              <div className="mt-4 px-1">
                <h3 className="text-[14px] font-semibold text-[#2b2b2b]">
                  {p.title}
                </h3>

                <p className="mt-1 text-[12px] text-[#8a8a8a]">
                  By <span className="font-medium text-[#2b2b2b]">{p.author}</span>{" "}
                  on <span className="font-medium text-[#2b2b2b]">{p.date}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
