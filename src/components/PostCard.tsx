import React from "react";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import type { Post } from "contentlayer/generated";

const PostCard = (post: Post) => {
  return (
    <div className="flex align-center transition-all duration-300 hover:bg-zinc-200 rounded w-full p-4">
      <div>
        <time dateTime={post.date} className="block text-sm text-slate-600">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time> 
        <h2 className="text-lg">
          <Link href={post.url}>
            <a className="text-blue-700 hover:text-blue-900">{post.title}</a>
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default PostCard;
