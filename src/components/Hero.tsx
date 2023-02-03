import React from "react";

import imageWeb3Desktop from "../assets/images/image-web-3-desktop.jpg";
import imageWeb3Mobile from "../assets/images/image-web-3-mobile.jpg";

const Hero = () => {
  return (
    <main>
      <section>
        <img src="" alt="" />
        <h1>The Bright Future of Web 3.0?</h1>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
            sunt quisquam adipisci pariatur nobis! Eveniet id repellat quis
            molestias harum vel eaque,
          </p>

          <a href="">Read More</a>
        </div>
      </section>
      <section>
        <h2>New</h2>

        <article>
          <h3>Hydrogen VS Electric Cars</h3>
          <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
        </article>

        <article>
          <h3>The Downsides of AI Artistry</h3>
          <p>What are the adverse effects of on-demand Ai Image geration?</p>
        </article>

        <article>
          <h3>Is VC Funding Drying up?</h3>
          <p>
            Private Funding by VC firms is down 50% YOY. We take a look at what
            that means
          </p>
        </article>
      </section>
    </main>
  );
};

export default Hero;
