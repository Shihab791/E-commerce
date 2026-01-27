import React from "react";

// ✅ use your existing images (same as CraftedSection)
import chair1 from "../assets/chair1.jpeg";
import chair2 from "../assets/chair2.jpeg";
import chair3 from "../assets/chair3.jpeg";
import bigChair from "../assets/bigChair.png";

const products = [
  { id: 1, title: "Kruzo Chair", price: "$60.00", img: chair2 },
  { id: 2, title: "Nordic Chair", price: "$50.00", img: chair1 },
  { id: 3, title: "Kruzo Chair", price: "$60.00", img: chair2 },
  { id: 4, title: "Ergonomic Chair", price: "$30.00", img: chair3 },
  { id: 5, title: "Ergonomic Chair", price: "$30.00", img: chair3 },
  { id: 6, title: "Nordic Chair", price: "$50.00", img: chair1 },
  { id: 7, title: "Kruzo Chair", price: "$60.00", img: chair2 },
  { id: 8, title: "Ergonomic Chair", price: "$30.00", img: chair3 },
];

export default function Shop() {
  return (
    <div className="w-full">
      {/* ✅ top gradient header (Navbar already in MainLayout) */}
      <section
        className="
          h-[45vh] min-h-[420px]
          bg-gradient-to-b
          from-[#0FB07A] via-[#0B7E63] to-[#053A34]
          flex items-center
        "
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12 w-full">
          <h1 className="text-white text-5xl md:text-6xl ">
            Shop
          </h1>
        </div>
      </section>

      {/* ✅ products area */}
      {/* overflow-hidden দিও না—না হলে chair নিচে নামলে কেটে যাবে */}
      <section className="relative w-full bg-[#F3F5F4] pb-80">
        <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-16">
            {products.map((p) => (
              <div key={p.id} className="group relative text-center">
                {/* ✅ hover grey rounded card (ভিডিওর মতো) */}
                <div
                  className="
                    pointer-events-none
                    absolute left-1/2 top-[62%]
                    -translate-x-1/2
                    w-[220px] md:w-[260px]
                    h-[150px]
                    rounded-3xl
                    bg-[#D7DDDB]
                    opacity-0
                    scale-95
                    transition-all duration-300
                    group-hover:opacity-100 group-hover:scale-100
                  "
                />

                {/* IMAGE */}
                <div className="relative z-10 mx-auto w-full max-w-[180px] md:max-w-[220px]">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full object-contain select-none"
                    draggable="false"
                  />
                </div>

                {/* TEXT */}
                <div className="relative z-10 mt-6">
                  <p className="text-[13px] md:text-[14px] font-medium text-[#2b2b2b]">
                    {p.title}
                  </p>
                  <p className="text-[12px] md:text-[13px] text-[#6f6f6f]">
                    {p.price}
                  </p>
                </div>

                {/* ✅ plus button (only hover) */}
                <button
                  className="
                    btn btn-circle border-0 bg-[#2C2C2C] hover:bg-black
                    absolute left-1/2 top-[78%]
                    -translate-x-1/2
                    opacity-0 scale-90
                    transition-all duration-300
                    group-hover:opacity-100 group-hover:scale-100
                    z-20
                  "
                  aria-label="Add to cart"
                >
                  <span className="text-white text-2xl leading-none">+</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ✅ big chair decor (slightly left + more down like your 2nd pic) */}
        <img
          src={bigChair}
          alt="Featured Chair"
          className="
    absolute
    left-[45%]        /* 👈 halka left */
    bottom-[-150px]   /* 👈 niche নামানো */
    w-[420px]
    md:w-[520px]
    lg:w-[600px]
    drop-shadow-2xl
    pointer-events-none
    select-none
    
  "
        />
      </section>
    </div>
  );
}
