"use client";

import { usePathname } from "next/navigation";
import { classNames } from "@/components/classNames";
import { BreadcrumbProps } from "@/types";
import { Link } from "@nextui-org/react";

const Breadcrumb = ({ id, productName, categoryProduct }: BreadcrumbProps) => {
  // const pathname = usePathname();
  // const pathArray = pathname.split("/").filter((path) => path);
  // const excludedSegments = ["seller", "customer"]; // Segments to be excluded from the breadcrumb
  // const filterPathArray = pathArray.filter(
  //   (path) => !excludedSegments.includes(path)
  // );
  return (
    <div>
      <nav
        aria-label="breadcrumb_product"
        className="flex gap-2 w-full bg-Banner py-2 items-center"
      >
        <Link href={"/"}>
          <span
            className={classNames(
              "hover:underline font-light text-OutlineFocus"
            )}
          >
            {"Shopbee"}
          </span>
        </Link>
        {categoryProduct && (
          <span className="font-light text-Outline"> &gt; </span>
        )}

        <ol className="flex">
          {categoryProduct.map((category, index) => {
            const href =
              "/" +
              categoryProduct
                .filter((cate, cateIndex) => cateIndex <= index)
                .join("/");
            return (
              <li key={index} className="flex items-center">
                {index !== 0 && (
                  <span className="font-light text-Outline mx-2"> &gt; </span>
                )}
                <Link href={href}>
                  <span
                    className={classNames(
                      "font-light text-OutlineFocus hover:underline"
                    )}
                  >
                    {category.categoryName}
                  </span>
                </Link>
                {index === categoryProduct.length - 1 && (
                  <span className="font-light text-Outline mx-2"> &gt; </span>
                )}
              </li>
            );
          })}
        </ol>
        <span className="text-OnPrimary font-light truncate">{productName}</span>
      </nav>
    </div>
  );
};

export default Breadcrumb;
