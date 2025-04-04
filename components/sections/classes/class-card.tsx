import Image from "next/image";
import { ClassType } from "./constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BadgeCheck } from "lucide-react";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Link from "next/link";

const ClassCard = ({
  name,
  description,
  image,
  tags,
  status,
  technics,
  note,
  price,
  items,
}: ClassType) => {
  return (
    <div className="flex flex-col sm:flex-row gap-2 border-4 bg-muted/60 rounded-xl overflow-hidden">
      <div className="flex justify-center items-center">
        {image ? (
          <div className="w-full sm:w-[250px]">
            <AspectRatio ratio={1 / 1}>
              <Image src={image} alt={name} fill className="object-cover" />
            </AspectRatio>
          </div>
        ) : (
          <div className="p-5 w-fit sm:w-[250px] flex justify-center items-center">
            <Image src="/images/logo.png" alt="logo" width={100} height={0} />
          </div>
        )}
      </div>

      <div className="flex flex-col p-4 gap-3 justify-between">
        <div className="flex flex-col gap-1 lg:w-1/2">
          <h4 className="text-xl font-semibold">{name}</h4>
          <h4 className="font-medium text-foreground/90">{description}</h4>
          <div className="font-medium text-foreground/90">
            {items && items.map((item, index) => <p key={index}>- {item}</p>)}
          </div>
        </div>

        {note && (
          <p className="text-black/70 flex items-start gap-1 font-medium text-sm">
            <span className="size-4">
              <BadgeCheck strokeWidth={2.3} className="size-4" />
            </span>
            <span className="text-wrap">{note}</span>
          </p>
        )}

        <div className="flex flex-col gap-1">
          {technics && (
            <>
              <p className="text-sm font-bold">تکنیک های آموزشی:</p>
              <div className="flex gap-1 flex-wrap">
                {technics.map((item, index) => (
                  <Badge key={index} className="!text-sm font-bold">
                    {item}
                  </Badge>
                ))}
              </div>
            </>
          )}
        </div>

        <div>
          {status === "closed" && (
            <Badge className="!text-sm font-bold" variant="destructive">
              به اتمام رسیده است
            </Badge>
          )}
        </div>

        <div className="flex gap-1">
          {tags.map((i, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-white font-semibold"
            >
              {i}
            </Badge>
          ))}
        </div>
        {status === "open" && (
          <Button
            variant="primary"
            size="sm"
            className="mt-3 lg:w-1/2 font-bold !flex gap-2"
            asChild
          >
            <Link href="#contact">
              <span>{price}</span> <span>|</span> <span>ثبت نام</span>
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default ClassCard;
