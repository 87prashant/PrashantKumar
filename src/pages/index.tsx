import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/About">
        <a>About</a>
      </Link>
      <Link href="/Blog">
        <a>Blog</a>
      </Link>
      <div>This is the home Page</div>
    </div>
  );
};
