import { ButtonProps } from "@/types";
import { classNames } from "@/components/classNames";
import ButtonBase from "@/components/Button/ButtonBase";

const ButtonOutline = ({
  content,
  isPrimary = false,
  isDisabled = false,
  className = "",
  classNameText = "",
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
      classNameText={classNameText}
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
