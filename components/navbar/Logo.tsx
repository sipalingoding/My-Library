import React from "react";
import { FaSwatchbook } from "react-icons/fa";
import { Button } from "../ui/button";
import Link from "next/link";

function Logo() {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <FaSwatchbook className="w-6 h-6" />
      </Link>
    </Button>
  );
}

export default Logo;
