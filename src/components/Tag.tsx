import React from "react";

interface Props {
    key: number
    tag: string
}

const Tag = (props: Props) => {
    const {key, tag} = props
  return (
    <div className="rounded-lg border-white background-white w-[100px]">
      {tag}
    </div>
  );
};

export default Tag;
