import React, { useEffect, useMemo, useState } from "react";
import testMen from "../assets/testMen.jpeg";
import testWomen from "../assets/testWomen.jpeg";
import testMen1 from "../assets/testMen1.jpeg";
import bigChair from "../assets/bigChair.png"; 


const testimonialItems = [
  {
    id: 1,
    text:
      "“I absolutely love my ergonomic chair! Before getting it, I used to end every workday with back and neck pain. Since I started using this chair, my posture has improved, and I can comfortably work for hours without fatigue. The adjustable features make it fit my body perfectly, and the breathable mesh keeps me cool all day. It’s truly made a difference in my productivity and comfort — I highly recommend it!”",
    name: "Nishi",
    role: "CEO, CO-Founder, BUBT",
    avatar: testWomen,
  },
  {
    id: 2,
    text:
      "“Super comfortable and premium looking. The chair supports my back perfectly and I can sit long hours without pain.”",
    name: "Rahim",
    role: "Product Manager",
    avatar: testMen,
  },
  {
    id: 3,
    text:
      "“Very stylish and solid. Matches my room perfectly. The breathable back is a game-changer.”",
    name: "Sadia",
    role: "Entrepreneur",
    avatar: testMen1,
  },
];

export default function LastPart() {
     const CHAIR = {
     right: "260px",    // 🔥 আরও left এ যাবে
  bottom: "-60px",  // 🔥 এবার নিশ্চিতভাবে নিচে নামবে
  width: "620px",
  };
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonialItems.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const current = useMemo(() => testimonialItems[active], [active]);
  

  return (
    <section className="relative w-full bg-[#F3F5F4] pb-[300px]">
      <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 relative z-10">
        <div className="h-10 md:h-16" />

        <div className="text-center">
          <h2 className="text-[46px] font-semibold text-[#2b2b2b]">
            Testimonials
          </h2>

          <p className="mt-8 mx-auto max-w-[980px] text-[15px] md:text-[16px] leading-7 text-[#7b7b7b]">
            {current.text}
          </p>

          <div className="mt-10 flex flex-col items-center">
            <div className="h-20 w-20 rounded-2xl overflow-hidden bg-[#E9ECEB]">
              <img
                src={current.avatar}
                alt={current.name}
                className="h-full w-full object-cover"
                draggable="false"
              />
            </div>

            <p className="mt-4 text-lg font-semibold text-[#2b2b2b]">
              {current.name}
            </p>
            <p className="text-sm uppercase tracking-wide text-[#8a8a8a]">
              {current.role}
            </p>

            {/* DOTS */}
            <div className="mt-8 flex gap-3">
              {testimonialItems.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-3 w-3 rounded-full transition ${
                    i === active ? "bg-[#2E6E55]" : "bg-[#D3D7D5]"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <img
              src={bigChair}
              alt="Decor chair"
              className="pointer-events-none select-none absolute hidden md:block z-0"
              style={{
        right: "260px",
            bottom: "-200px",
            width: "620px",
      }}
        draggable="false"
      />
    </section>
  );
}
