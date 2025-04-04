import Link from "next/link";
import { socialItems } from "./contants";

const SocialMediaItem = ({ icon, text, link }: (typeof socialItems)[0]) => {
  return (
    <div className="flex gap-3 items-center">
      <div className="">{icon}</div>
      <Link href={link}>{text}</Link>
    </div>
  );
};

export default SocialMediaItem;
