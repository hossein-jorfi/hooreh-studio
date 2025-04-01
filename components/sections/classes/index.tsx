import SectionWrapper from "@/components/shared/section-wrapper";
import { classes } from "./constants";
import ClassCard from "./class-card";

const Classes = () => {
  return (
    <SectionWrapper title="کلاس ها و ورکشاپ های هوره">
      <div className="grid grid-cols-1 gap-5">
        {classes.map((item, index) => (
          <ClassCard key={index} {...item} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Classes;
