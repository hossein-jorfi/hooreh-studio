import Image from "next/image";
import { ClassType } from "./constants";

const ClassCard = ({
  name,
  description,
  image,
}: //   tags,
//   status,
//   date,
//   time,
ClassType) => {
  return (
    <div className="flex gap-2">
      <div>
        <Image src={image} alt={name} width={500} height={500} />
      </div>

      <div className="flex flex-col">
        <h4 className="text-xl font-semibold">{name}</h4>
        <h4 className="font-semibold">{description}</h4>
      </div>
    </div>
  );
};

export default ClassCard;
