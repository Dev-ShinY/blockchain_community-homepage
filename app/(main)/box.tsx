"use client";

import clsx from "clsx";
import { useState } from "react";

export const Box = ({ title, des }: { title: string; des: string }) => {
  const [onHover, setOnHover] = useState(false);
  return (
    <div
      className={clsx(
        "h-[320px]",
        "md:h-[640px]",
        "xl:h-[480px]",
        "border",
        "border-[#2F2F2F]",
        "flex",
        "flex-col"
      )}
      onMouseOver={() => setOnHover(true)}
      onMouseOut={() => setOnHover(false)}
    >
      <div
        className={clsx("bg-[#00AE70]", "h-2", "w-0", onHover && "!w-full")}
        style={{ transition: "width 0.2s ease-in-out" }}
      />

      <div
        className={clsx("h-full", "p-3", "flex", "flex-col", "justify-center")}
      >
        <div
          className={clsx(
            "transition-transform",
            "transition-opacity",
            "translate-y-[0%]",
            onHover && "translate-y-[-40%]",
            onHover && "opacity-100",
            "text-[18px]",
            "md:text-[20px]",
            "xl:text-[26px]",
            "font-bold"
          )}
        >
          {title.split("\n").map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <div
          className={clsx(
            "text-[14px]",
            "transition-transform",
            "transform",
            "translate-y-[0px]",
            "transition-opacity",
            "opacity-0",
            onHover && "translate-y-[-10%]",
            onHover && "opacity-100",
            !onHover && "h-0",
            "text-[10px]",
            "md:text-[14px]",
            "xl:text-[16px]",
            "pr-8",
            "font-normal",
            "break-keep",
            "leading-6"
          )}
        >
          {des.split("**").map((part, index) =>
            index % 2 === 0 ? (
              <span key={index} className={clsx("font-normal")}>
                {part}
              </span>
            ) : (
              <strong key={index} className={clsx("font-bold")}>
                {part}
              </strong>
            )
          )}
        </div>
      </div>
    </div>
  );
};
