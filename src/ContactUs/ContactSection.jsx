import React, { useState } from "react";
import bigChair from "../assets/bigChair.png";
const CHAIR = {
  right: "260px",
  bottom: "-60px",
  width: "620px",
};

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const onChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form:", form);
    alert("Message sent (demo) ✅");
    setForm({ firstName: "", lastName: "", email: "", message: "" });
  };

  return (
    // ✅ relative + overflow-hidden (chair outside but looks clean)
    <section className="relative w-full bg-[#F3F5F4] py-16 pb-[300px] ">
      <div className="mx-auto max-w-6xl px-6 md:px-10 relative z-10">
        {/* TOP CONTACT INFO */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          <InfoItem icon={<PinIcon />} text="Dhaka,Bangladesh" />
          <InfoItem icon={<PhoneIcon />} text="+8801912663538" />
          <InfoItem icon={<MailIcon />} text="info@mail.com" />
        </div>

        {/* FORM */}
        <form onSubmit={onSubmit} className="mt-14 max-w-[780px]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Field label="First Name">
              <input
                name="firstName"
                value={form.firstName}
                onChange={onChange}
                className="w-full rounded-xl border border-[#C9CFCD] bg-white px-4 py-3 outline-none focus:border-[#2E6E55]"
                type="text"
              />
            </Field>

            <Field label="Last Name">
              <input
                name="lastName"
                value={form.lastName}
                onChange={onChange}
                className="w-full rounded-xl border border-[#C9CFCD] bg-white px-4 py-3 outline-none focus:border-[#2E6E55]"
                type="text"
              />
            </Field>
          </div>

          <div className="mt-6">
            <Field label="Email Address">
              <input
                name="email"
                value={form.email}
                onChange={onChange}
                className="w-full rounded-xl border border-[#C9CFCD] bg-white px-4 py-3 outline-none focus:border-[#2E6E55]"
                type="email"
              />
            </Field>
          </div>

          <div className="mt-6">
            <Field label="Message">
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                rows={10}
                className="w-full resize-none rounded-2xl border border-[#C9CFCD] bg-white px-4 py-3 outline-none focus:border-[#2E6E55]"
              />
            </Field>
          </div>

          <button
            type="submit"
            className="
              mt-10
              inline-flex items-center justify-center
              rounded-full bg-[#2C2C2C]
              px-10 py-4
              text-white font-semibold
              hover:bg-black transition
            "
          >
            Send Message
          </button>
        </form>
      </div>

      {/* ✅ CHAIR (bottom-right like screenshot) */}
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

/* ================= Small Components ================= */

function Field({ label, children }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-[#2b2b2b] mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}

function InfoItem({ icon, text }) {
  return (
    <div className="flex items-center justify-center gap-5">
      <div className="h-14 w-14 rounded-xl bg-[#2E6E55] flex items-center justify-center">
        <div className="text-white">{icon}</div>
      </div>
      <p className="text-[#6f6f6f] font-medium">{text}</p>
    </div>
  );
}

/* ================= Icons (Inline SVG) ================= */

function PinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 22s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M7 2h3l2 6-2 1c1 3 3 5 6 6l1-2 6 2v3c0 2-2 4-4 4C10 22 2 14 2 6c0-2 2-4 5-4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 6h16v12H4V6Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}
