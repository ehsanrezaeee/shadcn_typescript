import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import Link from "next/link";
import localFont from "next/font/local";
import { Vazirmatn } from "next/font/google";
import { cn } from "@/lib/utils";
const headingFont = localFont({ src: "../../public/fonts/font.woff2" });
const textFont = Vazirmatn({
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}
      >
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="h-6 mr-2 w-6" />
          No 1 Task Management
        </div>
        <h1 className="text-3xl lg:text-6xl mb-6 text-center text-neutral-900">
          Taskify helps team move
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md w-fit">
          Fuck Backward Forward
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className
        )}
      >
        مشقاتو راحت زمان بندی کن با تسکیفای
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href={"/sign-up"}>Get Taskify for Free</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
