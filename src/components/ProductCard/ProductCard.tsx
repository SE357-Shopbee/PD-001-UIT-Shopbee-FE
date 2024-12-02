import Image from "next/image";
import React from "react";
import { ProductCardProps } from "@/types";
import { classNames } from "@/components/classNames";

const ProductCard = ({ product }: { product: ProductCardProps }) => {
  const { id, nameProduct, image, unitPrice, listSpecificProduct, listCoupon } =
    product;

  const maxCouponDiscount = Math.max(...listCoupon) / 1000;

  const formattedNumber = (number: number): string => {
    return new Intl.NumberFormat("vi-VN", {
      style: "decimal",
      maximumFractionDigits: 0, // Optional: Số chữ số sau dấu thập phân
    }).format(number);
  };

  const lastPrice = (
    unitPrice: number,
    listSpecificProduct: number
  ): number => {
    return unitPrice * (1 - listSpecificProduct / 100);
  };

  return (
    <div className="relative w-[182px] border border-Outline bg-Surface">
      <div>
        <Image
          src={"/images/demo_img.svg"}
          height={157}
          width={182}
          alt="demoImage"
          className=""
        />
      </div>
      <div className="p-3 text-OnSurface font-semibold truncate">
        {nameProduct}
      </div>
      <div className={classNames("pl-3 pr-3 font-light text-sm")}>
        <div
          className={classNames(
            listCoupon.length > 0
              ? "p-[2px] bg-Secondary text-Primary inline-block"
              : "p-[2px] bg-Surface text-Surface inline-block"
          )}
        >
          {listCoupon.length > 0 ? `Discount ${maxCouponDiscount}k` : `Nope`}
        </div>
      </div>

      <div className="absolute top-0 right-0 font-light text-sm">
        <div
          className={classNames(
            listSpecificProduct ? "px-3 py-1 bg-Surface text-Error" : "px-3 py-1 bg-Surface text-Surface"
          )}
        >
          {listSpecificProduct ? listSpecificProduct : 0}%
        </div>
      </div>
      <div className="p-3 font-normal text-Error">
        <div>{formattedNumber(lastPrice(unitPrice, listSpecificProduct))} VND</div>
      </div>
    </div>
  );
};

export default ProductCard;
