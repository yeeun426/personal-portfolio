import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    // styled-components SSR / className 안정화
    styledComponents: true,
  },
};

export default nextConfig;
