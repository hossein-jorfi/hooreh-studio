import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

// Mock data for comments
const comments = [
  {
    id: 1,
    author: "Alex Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "AJ",
    content:
      "This is exactly what I was looking for! The documentation is so clear and helpful.",
  },
  {
    id: 2,
    author: "Sam Rivera",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "SR",
    content:
      "I've been using this for my project and it's been a game changer. Highly recommend!",
  },
  {
    id: 3,
    author: "Taylor Kim",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "TK",
    content:
      "The integration was seamless. I was able to get everything up and running in minutes.",
  },
  {
    id: 4,
    author: "Jordan Lee",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "JL",
    content:
      "This solved a major pain point for our team. We're now able to move much faster.",
  },
  {
    id: 5,
    author: "Casey Morgan",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "CM",
    content:
      "Great work! The attention to detail really shows. Looking forward to future updates.",
  },
  {
    id: 6,
    author: "Riley Patel",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "RP",
    content:
      "I've tried several similar solutions, but this one stands out for its simplicity and power.",
  },
];

const YourComments = () => {
  const CommentCard = ({ comment }: { comment: (typeof comments)[0] }) => (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center gap-4 p-4">
        <Avatar>
          <AvatarImage src={comment.avatar} alt={comment.author} />
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
            {comments.map((comment) => (
              <div key={comment.id} className="w-[280px] flex-shrink-0">
                <CommentCard comment={comment} />
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Desktop view with grid layout */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {comments.map((comment) => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default YourComments;
