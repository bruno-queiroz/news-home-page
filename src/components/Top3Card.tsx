import React from "react";

interface Top3CardProps {
  img: string;
  title: string;
  description: string;
  numberList: string;
}

const Top3Card = ({ img, title, description, numberList }: Top3CardProps) => {
  return (
    <article className="flex gap-4">
      <img src={img} alt="" className="w-[130px]" />
      <div className="flex flex-col gap-2">
        <span className="text-4xl font-bold text-grayish-blue">
          {numberList}
        </span>
        <h2 className="font-bold hover:text-soft-red cursor-pointer">
          {title}
        </h2>
        <p className="text-dark-grayish-blue">{description}</p>
      </div>
    </article>
  );
};

export default Top3Card;
