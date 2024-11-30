import { ButtonProps } from "@/types";
import { classNames } from "@/components/classNames";
import ButtonBase from "@/components/Button/ButtonBase";

const ButtonSolid = ({
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
        "text-OnSurface",
        isPrimary ? "bg-Secondary" : "bg-OutlineFocus",
        className
      )}
    />
  );
};

export default ButtonSolid;
