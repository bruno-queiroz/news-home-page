import React, { useEffect, useState } from "react";

import imageWeb3Desktop from "../assets/images/image-web-3-desktop.jpg";
import imageWeb3Mobile from "../assets/images/image-web-3-mobile.jpg";

const Hero = () => {
  const [web3Image, setWeb3Image] = useState(imageWeb3Desktop);

  useEffect(() => {
    const changeImageDependingOnWindowWidth = (event: UIEvent) => {
      const window = event.target as Window;
      console.log(window.innerWidth);
      if (window.innerWidth >= 640) {
        setWeb3Image(imageWeb3Desktop);
      } else {
        setWeb3Image(imageWeb3Mobile);
      }
    };
    addEventListener("resize", () => changeImageDependingOnWindowWidth);
    return () =>
      removeEventListener("resize", changeImageDependingOnWindowWidth);
  }, []);
  return (
    <main className="p-4">
      <section>
        <img src={web3Image} alt="" />
        <article className="flex flex-col gap-4 mt-4 sm:flex-row">
          <h1 className="font-bold text-4xl flex-1 sm:text-6xl">
            The Bright Future of Web 3.0?
          </h1>
          <div className="flex flex-col gap-4 flex-1 sm:justify-between">
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>

            <a
              href="#"
              className="px-4 py-2 bg-orange-400 text-white tracking-widest w-[max-content]"
            >
              Read More
            </a>
          </div>
        </article>
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
