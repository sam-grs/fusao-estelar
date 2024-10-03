/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // Desativa o ESLint durante o deploy
        ignoreDuringBuilds: true,
    },
}

export default nextConfig
