import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPaperPlane,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* ================= Newsletter ================= */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 text-[#2E6E55] font-medium">
            <span className="text-lg">✉</span>
            <span>Subscribe to Newsletter</span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <input
              type="text"
              placeholder="Enter your name"
              className="h-12 w-[240px] rounded-lg border border-gray-300 px-4 outline-none focus:border-[#2E6E55]"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="h-12 w-[240px] rounded-lg border border-gray-300 px-4 outline-none focus:border-[#2E6E55]"
            />
            <button className="h-12 w-14 rounded-lg bg-[#2E6E55] flex items-center justify-center text-white hover:bg-[#245744]">
              <FaPaperPlane />
            </button>
          </div>
        </div>

        {/* ================= Footer Content ================= */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-10 text-sm text-gray-500">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded bg-black text-white flex items-center justify-center font-semibold">
                UB
              </div>
              <span className="font-semibold text-black">
                Unga <span className="text-[#2E6E55]">Bunga</span>
              </span>
            </div>

            <p className="max-w-sm leading-6">
              Elegant interior designs made for modern lifestyles.
              <br />
              Where comfort meets creativity and quality.
              <br />
              Designed to elevate every space.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-4">
              <SocialIcon><FaFacebookF /></SocialIcon>
              <SocialIcon><FaInstagram /></SocialIcon>
              <SocialIcon><FaLinkedinIn /></SocialIcon>
              <SocialIcon><FaTwitter /></SocialIcon>
            </div>
          </div>

          {/* About */}
          <FooterCol
            title="About Us"
            items={["Services", "Blog", "Contact us"]}
          />

          {/* Support */}
          <FooterCol
            title="Support"
            items={["Knowledge Base", "Live chat"]}
          />

          {/* Jobs */}
          <FooterCol
            title="Jobs"
            items={["Our Team", "Leadership", "Privacy Policy"]}
          />

          {/* Products */}
          <FooterCol
            title="Nordic chair"
            items={["Kruzo Aero Chair", "Ergonomic Chair"]}
          />
        </div>

        {/* ================= Bottom Bar ================= */}
        <div className="mt-16 border-t pt-6 pb-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>
            Copyright © 2024. All Rights Reserved — Designed With love By
            UngaBunga.com
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-black">
              Terms & Condition
            </a>
            <a href="#" className="hover:text-black">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ================= Reusable Components ================= */

function FooterCol({ title, items }) {
  return (
    <div>
      <h4 className="mb-4 font-medium text-black">{title}</h4>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="hover:text-black cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ children }) {
  return (
    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-black hover:bg-[#2E6E55] hover:text-white cursor-pointer transition">
      {children}
    </div>
  );
}
