import React from "react";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import type { Post } from "contentlayer/generated";

const PostCard = (post: Post) => {
  return (
    <div data-aos="fade-up" data-aos-duration="500" className="flex align-center transition-all duration-300 bg-zinc-100 hover:bg-zinc-200 rounded w-full p-4 mb-4">
      <div>
        <time dateTime={post.date} className="block text-sm text-slate-600">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time> 
        <h2 className="text-lg">
          <Link href={`/Post/${post.slug}`}>
            <a className="text-blue-700 hover:text-blue-900">{post.title}</a>
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default PostCard;
