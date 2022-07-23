import Link from "next/link";

const Header = () => {
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
      <hr/>
      </div>
    )
}

export default Header