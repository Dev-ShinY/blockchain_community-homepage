"use client";

import clsx from "clsx";
import Image from "next/image";
import Language from "@/assets/language.svg";
import headerLogo from "@/assets/header-logo.png";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "@/redux/store";

export const Header = () => {
  const language = useSelector((state: { language: string }) => state.language);
  const dispatch = useDispatch();

  const handleChangeLanguage = (newLanguage: string) => {
    dispatch(setLanguage(newLanguage));
  };

  return (
    <header
      className={clsx(
        "flex",
        "justify-between",
        "items-center",
        "z-10",
        "sticky",
        "top-0",
        "w-full",
        "mb-5",
        "bg-black",
        "h-20",
        "px-3",
        "md:px-52"
      )}
    >
      <div className="w-20">ㅤ</div>
      <Image src={headerLogo} alt={"headerLogo"} />
      <div
        className={clsx("flex", "w-20", "justify-end", "cursor-pointer")}
        onClick={() => handleChangeLanguage(language === "EN" ? "KO" : "EN")}
      >
        <Image src={Language} alt={"Language"} />
        <span
          className={clsx("ml-2", "text-[#616161]", "font-bold", "select-none")}
        >
          {language}
        </span>
      </div>
    </header>
  );
};
