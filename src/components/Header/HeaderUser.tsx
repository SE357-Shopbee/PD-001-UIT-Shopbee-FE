import { useRouter } from "next/navigation";
import { classNames, SignInButton } from "@/components";
import { IoIosNotificationsOutline } from "react-icons/io";

const HeaderUser = () => {
  const router = useRouter();

  const handelSellerChannel = () => {
    router.replace("/seller");
  };
  const handleAboutUs = () => {
    router.replace("/about-us");
  };

  const handleNotification = () => {
    router.replace("/user/notification");
  };

  const handleSignIn = () => {
    router.replace("/auth/SignIn");
  };

  return (
    <header className="flex pt-2 w-3/5 flex-row items-center justify-between">
      <div className="flex flex-row gap-10">
        <span
          className="font-light cursor-pointer"
          onClick={() => handelSellerChannel}
        >
          Seller Channel
        </span>
        <span
          className="font-light cursor-pointer"
          onClick={() => handleAboutUs}
        >
          About us
        </span>
      </div>
      <div className="flex flex-row gap-10 justify-center items-center">
        <div
          className="flex flex-row gap-2 cursor-pointer"
          onClick={() => handleNotification()}
        >
          <IoIosNotificationsOutline size={"1.5em"} />
          <span>Notification</span>
        </div>
        <div>
          <SignInButton onClick={handleSignIn} />
        </div>
      </div>
    </header>
  );
};

export default HeaderUser;
