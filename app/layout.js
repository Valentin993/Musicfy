import localFont from "next/font/local";
import Link from "next/link";
import "./globals.css";

const swiza = localFont({
  src: [
    {
      path: "./fonts/swiza-regular-webfont.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/swiza-medium-webfont.woff2",
      weight: "500",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "Musicfy - Elevate Your Music Experience",
  description:
    "Musicify is a music streaming platform that allows you to listen to your favorite music as well as given insights and analytics on your music.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${swiza.className} antialiased`}>
        <header>
          <div className="container px-4">
            <nav className="flex items-center justify-between py-4 flex-wrap">
              <div>
                <Link className="font-medium text-xl" href="/">
                  Musicfy
                </Link>
              </div>

              <ul className="flex font-regular text-sm space-x-8">
                <li>
                  <Link href="/trending">Trending</Link>
                </li>
                <li>
                  <Link href="/artists">Artists</Link>
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
                  className="font-medium text-sm bg-black text-white px-5 py-2 rounded-sm"
                  href=""
                >
                  Get started
                </Link>
              </div>
            </nav>
          </div>
        </header>
        {children}

        <footer className="bg-black text-white pt-10 pb-7">
          <div className="container px-4">
            <div className="flex flex-col lg:flex-row justify-between lg:items-center">
              <span className="block font-semibold text-[90px] lg:text-[200px]">
                Musicfy
              </span>
              <div className="flex justify-between lg:space-x-14 mt-9">
                <ul className="text-sm space-y-4">
                  <li>
                    <Link href="">Imprint</Link>
                  </li>
                  <li>
                    <Link href="">Legal</Link>
                  </li>
                  <li>
                    <Link href="">Privacy Policy</Link>
                  </li>
                </ul>

                <ul className="space-y-4 flex flex-col items-center">
                  <li>
                    <Link href="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M18.3941 5.1886C18.3355 5.1336 18.2583 5.1054 18.1761 5.1104C17.0419 5.1844 16.1313 4.951 15.3965 4.3966C14.4021 3.646 13.9265 2.562 13.8069 0.7716C13.7965 0.619 13.6695 0.5 13.5161 0.5H10.5111C10.3503 0.5 10.2199 0.6304 10.2199 0.7912C10.2213 4.7036 10.2231 8.1344 10.2127 12.2516C10.2185 12.6324 10.7869 12.638 10.7953 12.2532C10.8059 8.22 10.8029 4.9016 10.8025 1.0826H13.2465C13.3657 3.5682 14.9501 5.8144 17.9037 5.7052V8.2796C16.6583 8.194 15.4667 8.1356 14.3277 7.5374C14.0275 7.4422 13.3899 6.9446 13.2759 7.5022C13.2439 7.7568 13.3135 11.9042 13.3003 13.2246C13.1423 20.3664 3.06726 21.0592 2.12046 13.7792C1.83766 10.8912 4.05926 8.1578 6.97186 7.8102C7.35386 7.7576 7.28146 7.1922 6.90286 7.2318C3.68326 7.6158 1.22766 10.6402 1.54086 13.8362C2.58586 21.857 13.7083 21.0952 13.8829 13.2182C13.8957 11.7706 13.8403 8.9922 13.8513 7.963C14.4053 8.2078 14.9477 8.4724 15.5249 8.597C16.4023 8.7872 17.2851 8.8002 18.1659 8.8888C18.3327 8.9092 18.4899 8.7664 18.4863 8.599V5.4016C18.4863 5.3208 18.4529 5.2438 18.3941 5.1886Z"
                          fill="white"
                        />
                        <path
                          d="M4.58521 13.3506C4.63761 16.7574 9.31161 17.7046 10.6064 14.4954C10.664 14.3452 10.5888 14.1768 10.4386 14.1194C10.2882 14.0616 10.12 14.1368 10.0624 14.2872C9.01481 16.8894 5.21121 16.1232 5.16781 13.349C5.16441 12.0956 6.032 11.0418 7.2308 10.843C7.664 10.7724 8.17121 10.837 8.6332 10.8348C8.79421 10.8348 8.92441 10.7044 8.92441 10.5436V7.51156C8.91861 7.13156 8.3486 7.12636 8.3418 7.51156V10.2464C6.3702 9.97116 4.59281 11.259 4.58521 13.3506Z"
                          fill="white"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="19"
                        viewBox="0 0 26 19"
                        fill="none"
                      >
                        <path
                          d="M5.2409 2.21313L11.2617 10.2513L5.20288 16.7867H6.56649L11.871 11.0649L16.1569 16.7867H20.7973L14.4377 8.29639L20.0773 2.21313H18.7137L13.8285 7.48283L9.88131 2.21313H5.2409ZM7.24619 3.21604H9.378L18.7917 15.7837H16.6599L7.24619 3.21604Z"
                          fill="white"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_90_10051)">
                          <path
                            d="M12.765 1.125H5.235C2.96511 1.125 1.125 2.96511 1.125 5.235V12.765C1.125 15.0349 2.96511 16.875 5.235 16.875H12.765C15.0349 16.875 16.875 15.0349 16.875 12.765V5.235C16.875 2.96511 15.0349 1.125 12.765 1.125Z"
                            stroke="white"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M9 13.125C11.2782 13.125 13.125 11.2782 13.125 9C13.125 6.72183 11.2782 4.875 9 4.875C6.72183 4.875 4.875 6.72183 4.875 9C4.875 11.2782 6.72183 13.125 9 13.125Z"
                            stroke="white"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M13.5 4.125C13.7071 4.125 13.875 3.95711 13.875 3.75C13.875 3.54289 13.7071 3.375 13.5 3.375C13.2929 3.375 13.125 3.54289 13.125 3.75C13.125 3.95711 13.2929 4.125 13.5 4.125Z"
                            stroke="white"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_90_10051">
                            <rect width="18" height="18" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-xs mt-20">
              &copy;2025 Musicfy. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
