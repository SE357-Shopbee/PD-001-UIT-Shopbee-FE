import ButtonSolid from "@/components/Button/ButtonSolid";

const SignInButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <ButtonSolid
      content="Sign in"
      className="bg-Secondary text-Primary"
      classNameText="font-light"
      onClick={onClick}
    />
  );
};

export default SignInButton;
