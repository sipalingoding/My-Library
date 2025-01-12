import React from "react";
import { ModeToggle } from "./DarkMode";
import Logo from "./Logo";
import NavSearch from "./NavSearch";
import LinksDropdown from "./LinksDropdown";

function Navbar() {
  return (
    <div className="border-b">
      <div className="container flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 py-8 flex-wrap">
        <Logo />
        <NavSearch />
        <div className="flex gap-4 items-center">
          <ModeToggle />
          <LinksDropdown />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
