import React from "react";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import type { Post } from "contentlayer/generated";

interface Props {
  key: number;
  post: Post;
}

const PostCard = (params: Props) => {
  return (
    <div className="cursor-pointer">
      <Link href={`/Post/${params.post.url}`}>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          className="flex align-center transition-all duration-300 bg-zinc-100 hover:bg-zinc-200 rounded w-full p-4 mb-4"
        >
          <div>
            <h2 className="text-lg">
              <div className="text-blue-700">{params.post.title}</div>
            </h2>
            <time
              dateTime={params.post.date}
              className="block text-sm text-slate-600"
            >
              {format(parseISO(params.post.date), "LLLL d, yyyy")}
            </time>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
