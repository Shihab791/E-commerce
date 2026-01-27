import React from "react";

import chair1 from "../assets/chair1.jpeg";
import chair2 from "../assets/chair2.jpeg";
import chair3 from "../assets/chair3.jpeg";

const products = [
  { id: 1, title: "Nordic Chair", price: "$50.00", img: chair1 },
  { id: 2, title: "Kruzo Chair", price: "$60.00", img: chair2 },
  { id: 3, title: "Ergonomic Chair", price: "$30.00", img: chair3 },
];

export default function CraftedSection() {
  return (
    <section className="w-full bg-[#F3F5F4]">
      <div className="mx-auto max-w-7xl px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-14 items-start">
          {/* LEFT TEXT */}
          <div>
            <h2 className="text-4xl md:text-[44px] font-semibold leading-[1.1] text-[#2b2b2b]">
              Craftedwith <br />
              excellet <br />
              material
            </h2>

            <p className="mt-6 text-[15px] leading-6 text-[#7a7a7a] max-w-xs">
              designed for durability, <br />
              comfort, and style. <br />
              Built to deliver quality you <br />
              can trust every day.
            </p>

            <button className="btn mt-8 rounded-full bg-[#2C2C2C] text-white border-0 px-10 hover:bg-black">
              Explore
            </button>
          </div>

          {/* PRODUCTS */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
              {products.map((p) => (
                <div
                  key={p.id}
                  className="group relative text-center transition-all duration-300 ease-out hover:-translate-y-3"
                >
                  {/* IMAGE */}
                  <div className="mx-auto w-full max-w-[270px]">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full object-contain select-none"
                      draggable="false"
                    />
                  </div>

                  {/* TEXT (always visible) */}
                  <div className="mt-6 min-h-[120px] flex flex-col items-center justify-start gap-1">
                    <p className="text-lg font-medium text-[#2b2b2b]">
                      {p.title}
                    </p>
                    <p className="text-2xl font-semibold text-[#2b2b2b]">
                      {p.price}
                    </p>
                  </div>

                  {/* ✅ HOVER BOX (hidden আগে, hover এ show হবে) */}
                  <div
                    className="
                      absolute left-1/2 top-[62%] -translate-x-1/2
                      w-[300px] rounded-3xl bg-[#D7DDDB]
                      px-6 py-10
                      opacity-0 scale-[0.98]
                      transition-all duration-300
                      group-hover:opacity-100 group-hover:scale-100
                      pointer-events-none
                    "
                  >
                    <p className="text-lg font-medium text-[#2b2b2b]">
                      {p.title}
                    </p>
                    <p className="text-2xl font-semibold text-[#2b2b2b]">
                      {p.price}
                    </p>
                  </div>

                  {/* ✅ PLUS BUTTON (hover এ show হবে) */}
                  <button
                    className="
                      btn btn-circle border-0 bg-[#2C2C2C] hover:bg-black
                      absolute left-1/2 top-[calc(62%+150px)] -translate-x-1/2
                      opacity-0 scale-90 transition-all duration-300
                      group-hover:opacity-100 group-hover:scale-100
                      pointer-events-auto
                    "
                    aria-label="Add to cart"
                  >
                    <span className="text-white text-2xl leading-none">+</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
          {/* END */}
        </div>
      </div>
    </section>
  );
}
