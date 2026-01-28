// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        adminBg: "#F3F5F4",
        adminText: "#0E1B16",
        adminMuted: "#5B6B64",
        adminAccent: "#F4B400",
        g1: "#0FB07A",
        g2: "#0B7E63",
        g3: "#053A34",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
