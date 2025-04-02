import { ReactNode } from "react";

interface Params {
  title?: string;
  children?: ReactNode;
}

const SectionWrapper = ({ title, children }: Params) => {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">{title}</h3>
      {children}
    </div>
  );
};

export default SectionWrapper;
