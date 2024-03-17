/**
* @Author: Yxj
* @LastEditors: Yxj
* @Date: 2024-03-12 19:03:54
* @LastEditTime: 2024-03-17 20:21:10
* @Description: file content
* @FilePath: \next.config.js
 **/
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
console.log(isProd,'@@@');
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  assetPrefix: isProd ? 'https://gonyjean.github.io/VotingDApp_Frontend/' : '',
  env: {
    NEXT_PUBLIC_ENABLE_TESTNETS: 'true',
  }
};
module.exports = nextConfig;
