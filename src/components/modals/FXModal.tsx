import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { ReactNode } from "react";

interface IModal {
  buttonText: string;
  title: string;
  children: ReactNode;
  buttonClassName?: string;
  variantStyle?:
    | "light"
    | "solid"
    | "bordered"
    | "flat"
    | "faded"
    | "shadow"
    | "ghost"
    | undefined;
}

export default function FXModal({
  buttonText,
  title,
  children,
  buttonClassName,
  variantStyle = "light",
}: IModal) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        className={buttonClassName}
        variant={variantStyle}
        onPress={onOpen}
      >
        {buttonText}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>{children}</ModalBody>
              {/* <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter> */}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
