/*
 * @Author: Yxj
 * @LastEditors: Yxj
 * @Date: 2024-03-15 17:29:10
 * @LastEditTime: 2024-03-15 19:31:45
 * @Description: file content
 * @FilePath: \my-rainbowkit-app\pages\vote\index.tsx
 */
import { useAccount, useReadContract } from "wagmi";
import { abi } from "./abi";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Divider,
  Button,
} from "@nextui-org/react";
const Vote = () => {
  const { address } = useAccount();

  const { data, refetch, isFetching } = useReadContract({
    abi,
    address: "0xEF9a9493E0312CbF08fa999b4B7570af86554A44",
    functionName: "getAllPollResults",
  });
  console.log(data);
  return (
    <div>
      {/* <h3>Read contract</h3> */}
      {/* Balance of your wagmi NFT : {data?.toString()} */}
      <Button
        className=""
        color="primary"
        style={{ marginLeft: "8px" }}
        onPress={(e) => {
          refetch();
        }}
      >
        {isFetching ? "读取合约信息..." : "读取完毕"}
      </Button>
      {data?.map((e, i) => {
        return (
          <Card className="py-4" key={i}>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-large">{e.name}</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="https://nextui.org/images/hero-card.jpeg"
                width={270}
              />
            </CardBody>

            <div className="justify-center flex">
                  <Button size="sm" color="primary" className="mr-5">赞成</Button>
                  <Button size="sm" color="danger">否定</Button>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default Vote;
