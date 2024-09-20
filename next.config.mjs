/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        "platform-lookaside.fbsbx.com", // facebook
        "firebasestorage.googleapis.com", //firebase-storage
        "scontent-atl3-2.xx.fbcdn.net", // facebook
        "pbs.twimg.com", // twitter
        "avatars.githubusercontent.com", // gitHub
      ],
      remotePatterns: [
        {
          hostname: "lh3.googleusercontent.com",
        },
      ],
    },
  };
  
  export default nextConfig;
  