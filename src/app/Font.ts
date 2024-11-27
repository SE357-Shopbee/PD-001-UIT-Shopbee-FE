import localFont from "next/font/local";

export const poppins = localFont({
  src: [
    {
      path: "../../public/fonts/Poppins-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Poppins-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Poppins-Italic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/Poppins-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Poppins-Bold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
});
