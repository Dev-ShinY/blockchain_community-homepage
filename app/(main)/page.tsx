import { Boxs } from "./boxs";
import { Introduction } from "./introduction";
import { Partner } from "./partner";
import { Skill } from "./skill";
import { Intro } from "./intro";

export default function Home() {
  return (
    <main>
      <>
        <meta
          name="description"
          content={"[company-name] who are serious about blockchain"}
        />
        <meta
          name="keywords"
          content={
            "[company-name], Web3, blockchain, Marketing, Web3 Marketing, Web3 Community, Blockchain Research, Content creation, AMA, blockchain Marketing, offline event"
          }
        />
        <meta name="robots" content="index,follow" />
        <meta property="og:locale" content="us_EN" />
        <meta property="og:type" content={"website"} />
        <meta property="og:site_name" content={"[company-name]"} />
        <meta property="og:title" content={"[company-name]"} />
        <meta property="og:url" content={"https://www.[company-name].kr/"} />
        <meta
          property="og:description"
          content={"[company-name] who are serious about blockchain"}
        />
        <meta property="og:image" content={"https://dummy-logo.jpg"} />
        <meta property="og:image:alt" content={"[company-name]"} />
      </>
      <Intro />
      <div className="flex min-h-screen flex-col items-center justify-between px-7 md:px-20 xl:px-36">
        <Skill />
        <Introduction />
        <Boxs />
        <Partner />
      </div>
    </main>
  );
}
