import { Dispatch, SetStateAction } from "react";

export type ModalProps = {
  isOpenModal: boolean;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
  onSubmit?: (props?: any) => void;
};
