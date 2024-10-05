"use client";

import { useEffect } from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import Link from "next/link";

import NavbarSidemenuButton from "./nav-sidemenu-button";
import { Button } from "@/components/ui/button";
import { DoorOpen } from "lucide-react";

const SideMenuItems = {
  Modules: "/",
  Industries: "/",
  Pricing: "/",
};

const menuItemsAnimationVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const menuItemAnimationVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

// TODO: refactor into components
const NavBarSidemenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <div className="h-full">
      <div className="flex h-full items-center">
        <motion.div animate={isOpen ? "open" : "closed"} initial="closed">
          <div className="relative flex h-full">
            <Button
              variant={"ghost"}
              data-testid="nav-menu-button"
              onClick={() => toggleOpen()}
              className="hover:text-ui-fg-base relative flex h-full items-center transition-all duration-200 ease-out focus:outline-none md:hidden"
            >
              <NavbarSidemenuButton />
            </Button>
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute inset-x-0 z-30 m-2 flex h-[calc(100vh-3rem)] w-full flex-col pr-4 text-sm backdrop-blur-2xl sm:min-w-min sm:pr-0"
              >
                <div
                  data-testid="nav-menu-popup"
                  className="rounded-rounded flex h-full flex-col justify-between bg-[rgba(255,255,255,0.5)] p-6"
                >
                  <motion.ul
                    variants={menuItemsAnimationVariants}
                    className="mt-8 flex flex-col items-center justify-start gap-12 pt-4"
                  >
                    {Object.entries(SideMenuItems).map(([name, href]) => {
                      return (
                        <motion.li
                          key={name}
                          variants={menuItemAnimationVariants}
                        >
                          <Link
                            href={href}
                            className="hover:text-ui-fg-disabled text-2xl leading-10"
                            onClick={() => toggleOpen()}
                            data-testid={`${name.toLowerCase()}-link`}
                          >
                            {name}
                          </Link>
                        </motion.li>
                      );
                    })}
                    <li className="w-full border-t border-gray-200" />
                    <Button
                      className="flex h-auto w-full p-4 text-2xl leading-10"
                      variant={"ghost"}
                    >
                      <DoorOpen className="mr-2 h-8 w-8" />
                      Log in
                    </Button>
                    <Button
                      className="flex h-auto w-full p-4 text-2xl leading-10"
                      variant={"secondary"}
                    >
                      Enerpize now
                    </Button>
                  </motion.ul>
                  <div className="flex flex-col gap-y-6">
                    <span className="txt-compact-small flex justify-between">
                      © {new Date().getFullYear()} Enerpize. All rights
                      reserved.
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default NavBarSidemenu;
