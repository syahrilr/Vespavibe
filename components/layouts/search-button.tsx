import { Search } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { CommandDialog, CommandInput } from "../ui/command";

const SearchButton = () => {
    const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen((open) => !open)}
        variant="outline"
        className="relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2"
      >
        <Search className="h-4 w-4 xl:mr-2" aria-hidden="true" />
        <span className="hidden xl:inline-flex">Search products...</span>
        <span className="sr-only">Search products</span>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Search products..."
        />
      </CommandDialog>
    </>
  );
};

export default SearchButton;
