import Link from "next/link";
import { socialItems } from "./contants";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const SocialMediaItem = ({ icon, text, link }: (typeof socialItems)[0]) => {
  return (
    <Link target="_blank" href={link} className="w-full flex gap-2">
      <Button size="icon"><ArrowRight /></Button>
      <div className="flex gap-2 items-center font-semibold text-foreground bg-foreground/20 px-2 py-1 rounded-lg border-2 border-foreground/80 w-full justify-end">
        <div>
          {text}
        </div>
        <div>{icon}</div>
      </div>
    </Link>
  );
};

export default SocialMediaItem;
