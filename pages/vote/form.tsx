import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
} from "@nextui-org/react";
import  abi   from "../../abi/abi";
import { writeContractType } from "./index";
type DispatchContract = ({
  abi,
  address,
  functionName,
  args,
}: writeContractType) => Promise<void>;
type VoteFormProps = {
  open: boolean;
};
interface voteFormProps {
    open: boolean;
    setVoteFormOpen: (open: boolean) => void;
    dispatchContract: DispatchContract;
    isPending: boolean;
    isConfirming: boolean;
    isConfirmed: boolean;
}

export default function VoteForm (
  { open,setVoteFormOpen,dispatchContract,isPending,isConfirming,isConfirmed }:voteFormProps,
)  {
  const { isOpen, onOpen, onOpenChange,onClose } = useDisclosure();
  const [questionStr, setquestionStr] = useState("");
  const [questionImgUrlStr, setquestionImgUrlStr] = useState("");
  useEffect(() => {
    if (open) {
      onOpen();
    }
    if (isConfirmed && open) {
     setVoteFormOpen(false);
    }
    console.log(isConfirmed,'isConfirmed');
  }, [open,isConfirmed]);
  return (
    <div>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        hideCloseButton={isConfirming||isPending}
        isDismissable={false}
        onOpenChange={onOpenChange}
        onClose={()=>{
            // 关闭后重置外部数据
            setVoteFormOpen(false);
            onClose();
        }}
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                创建投票
              </ModalHeader>
              <ModalBody>
                <Input type="text" label="投票名称" onValueChange={(v)=>{
                    setquestionStr(v);
                }} />
                <Input type="text" label="投票图片链接" placeholder='为避免gas消耗建议您填入短链接' onValueChange={(v)=>{
                    setquestionImgUrlStr(v);
                }} />
              </ModalBody>
              <ModalFooter className="justify-center">
                <div className="text-center">
                  <Button
                  isLoading={isPending || isConfirming}
                    className="w-unit-7xl mb-3"
                    color="primary"
                    onPress={() => {
                      dispatchContract({
                        abi,
                        address: "0x0d77736F42EF631771550Ec616D202c4dc2A530B",
                        functionName: "createPoll",
                        args: [questionStr,questionImgUrlStr],
                      });
                    }}
                  >
                     {isPending || isConfirming ? `交易确认中...` : `确认创建`}
                  </Button>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};
