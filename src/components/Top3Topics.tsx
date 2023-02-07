import React from "react";

import retroPCImg from "../assets/images/image-retro-pcs.jpg";
import topLaptopsImg from "../assets/images/image-top-laptops.jpg";
import gamingGrowthImg from "../assets/images/image-gaming-growth.jpg";
import Top3Card from "./Top3Card";

const top3topics = () => {
  return (
    <section className="p-4 mt-8">
      <ol className="flex flex-col gap-4 ">
        <li>
          <Top3Card
            {...{
              img: retroPCImg,
              title: "Reviving Retro PCs",
              description: "what happens when old PCs are given modern updates",
              numberList: "01",
            }}
          />
        </li>
        <li>
          <Top3Card
            {...{
              img: topLaptopsImg,
              title: "Top 10 Laptops of 2022",
              description: "Our best picks for various needs and budgets",
              numberList: "02",
            }}
          />
        </li>
        <li>
          <Top3Card
            {...{
              img: gamingGrowthImg,
              title: "The Growth of Gaming",
              description: "How the pandemic has sparked fresh opportunities",
              numberList: "03",
            }}
          />
        </li>
      </ol>
    </section>
  );
};

export default top3topics;
