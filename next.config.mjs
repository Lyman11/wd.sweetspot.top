/** @type {import('next').NextConfig} */
const nextConfig = {
    optimizeFonts: true, // 优化字体加载
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production', // 生产环境移除 console
    },
};

export default nextConfig;
