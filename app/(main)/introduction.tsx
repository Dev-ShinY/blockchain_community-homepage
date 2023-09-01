"use client";

import clsx from "clsx";
import Image from "next/image";
import Arrow from "@/assets/arrow.svg";
import { useSelector } from "react-redux";

export const Introduction = () => {
  const keyword = "[회사명]";
  const keywordEN = "[company-name]";
  const introduction =
    " 별에도 같이 언덕 너무나 어머님, 있습니다. 패, 강아지, 차 봅니다. 이제 이름자를 별 지나고 내 많은 어머님, 거외다. 프랑시스 풀이 무성할 토끼, 봅니다. 이웃 차 북간도에 어머니, 봅니다. 추억과 걱정도 하나에 계십니다.";
  const introductionEN =
    " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

  const language = useSelector((state: { language: string }) => state.language);

  return (
    <div className={clsx("w-full", "flex", "flex-col", "mb-20")}>
      <div
        className={clsx(
          "text-[12px]",
          "md:text-[20px]",
          "xl:text-[32px]",
          "font-bold",
          "text-right",
          "ml-auto"
        )}
      >
        <span className={clsx("text-[#00AE70]")}>
          {language === "EN" ? keyword : keywordEN}
        </span>
        {(language === "EN" ? introduction : introductionEN)
          .split("\n")
          .map((item, index) => (
            <span key={index}>
              {item} <br />
            </span>
          ))}
      </div>
      {/* Button */}
      <div className={clsx("w-full", "felx", "justify-end", "items-end")}>
        <div
          className={clsx(
            "flex",
            "bg-[#00AE70]",
            "text-white",
            "rounded-full",
            "md:px-5",
            "md:py-3",
            "px-2",
            "py-1",
            "justify-between",
            "items-center",
            "w-32",
            "md:w-72",
            "text-[12px]",
            "md:text-[20px]",
            "xl:text-[24px]",
            "font-extrabold",
            "mt-3",
            "md:mt-8",
            "ml-auto"
          )}
        >
          <a href="mailto:contact@[company-name].kr">
            <span className="md:px-[20px]">
              {language === "EN" ? "회사소개서" : "About Us"}
            </span>
          </a>

          <div
            className={clsx(
              "bg-black",
              "rounded-full",
              "md:p-[10px]",
              "p-[4px]"
            )}
          >
            <Image src={Arrow} alt={"Arrow"} />
          </div>
        </div>
      </div>
    </div>
  );
};
