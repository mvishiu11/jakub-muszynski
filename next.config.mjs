/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'github-readme-stats.vercel.app',
          port: '',
          pathname: '/**',
        },
      ],
      dangerouslyAllowSVG: true,  // Enable SVG support
      contentSecurityPolicy: "default-src 'self'; img-src 'self' https://github-readme-stats.vercel.app; script-src 'none'; sandbox;" // Add a content security policy for safety
    },
  };
  
export default nextConfig;  