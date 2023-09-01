import clsx from "clsx";
import { Box } from "./box";

export const Boxs = () => {
  const contents = [
    {
      title: "Lorem Ipsum",
      des: "**Lorem Ipsum** is simply dummy text of the printing and typesetting industry. **Lorem Ipsum** has been the industry's standard **dummy text** ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "Lorem Ipsum",
      des: "**Lorem Ipsum** is simply dummy text of the printing and typesetting industry. **Lorem Ipsum** has been the industry's standard **dummy text** ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "Lorem Ipsum",
      des: "**Lorem Ipsum** is simply dummy text of the printing and typesetting industry. **Lorem Ipsum** has been the industry's standard **dummy text** ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "Lorem Ipsum",
      des: "**Lorem Ipsum** is simply dummy text of the printing and typesetting industry. **Lorem Ipsum** has been the industry's standard **dummy text** ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "Lorem Ipsum",
      des: "**Lorem Ipsum** is simply dummy text of the printing and typesetting industry. **Lorem Ipsum** has been the industry's standard **dummy text** ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "Lorem Ipsum",
      des: "**Lorem Ipsum** is simply dummy text of the printing and typesetting industry. **Lorem Ipsum** has been the industry's standard **dummy text** ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "Lorem Ipsum",
      des: "**Lorem Ipsum** is simply dummy text of the printing and typesetting industry. **Lorem Ipsum** has been the industry's standard **dummy text** ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "Lorem Ipsum",
      des: "**Lorem Ipsum** is simply dummy text of the printing and typesetting industry. **Lorem Ipsum** has been the industry's standard **dummy text** ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "Lorem Ipsum",
      des: "**Lorem Ipsum** is simply dummy text of the printing and typesetting industry. **Lorem Ipsum** has been the industry's standard **dummy text** ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "Lorem Ipsum",
      des: "**Lorem Ipsum** is simply dummy text of the printing and typesetting industry. **Lorem Ipsum** has been the industry's standard **dummy text** ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  return (
    <div className={clsx("w-full")}>
      <div className={clsx("grid", "grid-cols-1", "md:grid-cols-5")}>
        {contents.map((item) => (
          <Box key={item.title} title={item.title} des={item.des} />
        ))}
      </div>
    </div>
  );
};
