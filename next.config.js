/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.clerk.dev',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

module.exports = nextConfig;
