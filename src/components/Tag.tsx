import React from "react";

interface Props {
  tag: string;
}

const Tag = (props: Props) => {
  const { tag } = props;
  return (
    <div className="rounded-2xl border-blue-700 border-2 background-white px-[8px] mx-[4px]">
      {tag}
    </div>
  );
};

export default Tag;
