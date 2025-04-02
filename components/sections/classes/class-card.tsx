import Image from "next/image";
import { ClassType } from "./constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ClassCard = ({
  name,
  description,
  image,
  tags,
  status,
  date,
  time,
}: ClassType) => {
  return (
    <div className="flex flex-col sm:flex-row gap-2 border-4 bg-muted/60 rounded-xl overflow-hidden">
      <div className="flex justify-center items-center">
        <Image src={image} alt={name} width={400} height={400} />
      </div>

      <div className="flex flex-col p-4 gap-1 justify-between">
        <div>
          <h4 className="text-xl font-semibold">{name}</h4>
          <h4 className="lg:w-1/2 font-medium text-foreground/90">
            {description}
          </h4>
        </div>

        <div className="my-2">
          {status === "open" ? (
            <Badge className="!text-sm font-bold">
              تاریخ برگذاری - {date} - ساعت {time}
            </Badge>
          ) : (
            <Badge className="!text-sm font-bold" variant="destructive">
              به اتمام رسیده است
            </Badge>
          )}
        </div>

        <div className="flex gap-1 mt-2">
          {tags.map((i, index) => (
            <Badge key={index} variant="secondary" className="text-white font-semibold">
              {i}
            </Badge>
          ))}
        </div>
        {status === "open" && (
          <Button variant="primary" size="sm" className="mt-3 lg:w-1/2 font-bold">
            ثبت نام
          </Button>
        )}
      </div>
    </div>
  );
};

export default ClassCard;
