import { ReactNode } from "react";

export type ButtonProps = {
  content?: string;
  className?: string;
  classNameText?: string;
  isPrimary?: boolean;
  isDisabled?: boolean;
  iconLeft?: ReactNode | null;
  iconRight?: ReactNode | null;
  onClick?: () => void;
}