import { classNames } from "@/components/classNames";
import { CategoryProps } from "@/types";
import Image from "next/image";

const CategoryCard = ({ Category }: { Category: CategoryProps }) => {
  const { id, categoryImageUrl, categoryName } = Category;
  return (
    <div className="border border-Outline w-[130px] h-[170px] flex flex-col transition-shadow duration-200 hover:shadow-lg hover:bg-Surface">
      <div className="flex-grow-[2] flex justify-center items-center">
        <div className="p-2 rounded-full bg-Highlight">
          <Image
            src={"/images/demo_category_img.svg"}
            alt={"Image category"}
            width={80}
            height={80}
            className="rounded-full"
          />
        </div>
      </div>
      <div className="flex-grow flex justify-center text-center w-full">
        {categoryName}
      </div>
    </div>
  );
};

export default CategoryCard;
