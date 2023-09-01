import clsx from "clsx";
import Image from "next/image";
import partnerAltLogo from "@/assets/partner-alt-logo.png";

export const Partner = () => {
  return (
    <div className={clsx("w-full", "min-h-screen", "mt-40")}>
      <div
        className={clsx(
          "grid",
          "grid-cols-4",
          "md:grid-cols-7",
          "flex",
          "gap-3"
        )}
      >
        {Array.from({ length: 49 }, (_, index) => (
          <div
            key={index}
            className={clsx(
              "border-[1px]",
              "border-white",
              "rounded-full",
              "flex",
              "justify-center",
              "items-center",
              "mb-2",
              "w-full",
              "h-[35px]",
              "md:h-[85px]",
              "py-1",
              "px-2"
            )}
          >
            <Image
              src={partnerAltLogo}
              alt={"partnerAltLogo"}
              className={clsx("h-[30px]", "md:h-[85px]", "object-scale-down")}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
