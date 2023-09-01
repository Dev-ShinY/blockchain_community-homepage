"use client";

import clsx from "clsx";
import Image from "next/image";
import skillAsset1 from "@/assets/skill-asset-1.svg";
import skillAsset2 from "@/assets/skill-asset-2.svg";
import skillAsset3 from "@/assets/skill-asset-3.svg";
import { Counter } from "./counter";
import { useSelector } from "react-redux";

export const Skill = () => {
  const language = useSelector((state: { language: string }) => state.language);

  const assetsList = [skillAsset1, skillAsset2, skillAsset3];
  const KO_TextList = [
    "평화스러운 별과\n무한한 가능",
    "황금시대의 보배",
    "산야와 거선",
  ];

  const EN_TextList = [
    "Lorem Ipsum is\nsimply dummy text",
    "Lorem Ipsum",
    "Lorem Ipsum",
  ];

  const animatedText = [
    {
      title: "Skil point 1",
      des: 20,
    },
    {
      title: "Skil point 2",
      des: 100,
    },
    {
      title: "Skil point 3",
      des: 300,
    },
    {
      title: "Skil point 4",
      des: 100000,
    },
  ];

  return (
    <div
      className={clsx(
        "mt-40",
        "w-full",
        "md:max-w-[1450px]",
        "m-auto",
        "md:h-screen",
        "flex",
        "flex-col",
        "items-center",
        "justify-center"
      )}
    >
      {/* circle */}
      <div className={clsx("flex", "justify-around", "items-start", "w-full")}>
        {[0, 1, 2].map((item) => (
          <div key={item}>
            <Image
              src={assetsList[item]}
              alt={"img"}
              className={clsx(
                "rounded-full",
                "border-[#40B47D]",
                "border",
                "w-[50px]",
                "h-[50px]",
                "md:w-[150px]",
                "md:h-[150px]",
                "flex",
                "justify-center",
                "items-center",
                "m-auto"
              )}
            />
            <div className={clsx("mt-3")}>
              {(language === "EN" ? KO_TextList[item] : EN_TextList[item])
                .split("\n")
                .map((item, index) => (
                  <p
                    className={clsx(
                      "text-[12px]",
                      "md:text-[20px]",
                      "xl:text-[32px]",
                      "text-center",
                      "font-bold"
                    )}
                    key={index}
                  >
                    {item}
                  </p>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* animatedText */}
      <div
        className={clsx(
          "flex",
          "w-full",
          "grid",
          "grid-cols-2",
          "gap-5",
          "md:grid-cols-4",
          "text-center",
          "mt-[35px]",
          "md:mt-[190px]"
        )}
      >
        {animatedText.map((item) => (
          <div key={item.title} className={clsx("mb-[40px]")}>
            <p
              className={clsx(
                "font-semibold",
                "text-[12px]",
                "md:text-[18px]",
                "xl:text-[24px]",
                "mb-5"
              )}
            >
              {item.title}
            </p>
            <div className={clsx("top-0")}>
              <Counter maxCount={item.des} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
