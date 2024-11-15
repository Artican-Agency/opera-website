/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Ensure React strict mode is enabled
  images: {
    dangerouslyAllowSVG: true, // Allow SVG images
    domains: ["res.cloudinary.com", "images.placeholders.dev"], // List of trusted image domains
  },
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'none'"],
      sandbox: [],
    },
  },
};

export default nextConfig;
