import React, { useEffect, useState } from "react";

import imageWeb3Desktop from "../assets/images/image-web-3-desktop.jpg";
import imageWeb3Mobile from "../assets/images/image-web-3-mobile.jpg";

const Hero = () => {
  const [web3Image, setWeb3Image] = useState(imageWeb3Desktop);
  console.log(web3Image);
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
    addEventListener("resize", (event) =>
      changeImageDependingOnWindowWidth(event)
    );
    return () =>
      removeEventListener("resize", changeImageDependingOnWindowWidth);
  }, []);

  return (
    <main className="flex flex-col max-w-[1400px] mx-auto gap-12 p-4 lg:flex-row lg:gap-4">
      <section>
        <img src={web3Image} alt="" />
        <article className="flex flex-col gap-4 mt-4 lg:flex-row">
          <h1 className="font-bold text-4xl text-very-dark-blue flex-1 lg:text-6xl">
            The Bright Future of Web 3.0?
          </h1>
          <div className="flex flex-col gap-4 flex-1 lg:justify-between">
            <p className="text-dark-grayish-blue">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>

            <a
              href="#"
              className="text-sm px-6 py-3 bg-soft-red text-white tracking-[0.2em] w-[max-content] hover:bg-very-dark-blue transition-colors"
            >
              READ MORE
            </a>
          </div>
        </article>
      </section>
      <section className="p-4 bg-very-dark-blue text-gray-300 max-w-[365px] w-full">
        <h2 className="font-bold text-4xl text-soft-orange my-4">New</h2>

        <article className="border-b-[2px] border-b-gray-300 py-8 pt-4">
          <h3 className="text-2xl font-semibold text-off-white hover:text-soft-orange cursor-pointer">
            Hydrogen VS Electric Cars
          </h3>
          <p className="text-grayish-blue">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
        </article>

        <article className="border-b-[2px] border-b-gray-300 py-8">
          <h3 className="text-2xl font-semibold my-1 text-off-white hover:text-soft-orange cursor-pointer">
            The Downsides of AI Artistry
          </h3>
          <p className="text-grayish-blue">
            What are the adverse effects of on-demand Ai Image geration?
          </p>
        </article>

        <article className="py-8">
          <h3 className="text-2xl font-semibold my-1 text-off-white hover:text-soft-orange cursor-pointer">
            Is VC Funding Drying up?
          </h3>
          <p className="text-grayish-blue">
            Private Funding by VC firms is down 50% YOY. We take a look at what
            that means
          </p>
        </article>
      </section>
    </main>
  );
};

export default Hero;
