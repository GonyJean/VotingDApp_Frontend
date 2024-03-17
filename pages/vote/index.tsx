/*
 * @Author: Yxj
 * @LastEditors: Yxj
 * @Date: 2024-03-15 17:29:10
 * @LastEditTime: 2024-03-17 18:43:09
 * @Description: file content
 * @FilePath: \pages\vote\index.tsx
 */
import React, {
  useRef,
  useImperativeHandle,
  forwardRef,
  useEffect,
  useState,
} from "react";
import {
  useAccount,
  useReadContract,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi";
import {
  type BaseError,
  UseWriteContractParameters,
  UseWriteContractReturnType,
} from "wagmi";
import {
  Card,
  CardHeader,
  CardBody,
  Spinner,
  CardFooter,
  Image,
  Divider,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import abi from "../../abi/abi";
import VoteForm from "./form";
export interface writeContractType {
  abi: readonly any[];
  address: `0x${string}`;
  functionName: string;
  args: any[];
}
export default function Vote() {
  const { address, chain } = useAccount();
  const { data: hash, writeContract, isPending, error } = useWriteContract();
  const {
    isLoading: isConfirming,
    isSuccess: isConfirmed,
    isError: isError,
  } = useWaitForTransactionReceipt({
    hash,
  });
  const { data, refetch, isFetching } = useReadContract({
    abi,
    address: "0x0d77736F42EF631771550Ec616D202c4dc2A530B",
    functionName: "getAllPollResults",
  });
  const [voteFormOpen, setVoteFormOpen] = useState(false);
  useEffect(() => {
    if (error || isConfirmed) {
      onOpen();
      refetch();
    }
  }, [error, isConfirmed]);
  const dispatchContract = async ({
    abi,
    address,
    functionName,
    args,
  }: writeContractType) => {
    writeContract({
      abi,
      address,
      functionName,
      args,
    });
  };
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="text-center">
      {/* 判断当前是否为sepolia链 */}
      {chain?.name === "Sepolia" ? (
        <>
          <Button
            color="primary"
            className="w-unit-6xl mb-3"
            onClick={(e) => {
              setVoteFormOpen(true);
            }}
          >
            创建新投票
          </Button>
          {data?.map((e, i) => (
            <Card className="py-4 mb-3 w-unit-6xl" key={i}>
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">{e.name}</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  isZoomed
                  className="object-cover rounded-xl"
                  src={e.imgUrl}
                  width={300}
                  height={250}
                  fallbackSrc = "https://via.placeholder.com/300x200"
                />
              </CardBody>
              <div className="justify-center flex mb-1">
                <span className="mr-5">
                  赞成数:
                  <span>{e.yesCount.toString()}</span>
                </span>
                <span>
                  反对数:
                  <span>{e.noCount.toString()}</span>
                </span>
              </div>

              <div className="justify-center flex">
                <Button
                  isLoading={isPending || isConfirming}
                  size="sm"
                  color="primary"
                  className="mr-5"
                  onClick={() => {
                    dispatchContract({
                      abi,
                      address: "0x0d77736F42EF631771550Ec616D202c4dc2A530B",
                      functionName: "vote",
                      args: [i, true],
                    });
                    onOpen();
                  }}
                >
                  {isPending || isConfirming ? `交易确认中...` : `赞成`}
                </Button>
                <Button
                  size="sm"
                  color="danger"
                  onClick={() => {
                    dispatchContract({
                      abi,
                      address: "0x0d77736F42EF631771550Ec616D202c4dc2A530B",
                      functionName: "vote",
                      args: [i, false],
                    });
                    onOpen();
                  }}
                >
                  {isPending || isConfirming ? `交易确认中...` : `反对`}
                </Button>
              </div>
            </Card>
          ))}

          <Modal
            backdrop="opaque"
            isOpen={isOpen}
            hideCloseButton={isConfirming || isPending}
            isDismissable={false}
            onOpenChange={onOpenChange}
            classNames={{
              backdrop:
                "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
            }}
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    处理结果
                  </ModalHeader>
                  <ModalBody>
                    {error ? (
                      <p>
                        {(error as BaseError).shortMessage || error.message}
                      </p>
                    ) : isConfirmed ? (
                      `交易已确认。`
                    ) : (
                      <Spinner label="正在确认信息,请等待..." ></Spinner>
                    )}
                  </ModalBody>
                  <ModalFooter>
                    {isPending || isConfirming ? null : (
                      <Button
                        color="primary"
                        onPress={onClose}
                        isLoading={isPending || isConfirming}
                      >
                        确定
                      </Button>
                    )}
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
          <VoteForm
            open={voteFormOpen}
            setVoteFormOpen={setVoteFormOpen}
            dispatchContract={dispatchContract}
            isPending={isPending}
            isConfirming={isConfirming}
            isConfirmed={isConfirmed}
          ></VoteForm>
        </>
      ) : (
        <div>当前项目仅支持sepolia,请切换至sepolia测试网</div>
      )}
    </div>
  );
}
