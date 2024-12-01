import { FC } from "react";
import { returnPaginationRange } from "@/components/Pagination/returnPagination";
import { classNames } from "@/components/classNames";
import { PaginationProps } from "@/types";

const Pagination: FC<PaginationProps> = ({
  totalPages,
  page,
  limit,
  siblings,
  onPageChange,
}) => {
  // Sử dụng hàm returnPaginationRange de063 tạo mảng trang
  const paginationRange = returnPaginationRange(
    totalPages,
    page,
    limit,
    siblings
  );

  return (
    <div className="mt-4 flex justify-center">
      <nav aria-label="PageNavigation">
        <ul className="inline-flex items-center -space-x-px">
          {/**Nút di chuyển tới trang đầu tiên */}
          <li>
            <a
              href="#"
              onClick={() => onPageChange("&laquo;")}
              className="bg-Primary hover:text-gray-700 flex h-[40px] w-[80px] items-center justify-center rounded-l-2xl border border-Outline text-OnPrimary hover:bg-Surface"
            >
              &laquo;
            </a>
          </li>
          {/* Các nút cho các trang cụ thể */}
          <li>
            <a
              href="#"
              onClick={() => onPageChange("&lsaquo;")}
              className={classNames(
                "bg-Primary hover:text-gray-700 flex h-[40px] w-[80px] items-center justify-center border border-Outline text-OnPrimary hover:bg-Surface"
              )}
            >
              &lsaquo;
            </a>
          </li>
          {/**Các nút cho các trang cụ thể */}
          {paginationRange.map((value, index) => (
            <li key={index}>
              <a
                href="#"
                onClick={() => onPageChange(value)}
                className={classNames(
                  "flex h-[40px] w-[80px] items-center justify-center border text-sm",
                  value === page
                    ? "bg-Primary border-Outline text-Secondary"
                    : "bg-Primary border border-Outline text-OnPrimary hover:bg-Surface"
                )}
              >
                {value}
              </a>
            </li>
          ))}
          {/**Nút di chuyển tiến một trang */}
          <li>
            <a
              href="#"
              onClick={() => onPageChange("&rsaquo;")}
              className="bg-Primary hover:bg-gray-100 hover:text-gray-700 flex h-[40px] w-[80px] items-center justify-center rounded-r-2xl border border-Outline text-OnPrimary hover:bg-Surface"
            >
              &rsaquo;
            </a>
          </li>
          {/* Nút di chuyển tới trang cuối cùng */}
          <li>
            <a
              href="#"
              onClick={() => onPageChange("&raquo;")}
              className={classNames(
                "bg-white hover:bg-gray-100 hover:text-gray-700 flex h-[40px] w-[80px] items-center justify-center rounded-r-2xl border border-primary text-on-primary-container hover:bg-primary-container"
              )}
            >
              &raquo;
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
