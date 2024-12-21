"use client";

import { useState } from "react";
import Link from "next/link";
import { RiMenu3Line, RiCloseLine, RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="mt-[19px] mb-[19px] h-10 text-[#0D0E43] text-base font-semibold flex items-center pl-7 pr-7 md:pl-[50px] md:pr-[50px] xl:pl-[200px] xl:pr-[200px] 2xl:pl-[371px] 2xl:pr-[371px] relative">
      {/* Logo Section */}
      <div className="flex items-center mr-24">
        <Link href="/">
          <h1 className="text-[34px] font-bold">Hekto</h1>
        </Link>
        {/* Desktop Navigation */}
        <ul className="lg:flex hidden ml-[85px] items-center gap-5">
          <div className="relative group">
            <Link href="/">
              <li className="text-base font-medium text-[#FB2E86] hover:text-blue-500 cursor-pointer px-4 py-2">
                Home
              </li>
            </Link>
            {/* Hover Dropdown */}
            <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md w-40">
              <Link href="../about-us">
                <li className="px-4 py-2 text-[#FB2E86] hover:text-blue-500 hover:bg-gray-100 cursor-pointer">
                  About
                </li>
              </Link>
            </ul>
          </div>
          <RiArrowDropDownLine className="w-4 h-4 absolute left-[610px] text-[#FB2E86]" />
          <li>Pages</li>
          <Link href="../shop">
            <li>Products</li>
          </Link>
          <Link href="../blogs">
            <li>Blog</li>
          </Link>
          <Link href="../shop">
            <li>Shop</li>
          </Link>
          <Link href="../contact-us">
            <li>Contact</li>
          </Link>
        </ul>
      </div>

      {/* Menu Toggle Button */}
      <button
        className="lg:hidden absolute right-7 md:right-10 text-[#0D0E43] text-2xl focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
      </button>

      {/* Mobile Navigation */}
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } lg:hidden absolute top-14 left-0 w-full bg-white shadow-lg z-50 p-5`}
      >
        <Link href="/" onClick={closeMenu}>
          <li className="text-base font-medium text-[#FB2E86] hover:text-blue-500 cursor-pointer px-4 py-2">
            Home
          </li>
        </Link>
        <Link href="../about-us" onClick={closeMenu}>
          <li className="text-base font-medium hover:text-blue-500 cursor-pointer px-4 py-2">
            About
          </li>
        </Link>
        <Link href="../shop" onClick={closeMenu}>
          <li className="text-base font-medium hover:text-blue-500 cursor-pointer px-4 py-2">
            Products
          </li>
        </Link>
        <Link href="../blogs" onClick={closeMenu}>
          <li className="text-base font-medium hover:text-blue-500 cursor-pointer px-4 py-2">
            Blog
          </li>
        </Link>
        <Link href="../shop" onClick={closeMenu}>
          <li className="text-base font-medium hover:text-blue-500 cursor-pointer px-4 py-2">
            Shop
          </li>
        </Link>
        <Link href="../contact-us" onClick={closeMenu}>
          <li className="text-base font-medium hover:text-blue-500 cursor-pointer px-4 py-2">
            Contact
          </li>
        </Link>
      </ul>

      {/* Search Section */}
      <div className="relative hidden sm:flex items-center justify-center w-[250px] lg:w-[317px] h-[40px] overflow-hidden bg-white lg:ml-auto pr-2">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="w-full h-full p-1 lg:pl-3 text-sm text-gray-700 outline-none bg-white pr-[0px] border-[2px]"
        />
        <button className="absolute right-2 top-1/2 font-bold transform -translate-y-1/2 bg-[#FB2E86] w-[51px] h-[38px] flex items-center justify-center">
          <CiSearch className="w-6 h-7 text-white " />
        </button>
      </div>
    </div>
  );
}
