/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: [
            'lh3.googleusercontent.com',
            'static.vecteezy.com'
        ]
    }
};

export default nextConfig;
