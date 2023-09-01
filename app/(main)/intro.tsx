"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import mainLogo from "@/assets/main_logo.png";
import Image from "next/image";

export const Intro = () => {
  const [showImage, setShowImage] = useState(true);
  const [showText, setShowText] = useState(false);
  const textToType =
    "[company-name] is simply\ndummy text of the printing and typesetting industry.";
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (showImage) {
      const imageTimer = setTimeout(() => {
        setShowImage(false);
        setShowText(true);
      }, 1500);
      return () => clearTimeout(imageTimer);
    }
  }, [showImage]);

  useEffect(() => {
    if (showText && currentIndex < textToType.length) {
      const typingTimer = setTimeout(() => {
        setTypedText((prevText) => prevText + textToType[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 50);
      return () => clearTimeout(typingTimer);
    }
  }, [showText, currentIndex, textToType]);

  return (
    <div
      className={clsx(
        "w-full",
        "h-screen",
        "flex",
        "justify-center",
        "items-center"
      )}
      style={{ backgroundImage: "url(/bgimg.png)", objectFit: "fill" }}
    >
      <Image
        src={mainLogo}
        alt={"main logo"}
        className={clsx(
          "md:w-[650px]",
          "w-[220px]",
          "-mt-[80px]",
          "animation-image",
          showText && "hidden"
        )}
      />
      <div className={clsx("flex", "flex-col", "text-center", "-mt-[80px]")}>
        {typedText.split("\n").map((item) => (
          <p
            key={item}
            className={clsx("font-bold", "xl:text-6xl", "md:text-4xl")}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};
