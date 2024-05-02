"use client";

import { Button } from "../ui/button";
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";
import SearchButton from "./search-button";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background py-3">
      <nav className="container px-2 sm:px-4 lg:px-6 flex items-center justify-between">
        {/* Left */}
        <MobileNav />
        <DesktopNav />

        {/* Right */}
        <div className="flex items-center gap-x-2">
          <SearchButton />
          <Button variant="default">
            Sign in
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
