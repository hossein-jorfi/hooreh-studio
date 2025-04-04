import Link from "next/link";
import { socialItems } from "./contants";

const SocialMediaItem = ({ icon, text, link }: (typeof socialItems)[0]) => {
  return (
    <div className="flex gap-3 items-center">
      <Link target="_blank" href={link}>{text}</Link>
      <div className="">{icon}</div>
    </div>
  );
};

export default SocialMediaItem;
