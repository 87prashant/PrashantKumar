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
          className="flex align-center border-2 transition-all duration-300 bg-zinc-100 hover:bg-zinc-200 dark:hover:bg-[#0d0d0d] active:border-black dark:bg-black dark:border-neutral-900 active:dark:border-white rounded w-full p-4 mb-4"
        >
          <div>
            <div className="text-lg font-semibold mb-2 text-blue-700">
              {params.post.title}
            </div>
            <time dateTime={params.post.date} className="block text-sm">
              {format(parseISO(params.post.date), "LLLL d, yyyy")}
            </time>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
