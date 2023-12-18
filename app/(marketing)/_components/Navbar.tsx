import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="fixed w-full top-0 shadow-sm bg-white flex items-center h-14 px-4">
      <div className="w-full justify-between md:max-w-screen-2xl mx-auto flex items-center">
        <Logo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button size="sm" variant="outline" asChild>
            <Link href={"/sign-in"}>Login</Link>
          </Button>
          <Button size={"sm"} asChild>
            <Link href="sign-up">Get Taskify for free</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
