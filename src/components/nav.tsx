import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { DoorOpen } from "lucide-react";

const link = ["Modules", "Industries", "Pricing"];

const Nav = () => {
  return (
    <nav className="max-w-7xl px-16 py-4 border-b border-gray-200">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-8">
          <Image
            className="w-20 md:w-32"
            src={"/enerpize-logo.png"}
            alt="Enerpize Logo"
            width={120}
            height={120}
          />
          <div className="flex gap-6">
            {link.map((item) => (
              <Link className="font-medium" href="/" key={item}>
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex gap-4">
          <Button variant={"ghost"}>
            <DoorOpen className="w-4 h-4 mr-2" />
            text
          </Button>
          <Button>Try for free</Button>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
