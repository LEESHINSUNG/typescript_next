/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/products/deleted_forever", // 사용자가 source의 경로로 왔을 떄
        destination: "/products", // destination 경로로 이동 시키기
        permanent: true, // 영원히 여기로 옮겨갔어
        // 서치 엔진한테 이것을 리다이렉트 시키면서 308 상태를 보내면서 이 페이지는 영원히 이동했으니깐 안심하고 캐시해도돼
      },
      {
        source: "/products/deleted_temp",
        destination: "/products",
        permanent: false, // 잠시 일시적으로 설정한 것이면 false로 설정하면됨
      },
    ];
  },
};

module.exports = nextConfig;
