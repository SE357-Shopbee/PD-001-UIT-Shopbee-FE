"use client";
import { CategoryProps, ModalProps } from "@/types";
import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  ModalContent,
} from "@nextui-org/react";
import { classNames } from "@/components/classNames";
import {
  categories,
  getCategoryById,
  getSubCategoryById,
} from "@/data/Category.data";
import { ButtonBase, ButtonOutline, ButtonSolid } from "@/components/Button";
import { RiArrowRightSLine } from "react-icons/ri";

const CategoryModal = ({
  isOpenModal,
  setIsOpenModal,
  onSubmit,
}: ModalProps) => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  const [isBreadcrumb, setIsBreadcrumb] = useState<CategoryProps[]>([]);

  const [subCategoryLevel2, setSubCategoryLevel2] = useState<CategoryProps[]>(
    []
  );
  const [subCategoryLevel3, setSubCategoryLevel3] = useState<CategoryProps[]>(
    []
  );
  const [subCategoryLevel4, setSubCategoryLevel4] = useState<CategoryProps[]>(
    []
  );

  const bigCategory = categories.filter(
    (category) => category.id >= 1 && category.id <= 8
  );

  const handleSubCategory = ({
    level,
    category,
  }: {
    level: number;
    category: CategoryProps;
  }) => {
    const subCategory: CategoryProps[] = getSubCategoryById(category.id);
    if (level === 1) {
      setSubCategoryLevel2(subCategory);
      setSubCategoryLevel3([]);
      setSubCategoryLevel4([]);
      setIsBreadcrumb([category]);
      console.log("Level 1", isBreadcrumb);
    } else if (level === 2) {
      setSubCategoryLevel3(subCategory);
      setSubCategoryLevel4([]);
      setIsBreadcrumb([isBreadcrumb[0], category]);
      console.log("Level 2", isBreadcrumb);
    } else if (level === 3) {
      setSubCategoryLevel4(subCategory);
      setIsBreadcrumb([isBreadcrumb[0], isBreadcrumb[1], category]);
      console.log("Level 3", isBreadcrumb);
    } else {
      setIsBreadcrumb([
        isBreadcrumb[0],
        isBreadcrumb[1],
        isBreadcrumb[2],
        category,
      ]);
      console.log("Level 4", isBreadcrumb);
    }
  };

  useEffect(() => {
    if (isOpenModal) {
      onOpen();
    } else {
      onClose();
    }
  }, [isOpenModal]);

  const handleCloseModal = () => {
    setIsBreadcrumb([]);
    setSubCategoryLevel2([]);
    setSubCategoryLevel3([]);
    setSubCategoryLevel4([]);
    setIsOpenModal(!isOpenModal);
    onClose();
  };

  const handleOnSubmit = () => {
    if (onSubmit) {
      onSubmit(isBreadcrumb);
    }
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } fixed inset-0 justify-center items-center bg-opacity-50 backdrop-blur-sm z-50`}
        >
          <Modal
            isDismissable={false}
            isKeyboardDismissDisabled={true}
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            hideCloseButton={true}
            backdrop={"blur"}
            className="relative justify-center items-center"
          >
            <ModalContent>
              <>
                <div className="w-3/5 border border-Outline bg-Banner">
                  <ModalHeader className="">
                    <div className="p-3 px-4 text-lg text-OnSurface font-normal">
                      Category
                    </div>
                  </ModalHeader>

                  <ModalBody className="">
                    <div className="px-4">
                      <div className="flex justify-between p-2 bg-Primary">
                        <div className="flex flex-col flex-1 pl-2 items-start bg-Banner border-r-[1px] border-OnSurface">
                          {bigCategory.map((category) => (
                            <ButtonBase
                              key={category.id}
                              content={category.categoryName}
                              iconRight={<RiArrowRightSLine />}
                              className="justify-between font-medium w-full"
                              classNameText={classNames(
                                "flex-grow text-left",
                                isBreadcrumb.find(
                                  (cate) => cate.id === category.id
                                )
                                  ? "text-Secondary"
                                  : ""
                              )}
                              onClick={() =>
                                handleSubCategory({
                                  level: 1,
                                  category: category,
                                })
                              }
                            />
                          ))}
                        </div>
                        <div className="flex flex-col flex-1 pl-2 bg-Banner border-r-[1px] border-OnSurface items-start">
                          {subCategoryLevel2 &&
                            subCategoryLevel2.map((category) => (
                              <ButtonBase
                                key={category.id}
                                content={category.categoryName}
                                iconRight={<RiArrowRightSLine />}
                                className="justify-between font-medium w-full"
                                classNameText={classNames(
                                  "flex-grow text-left",
                                  isBreadcrumb.find(
                                    (cate) => cate.id === category.id
                                  )
                                    ? "text-Secondary"
                                    : ""
                                )}
                                onClick={() =>
                                  handleSubCategory({
                                    level: 2,
                                    category: category,
                                  })
                                }
                              />
                            ))}
                        </div>
                        <div className="flex flex-col flex-1 pl-2 bg-Banner border-r-[1px] border-OnSurface items-start">
                          {subCategoryLevel3 &&
                            subCategoryLevel3.map((category) => (
                              <ButtonBase
                                key={category.id}
                                content={category.categoryName}
                                iconRight={<RiArrowRightSLine />}
                                className="justify-between font-medium w-full"
                                classNameText={classNames(
                                  "flex-grow text-left",
                                  isBreadcrumb.find(
                                    (cate) => cate.id === category.id
                                  )
                                    ? "text-Secondary"
                                    : ""
                                )}
                                onClick={() =>
                                  handleSubCategory({
                                    level: 3,
                                    category: category,
                                  })
                                }
                              />
                            ))}
                        </div>
                        <div className="flex flex-col flex-1 pl-2 bg-Banner border-r-[1px] border-OnSurface items-start">
                          {subCategoryLevel4 &&
                            subCategoryLevel4.map((category) => (
                              <ButtonBase
                                key={category.id}
                                content={category.categoryName}
                                iconRight={<RiArrowRightSLine />}
                                className="justify-between font-medium w-full"
                                classNameText={classNames(
                                  "flex-grow text-left",
                                  isBreadcrumb.find(
                                    (cate) => cate.id === category.id
                                  )
                                    ? "text-Secondary"
                                    : ""
                                )}
                                onClick={() =>
                                  handleSubCategory({
                                    level: 4,
                                    category: category,
                                  })
                                }
                              />
                            ))}
                        </div>
                      </div>
                    </div>
                  </ModalBody>

                  <ModalFooter className="flex">
                    <div className="flex justify-between w-full">
                      <div className="flex items-center">
                        <div className="p-3 px-4 text-lg text-OnSurface font-normal">
                          Selected:
                        </div>
                        <div className="py-3 text-lg text-OnSurface font-normal">
                          {isBreadcrumb
                            .map((category) => category.categoryName)
                            .join(" > ")}
                        </div>
                      </div>
                      <div className="flex">
                        <div className="p-3 px-4">
                          <ButtonOutline
                            content="Canceled"
                            className="rounded-sm text-xl text-OnSurface w-[124px] h-[30px] hover:border-Outline hover:bg-Surface hover:text-OnPrimary"
                            classNameText="flex-grow text-center font-light"
                            onClick={() => handleCloseModal()}
                          />
                        </div>
                        <div className="p-3 px-4">
                          <ButtonSolid
                            content="Confirm"
                            className="rounded-sm text-xl font-light bg-Secondary text-Banner w-[124px] h-[30px]"
                            classNameText="flex-grow text-center font-light"
                            onClick={() => {
                              if (onSubmit) {
                                isBreadcrumb
                                  ? onSubmit(isBreadcrumb)
                                  : onSubmit([]);
                              }
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </ModalFooter>
                </div>
              </>
            </ModalContent>
          </Modal>
        </div>
      )}
    </>
  );
};

export default CategoryModal;
