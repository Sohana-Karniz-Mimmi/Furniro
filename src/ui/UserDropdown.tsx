import React from "react";
import { DropdownItem } from "./DropdownItem";

export function UserDropdown() {
  return (
    <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
      <div className="px-4 py-2 text-sm font-semibold text-gray-900">
        My Account
      </div>
      <div className="border-t border-gray-100" />
      <DropdownItem href="/profile" label="Profile" />
      <DropdownItem href="/orders" label="Orders" />
      <DropdownItem href="/settings" label="Settings" />
      <div className="border-t border-gray-100" />
      <DropdownItem href="/logout" label="Logout" />
    </div>
  );
}