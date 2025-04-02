import { ScrollArea } from "@/components/ui/scroll-area";
import { comments } from "./contants";
import CommentCard from "./comment-card";
import SectionWrapper from "@/components/shared/section-wrapper";

const YourComments = () => {
  return (
    <SectionWrapper title="نظرات شما">
      {/* Mobile view with horizontal scrolling */}
      <div className="md:hidden">
        <ScrollArea
          className="w-full whitespace-nowrap pb-4"
          // orientation="horizontal"
        >
          <div className="flex gap-4">
            {comments.map((comment, index) => (
              <div key={index} className="w-[280px] flex-shrink-0">
                <CommentCard comment={comment} />
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Desktop view with grid layout */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {comments.map((comment, index) => (
          <CommentCard key={index} comment={comment} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default YourComments;
