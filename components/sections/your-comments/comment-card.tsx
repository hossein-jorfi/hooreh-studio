import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { comments } from "./contants";
import { CircleUserRound } from "lucide-react";

const CommentCard = ({ comment }: { comment: (typeof comments)[0] }) => (
  <Card className="h-full border-4 shadow-none rounded-3xl text-right">
    <CardHeader className="flex flex-row-reverse md:flex-row items-center gap-4 ">
      <CircleUserRound strokeWidth={1.5} className="size-8" />
      <p className="font-medium text-lg">{comment.author}</p>
    </CardHeader>
    <CardContent className=" pt-0">
      <p className="text-sm font-medium">{comment.content}</p>
    </CardContent>
  </Card>
);

export default CommentCard;
