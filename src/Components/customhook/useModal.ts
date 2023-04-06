import { useState } from "react";

interface ModalContents {
  contents: JSX.Element;
}

const useModal = (obj: ModalContents) => {
  const { contents } = obj;
  const [isOpen, setIsOpen] = useState(false);
  return { contents, isOpen, setIsOpen };
};

export default useModal;
