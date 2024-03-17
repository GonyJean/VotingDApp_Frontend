<!--
 * @Author: Yxj
 * @LastEditors: Yxj
 * @Date: 2024-03-16 19:30:30
 * @LastEditTime: 2024-03-17 15:31:49
 * @Description: file content
 * @FilePath: \README.md
-->
# VotingDapp-去中心化投票系统

## Getting Started
`pnpm install`  
`pnpm run dev`

## 应用目的

创建一个去中心化的投票系统，允许用户在区块链上匿名投票。该系统需满足以下要求：  
用户能够创建投票。  
用户能够参与投票。  
投票结果是公开透明的。  

## solidity合约开发
### HackQuest-solidity学习地址:[Solidity](https://www.hackquest.io/learning-track?track=Basic&language=SOLIDITY)  
使用 `solidity` 开发,部署在 `sepolia` 测试链  
合约地址1:`0x0d77736F42EF631771550Ec616D202c4dc2A530B`  (有imgUrl参数)  
合约地址2:`0xEF9a9493E0312CbF08fa999b4B7570af86554A44`  (无imgUrl参数)  
合约项目地址:[VotingDApp_Contract](https://github.com/GonyJean/VotingDapp_Contract)
![这是图片](/img/markmap.png "合约流程")
## 前端 React 项目

`RainbowKit + wagmi + Next.js + NextUI+ Tailwind`  

前端项目入口:[VotingDApp](https://gonyjean.github.io/)  
测试网有时候延迟较大,提交完成后请耐心等待

## TODO:

 √ 显示所有投票问题。  
 √ 每个投票的交互  
 √ 允许用户选择投票并提交他们的选择。  
 √ 展示投票结果。  
 √ 提供创建投票的表单。
