import Classes from "@/components/sections/classes";
import Gallery from "@/components/sections/gallery";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 custom-container">
      <Gallery />
      <Classes />
    </div>
  );
}
