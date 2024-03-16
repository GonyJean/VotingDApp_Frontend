/*
 * @Author: Yxj
 * @LastEditors: Yxj
 * @Date: 2024-03-12 19:03:54
 * @LastEditTime: 2024-03-16 17:46:35
 * @Description: file content
 * @FilePath: \my-rainbowkit-app\pages\index.tsx
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
        <ConnectButton label={!isConnected?`请连接钱包并切换至sepolia...`:`Connect Wallet`} />
        {/* <h1>value is: {balance.data?.formatted}</h1> */}
       {isConnected&&<Vote></Vote>}
      </main>
    </div>
  );
};

export default Home;
