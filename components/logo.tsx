import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
const headingFont = localFont({ src: "../public/fonts/font.woff2" });

const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="hover:opacity-60 transition items-center gap-x-2 hidden md:flex">
        <Image alt="logo" height={30} width={30} src={"/images/logo.svg"} />
        <p
          className={cn("textlg text-neutral-700 pb-1", headingFont.className)}
        >
          Taskify
        </p>
      </div>
    </Link>
  );
};

export default Logo;
