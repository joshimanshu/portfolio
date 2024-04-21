/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV = 'production';

const nextConfig = {
    basePath: '/portfolio',
    tagret: 'static',
    distDir:"dist",
    images:{
        unoptimized:true
    }
};

export default nextConfig;
