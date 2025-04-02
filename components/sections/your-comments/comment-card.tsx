import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { comments } from "./contants";

const CommentCard = ({ comment }: { comment: (typeof comments)[0] }) => (
  <Card className="h-full border-4 shadow-none rounded-3xl">
    <CardHeader className="flex flex-row items-center gap-4 ">
      <Avatar>
        <AvatarImage src={""} alt={comment.author} />
        <AvatarFallback>{comment.initials}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <p className="font-medium">{comment.author}</p>
      </div>
    </CardHeader>
    <CardContent className=" pt-0">
      <p className="text-sm">{comment.content}</p>
    </CardContent>
  </Card>
);

export default CommentCard;
