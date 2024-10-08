import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { DoorOpen } from "lucide-react";
import NavBarSidemenu from "./nav-sidemenu";

const link = ["Modules", "Industries", "Pricing"];

const Nav = () => {
  return (
    <nav className="border-b border-gray-200 px-4 py-4 md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-8">
            <Image
              className="w-24 md:w-32"
              src={"/enerpize-logo.png"}
              alt="Enerpize Logo"
              width={120}
              height={120}
            />
            <div className="hidden gap-6 md:flex">
              {link.map((item) => (
                <Link className="font-medium" href="/" key={item}>
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex gap-4">
            <Button className="hidden md:flex" variant={"ghost"}>
              <DoorOpen className="mr-2 h-4 w-4" />
              Log in
            </Button>
            <Button>Try for free</Button>
            <NavBarSidemenu />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
