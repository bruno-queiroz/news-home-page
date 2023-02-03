import React from "react";

import retroPCImg from "../assets/images/image-retro-pcs.jpg";
import topLaptopsImg from "../assets/images/image-top-laptops.jpg";
import gamingGrowthImg from "../assets/images/image-gaming-growth.jpg";

const top3topics = () => {
  return (
    <section>
      <ol>
        <li>
          <article>
            <img src="" alt="" />
            <div>
              <span>01</span>
              <h2>Reviving Retro PCs</h2>
              <p>what happens when old PCs are given modern updates</p>
            </div>
          </article>
        </li>
        <li>
          <article>
            <img src="" alt="" />
            <div>
              <span>02</span>
              <h2>Top 10 Laptops of 2022</h2>
              <p>Our best picks for various needs and budgets</p>
            </div>
          </article>
        </li>
        <li>
          <article>
            <img src="" alt="" />
            <div>
              <span>03</span>
              <h2>The Growth of Gaming</h2>
              <p>How the pandemic has sparked fresh opportunities</p>
            </div>
          </article>
        </li>
      </ol>
    </section>
  );
};

export default top3topics;
