import type { NextConfig } from "next";
import createNextPWA from "next-pwa";

const withPWA = createNextPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  buildExcludes: [/middleware-manifest\.json$/],
  publicExcludes: ['!**/*']
});

const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bdmhxbhpetcrhumzcyhv.supabase.co',
        port: '',
        pathname: '**',
      },
    ],
  },
} satisfies NextConfig;

export default withPWA(config);
