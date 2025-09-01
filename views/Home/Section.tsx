import React from "react";

interface SectionProps {
  title: string;
  subTitle?: string;
  children: React.ReactNode;
  actionButton?: React.ReactNode;
}

const Section = ({ title, subTitle, children, actionButton }: SectionProps) => {
  return (
    <div className="my-8">
      <div className={"flex items-center gap-4 mb-5"}>
        <div className={"w-5 h-10 rounded bg-secondary2"} />
        <p className="font-semibold text-secondary2">{title}</p>
      </div>
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-semibold text-text2">{subTitle}</h2>
        {actionButton}
      </div>
      <div className="mt-[60px]">{children}</div>
    </div>
  );
};

export default Section;
