/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'encrypted-tbn0.gstatic.com',
            },
            {
                protocol: 'https',
                hostname: 'html.themeori.net',
            },
            {
                protocol: 'https',
                hostname: 'plus.unsplash.com'
            }
        ]
    }
};

export default nextConfig;
