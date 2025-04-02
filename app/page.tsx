import Classes from "@/components/sections/classes";
import Faq from "@/components/sections/faq";
import Gallery from "@/components/sections/gallery";
import YourComments from "@/components/sections/your-comments";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 sm:gap-15 custom-container">
      <Gallery />
      <Classes />
      <YourComments />
      <Faq />
    </div>
  );
}
