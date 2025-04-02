import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

// Mock data for comments
const comments = [
  {
    author: "نام کاربر",
    initials: "نم",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز",
  },
  {
    author: "نام کاربر",
    initials: "نم",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز",
  },
  {
    author: "نام کاربر",
    initials: "نم",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز",
  },
  {
    author: "نام کاربر",
    initials: "نم",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز",
  },
  {
    author: "نام کاربر",
    initials: "نم",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز",
  },
  {
    author: "نام کاربر",
    initials: "نم",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز",
  },
  {
    author: "نام کاربر",
    initials: "نم",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز",
  },
  {
    author: "نام کاربر",
    initials: "نم",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز",
  },
  
];

const YourComments = () => {
  const CommentCard = ({ comment }: { comment: (typeof comments)[0] }) => (
    <Card className="h-full border-4">
      <CardHeader className="flex flex-row items-center gap-4 p-4">
        <Avatar>
          <AvatarImage src={""} alt={comment.author} />
          <AvatarFallback>{comment.initials}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <p className="font-medium">{comment.author}</p>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm">{comment.content}</p>
      </CardContent>
    </Card>
  );

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Comments</h2>

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
    </div>
  );
};

export default YourComments;
