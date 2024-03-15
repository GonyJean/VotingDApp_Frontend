/**
* @Author: Yxj
* @LastEditors: Yxj
* @Date: 2024-03-12 19:03:54
* @LastEditTime: 2024-03-15 10:24:16
* @Description: file content
* @FilePath: \my-rainbowkit-app\next.config.js
 **/
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
   env: {
    NEXT_PUBLIC_ENABLE_TESTNETS: 'true',
  }
};
module.exports = nextConfig;
