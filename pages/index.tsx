/*
 * @Author: Yxj
 * @LastEditors: Yxj
 * @Date: 2024-03-12 19:03:54
 * @LastEditTime: 2024-03-17 02:27:31
 * @Description: file content
 * @FilePath: \pages\index.tsx
 */
import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { WalletButton } from "@rainbow-me/rainbowkit";
import { useAccount, useBalance } from "wagmi";
import Vote from "./vote";
const Home: NextPage = () => {
  const { address, isConnected, status } = useAccount();
  const { connector } = useAccount();
  const balance = useBalance({
    address: address,
    unit: "ether",
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>VotingDapp</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <main className={styles.main}>
        <h1 className='font-bold text-4xl'>Voting-DApp</h1>
        <p className="text-2xl mb-2">
          欢迎使用Voting-DApp,一个基于Ethereum的去中心化投票系统
           </p>

       <div className="mb-3">
        <ConnectButton label={!isConnected?`请连接钱包并切换至sepolia...`:`Connect Wallet`} accountStatus="avatar" />
       </div>
        {/* <h1>value is: {balance.data?.formatted}</h1> */}
       {isConnected&&<Vote></Vote>}
      </main>
    </div>
  );
};

export default Home;
