import React from "react";
import { Input } from "../ui/input";

function NavSearch() {
  return (
    <div>
      <Input
        type="text"
        className="max-w-xs dark:bg-muted"
        placeholder="find your book here..."
      />
    </div>
  );
}

export default NavSearch;
