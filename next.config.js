/** @type {import('next').NextConfig} */
require("dotenv").config();
const nextConfig = {
  images: {
    domains: ["dareuglobal.com", "res.cloudinary.com", "assets.corsair.com"],
  },
};

module.exports = nextConfig;
