"use client"

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  NavigationMenu
} from "../ui/navigation-menu";

const navItem = [
    {
        name : "Home",
        href: "/"
    },
    {
        name : "Profile",
        href: "/profile"
    },
    {
        name : "Visi dan Misi",
        href: "/visi-misi"
    },
    {
        name : "Produk Kami",
        href: "/produk"
    },
    {
        name : "Kontak Kami",
        href: "/kontak"
    },
    {
        name : "About Us",
        href: "/about"
    },
    {
      name: "Gallery",
      href: "/gallery"
    }
]

const DesktopNav = () => {

  return (
    <div className="hidden lg:flex gap-x-8 items-center">
      <Link href="/" className="flex space-x-2 items-center">
        <Image
          src="/logo.jpg"
          alt="logo"
          height={37.376}
          width={91.876}
          aria-hidden="true"
        />
        <span className="sr-only">Home</span>
      </Link>
      <NavigationMenu>
          {navItem.map((nav) => (
            <Link key={nav.name} href={nav.href}>
                <Button
                  variant="ghost"
                  size="sm"
                >
                  {nav.name}
                </Button>
            
            </Link>
          ))}
      </NavigationMenu>
    </div>
  );
};

export default DesktopNav;
