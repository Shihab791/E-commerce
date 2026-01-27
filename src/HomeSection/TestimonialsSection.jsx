import React, { useEffect, useMemo, useState } from "react";
import testMen from "../assets/testMen.jpeg";
import testWomen from "../assets/testWomen.jpeg";
import testMen1 from "../assets/testMen1.jpeg";

const testimonialItems = [
  {
    id: 1,
    text:
      "“I absolutely love my ergonomic chair! Before getting it, I used to end every workday with back and neck pain. Since I started using this chair, my posture has improved, and I can comfortably work for hours without fatigue.”",
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

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonialItems.length);
    }, 3000); // ✅ 4 seconds

    return () => clearInterval(interval);
  }, []);

  const current = useMemo(() => testimonialItems[active], [active]);

  return (
    <section className="w-full bg-[#F3F5F4]">
      <div className="mx-auto max-w-7xl px-6 md:px-12 py-16">
        <div className="h-28" />

        <div className="text-center">
          <h2 className="text-[46px] font-semibold text-[#2b2b2b]">
            Testimonials
          </h2>

          <p className="mt-10 mx-auto max-w-[980px] text-[16px] leading-7 text-[#7b7b7b] transition-opacity duration-500">
            {current.text}
          </p>

          <div className="mt-12 flex flex-col items-center">
            <div className="h-20 w-20 rounded-full overflow-hidden bg-[#E9ECEB]">
              <img
                src={current.avatar}
                alt={current.name}
                className="h-full w-full object-cover"
                draggable="false"
              />
            </div>

            <p className="mt-4 text-lg font-semibold">{current.name}</p>
            <p className="text-sm uppercase text-[#8a8a8a]">{current.role}</p>

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
    </section>
  );
}
