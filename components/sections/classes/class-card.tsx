import Image from "next/image";
import { ClassType } from "./constants";
import { Badge } from "@/components/ui/badge";

const ClassCard = ({
  name,
  description,
  image,
  tags,
}: //   tags,
//   status,
//   date,
//   time,
ClassType) => {
  return (
    <div className="flex flex-col sm:flex-row gap-2 border-4 bg-muted rounded-xl overflow-hidden">
      <div className="flex justify-center items-center">
        <Image src={image} alt={name} width={400} height={400} />
      </div>

      <div className="flex flex-col p-4 gap-1 justify-between">
        <div>
          <h4 className="text-xl font-semibold">{name}</h4>
          <h4 className="lg:w-1/2 font-medium text-foreground/80">
            {description}
          </h4>
        </div>

        <div className="flex gap-1 mt-2">
          {tags.map((i, index) => (
            <Badge key={index} variant="secondary">{i}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
