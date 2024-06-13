/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        //https://cdn.prod.website-files.com/6365d860c7b7a7191055eb8a/66404ae94fe39eba6eb74858_AlphaWave.svg
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
        port: '',
        pathname: '/**/**',
      },
      {
       //https://avatar.iran.liara.run/public/34
        protocol: 'https',
        hostname: 'avatar.iran.liara.run',
        port: '',
        pathname: '/public/**',
      },
    ],
  },
};

export default nextConfig;
