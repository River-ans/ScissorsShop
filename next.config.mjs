/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['example.com', 'uqyvkbhgcxozbqdprlru.supabase.co'], // 허용할 외부 도메인 목록
  },
};

export default nextConfig;
