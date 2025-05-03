import Link from "next/link";
import React from "react";

type DropdownItemProps = {
  href: string;
  label: string;
};

export function DropdownItem({ href, label }: DropdownItemProps) {
  return (
    <Link href={href} className="block px-4 py-2 text-sm hover:bg-gray-100">
      {label}
    </Link>
  );
}