"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { UserIcon } from "@/ui/icons/UserIcon";
import { SearchIcon } from "@/ui/icons/SearchIcon";
import { HeartIcon } from "@/ui/icons/HeartIcon";
import { CartIcon } from "@/ui/icons/CartIcon";
import { IconButton } from "@/ui/IconButton";
import { UserDropdown } from "@/ui/UserDropdown";
import { BadgeIcon } from "@/ui/BadgeIcon";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsUserDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="layout_container sticky top-0 z-50 w-full bg-white md:py-[30px] py-[20px]">
      <div className="flex items-center md:gap-[266px] h-[41px] md:pl-[54px] md:pr-[100px] md:justify-start justify-between ">
        <div className="flex">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden mr-[8px] rounded-md"
            aria-label="toggle-menu"
          >
            <Menu className="h-[24px] w-[24px]" />
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-[5px]">
            <div className="w-[30px] h-[19px] md:w-[50px] md:h-[32px] relative">
              <Image
                src="/images/logo.png"
                alt="furniro-logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-[20px] md:text-[34px] font-bold font-montserrat">
              Furniro
            </span>
          </Link>
        </div>

        {/* Desktop nav */}
        <div className="flex items-center md:gap-[158px]">
          <nav className="hidden flex-1 justify-center md:flex">
            <ul className="flex gap-[75px]">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-[16px] font-medium">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right icons */}
          <div className=" flex items-center gap-[20px] md:gap-[45px]">
            {/* User Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <IconButton
                icon={<UserIcon />}
                label="user-account"
                onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
              />
              {isUserDropdownOpen && <UserDropdown />}
            </div>
            <div className="hidden md:flex">
              <IconButton icon={<SearchIcon />} label="search" />
            </div>
            <BadgeIcon icon={<HeartIcon />} label="wishlist" count={3} />
            <BadgeIcon icon={<CartIcon />} label="cart" count={2} />
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[75px] z-40 bg-white px-[16px]">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute right-[16px] top-[4px] rounded-md p-[8px]  hover:bg-gray-100"
          >
            <X className="h-[24px] w-[24px]" />
          </button>
          <ul className="mt-[10px] space-y-[16px]">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block text-[16px] font-medium transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
