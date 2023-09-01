"use client";

import clsx from "clsx";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

export const Counter = ({ maxCount }: { maxCount: number }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  if (inView && count < maxCount) {
    setTimeout(() => {
      setCount((prevCount) =>
        maxCount < 1000 ? prevCount + 1 : prevCount + 10
      );
    }, 2000 / maxCount);
  }

  return (
    <p
      className={clsx(
        "font-black",
        "text-[24px]",
        "md:text-[36px]",
        "xl:text-[50px]",
        "text-[#FDE138]",
        "counter"
      )}
      ref={ref}
    >
      {count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} +
    </p>
  );
};
