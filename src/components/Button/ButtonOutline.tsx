import { ButtonProps } from "@/types";
import { classNames } from "@/components/classNames";
import ButtonBase from "@/components/Button/ButtonBase";

const ButtonOutline = ({
  content,
  isPrimary = false,
  isDisabled = false,
  className = "",
  iconLeft,
  iconRight,
  onClick,
}: ButtonProps) => {
  return (
    <ButtonBase
      content={content}
      isDisabled={isDisabled}
      iconLeft={iconLeft}
      iconRight={iconRight}
      onClick={onClick}
      className={classNames(
        "outline outline-Outline outline-1",
        isPrimary
          ? "hover:border-Secondary hover:bg-Secondary hover:text-Primary"
          : "hover:border-OutlineFocus hover:bg-OutlineFocus hover:text-Primary",
        className
      )}
    />
  );
};

export default ButtonOutline;
