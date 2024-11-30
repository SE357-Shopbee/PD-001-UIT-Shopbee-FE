"use client";
import Image from "next/image";
import { Input, InputRadio } from "@/components";

const dataRadio = ['hehe', 'haha', 'hihi', 'hoho'];

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20]">
      <Input title="Username" placeholder="Enter" onChange={() => {}} classNameInput="w-[500px]" />
      <InputRadio title="Test" value={dataRadio} onChange={() => {}} classNameInput="w-[500px]"/>
    </div>
  );
}
