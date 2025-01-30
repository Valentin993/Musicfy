import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <header>
      <div className="container">
        <nav className="flex items-center justify-between py-[22px]">
          <div>
            <span className="font-medium text-xl">Musicfy</span>
          </div>

          <ul className="flex font-regular text-sm space-x-8">
            <li>
              <Link href="/trending">Trending</Link>
            </li>
            <li>
              <Link href="/artist">Artist</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/about-us">About us</Link>
            </li>
          </ul>

          <div className="flex items-center space-x-8">
            <Link className="text-sm" href="">
              Log In
            </Link>
            <Link
              className="font-medium text-sm text-center bg-black text-white px-2 py-2 rounded-sm"
              href=""
            >
              Get started
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
