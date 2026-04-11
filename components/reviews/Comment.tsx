"use client";

import { useState } from "react";
import { Button } from "../ui/button";

const Comment = ({ comment }: { comment: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  const longComment = comment.length > 130;
  const displayedComment =
    longComment && !isExpanded ? comment.slice(0, 130) + "..." : comment;

  return (
    <div>
      <p className="text-sm">{displayedComment}</p>
      {longComment && (
        <Button
          variant="link"
          className="pl-0 text-muted-foreground"
          onClick={toggleExpanded}
        >
          {isExpanded ? "Show less" : "Read more"}
        </Button>
      )}
    </div>
  );
};

export default Comment;
