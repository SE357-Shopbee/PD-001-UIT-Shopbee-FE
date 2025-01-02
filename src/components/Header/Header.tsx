"use client";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  Chip,
  Divider,
  Input,
  Pagination,
  SortDescriptor,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";


const Header = () => {
  const [product, setProduct] = useState<string>("");

  return (
    <header className="flex h-16 w-3/5 shrink-0 items-center justify-between px-4 drop-shadow md:px-6">
      <div className="flex min-w-max flex-row items-center">
        <Image
          src={"/images/logoShopbee.svg"}
          alt="logo"
          width={60}
          height={60}
        />
        <div className="flex flex-row">
          <span className="text-5xl font-bold text-Secondary">Shop</span>
          <span className="text-5xl font-bold text-OnSurface">Bee</span>
        </div>
      </div>
      <div className=" flex w-full items-center justify-center gap-2">
        <Input
          className="border-2 border-Secondary rounded-xl w-3/4"
          variant="bordered"
          size="md"
          type=""
          color={"default"}
          placeholder="Find product"
          value={product}
          style={{ backgroundColor: "transparent" }}
          onChange={(e) => setProduct(e.target.value)}
        />
        <div className="bg-Secondary rounded-xl cursor-pointer hover:brightness-90"
        onClick={() => {}}>
          <IoIosSearch size={"3em"} color="white" />
        </div>
      </div>
      <div className="flex flex-row">
        <IoCartOutline size={"3em"} color="Orange" />
      </div>
    </header>
  );
};

export default Header;
