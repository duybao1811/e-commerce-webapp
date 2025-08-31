import React from "react";
import Link from "next/link";

interface Props {
  title: string;
  content: string;
  link: string;
}

const NewArrivalContent = ({ title, content, link }: Props) => {
  return (
    <div className={"flex flex-col gap-4 text-text"}>
      <p className={"font-semibold text-2xl"}>{title}</p>
      <p className={"whitespace-pre-line text-sm"}>{content}</p>
      <Link href={link} className={"font-medium underline"}>
        Shop Now
      </Link>
    </div>
  );
};

export default NewArrivalContent;
