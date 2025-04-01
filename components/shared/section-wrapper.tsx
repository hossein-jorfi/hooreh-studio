import { ReactNode } from "react";

interface Params {
  title: string;
  children: ReactNode;
}

const SectionWrapper = ({ title, children }: Params) => {
  return (
    <div className="flex flex-col gap-2.5">
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default SectionWrapper;
