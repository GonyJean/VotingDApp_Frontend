/**
* @Author: Yxj
* @LastEditors: Yxj
* @Date: 2024-03-12 19:03:54
* @LastEditTime: 2024-03-17 15:01:56
* @Description: file content
* @FilePath: \next.config.js
 **/
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
   env: {
    NEXT_PUBLIC_ENABLE_TESTNETS: 'true',
  }
};
module.exports = nextConfig;
