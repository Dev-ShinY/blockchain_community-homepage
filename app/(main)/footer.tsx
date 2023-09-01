"use client";

import clsx from "clsx";
import Image from "next/image";
import footerLogo from "@/assets/footer-logo.png";
import { useSelector } from "react-redux";

export const Footer = () => {
  const language = useSelector((state: { language: string }) => state.language);

  return (
    <footer
      className={clsx(
        "flex",
        "justify-around",
        "items-center",
        "w-full",
        "bg-black",
        "h-10",
        "md:h-60",
        "px-5",
        "mb-5"
      )}
    >
      <Image
        src={footerLogo}
        alt={"headerLogo"}
        className={clsx(
          "max-h-[30px]",
          "md:max-h-[100px]",
          "xl:max-h-[160px]",
          "w-fit",
          "object-scale-down"
        )}
      />
      <div
        className={clsx(
          "text-[8px]",
          "md:text-xl",
          "xl:text-2xl",
          "text-center",
          "font-medium"
        )}
      >
        <p>
          {language === "EN"
            ? "주소 : 서울특별시 영등포구 여의도동 의사당대로 1"
            : "Address : 1, Uisadang-daero, Yeongdeungpo-gu, Seoul, Korea"}
        </p>
        <p>
          {language === "EN"
            ? "대표번호 : 070-0000-0000｜팩스 : 02-0000-0000"
            : "Tel : +82)70-0000-0000｜Fax : +82)2-0000-0000"}
        </p>
      </div>
    </footer>
  );
};
