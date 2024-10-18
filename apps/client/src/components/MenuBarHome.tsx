import React from "react";
import { FloatingDock } from "./ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import { FaBookOpenReader } from "react-icons/fa6";
import { TfiWrite } from "react-icons/tfi";
import { Target } from "lucide-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "Read blogs",
      icon: (
        <FaBookOpenReader color="white"/>
      ),
      href: "/bulk",
    },

    {
      title: "Signup",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-300" />
      ),
      href: "/signup",
    },
    {
      title: "Login",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-300" />
      ),
      href: "login",
    },
    {
      title: "Write",
      icon: (
          <TfiWrite color="white"></TfiWrite>
      ),
      href: "/create",
    },
    {
      title: "Clients",
      icon: (
        <IconExchange className="h-full w-full text-neutral-300" />
      ),
      href: "/connect",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-300" />
      ),
      href: "https://github.com/TanmayChaurasia24/TTM",
    },
  ];
  return (
    <div className="flex items-center justify-center w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
