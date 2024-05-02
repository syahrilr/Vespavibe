"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Icons } from "@/components/icons";

import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

const navItem = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Profile",
    href: "/profile",
  },
  {
    name: "Visi dan Misi",
    href: "/visi-misi",
  },
  {
    name: "Produk Kami",
    href: "/produk",
  },
  {
    name: "Kontak Kami",
    href: "/kontak",
  },
  {
    name: "About Us",
    href: "/about",
  },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex lg:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="px-2 flex flex-col gap-4">
            <Link
              href="/"
              className="flex items-center"
              onClick={() => setIsOpen(false)}
            >
              {/* <Icons.logo className="mr-2 h-4 w-4" aria-hidden="true" /> */}
              <span className="font-bold">VespaVibe</span>
              <span className="sr-only">Home</span>
            </Link>
            <div className="text-sm">
              {navItem.map((nav) => (
                <Link key={nav.name} href={nav.href} className="flex flex-row">
                  <Button variant="ghost" size="sm">
                    {nav.name}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
