'use client';
import React, { useState } from 'react';
import Image from "next/image";
import { logo } from "@/../public/assets";
import BookNowBtn from "@/components/shared/bookNowButton";
import { ApplicationRoute } from "@/utils/routes";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  // Array for navigation links
  const navLinks = [
    { href: ApplicationRoute.HOME, label: "HOME" },
    { href: ApplicationRoute.ABOUT_US, label: "ABOUT US" },
    {
      label: "EXPLORE",
      dropdown: [
        { href: ApplicationRoute.ACCOMMODATION, label: "Accommodation" },
        { href: ApplicationRoute.BANQUET, label: "Banquet" },
        { href: ApplicationRoute.EVENTS, label: "Event" },
        { href: ApplicationRoute.DINING, label: "Restaurant" },
        { href: ApplicationRoute.GALLERY, label: "Gallery" },
      ],
    },
    { href: ApplicationRoute.CONTACT_US, label: "CONTACT US" },
  ];

  return (
      <header className="z-50 sticky top-0 overflow-visible">
        <div className="shadow section_gap_x bg-white">
          <div className="flex items-center justify-between py-5 relative max-w-[1650px] mx-auto">
            {/* Logo Section */}
            <div className="absolute -top-3 md:-top-5 xl:-top-5 left-0 bg-white rounded-lg p-2 md:p-4 hover:cursor-pointer"
            onClick={()=>router.push(ApplicationRoute.HOME)}>
              <div className="rounded-md bg-[#071B2B] p-3 px-3 md:px-8 flex justify-center items-center">
                <Image
                    src={logo} // Logo image
                    alt="Grand Minaro Logo"
                    className="w-8 md:w-10 lg:w-14 h-auto"
                    priority
                />
              </div>
            </div>

            {/* Navigation Links */}
            <nav
                className="hidden lg:flex md:space-x-5 xl:space-x-10 2xl:space-x-20 body-text
            md:ms-72 xl:ms-96 3xl:ms-[500px] 4xl:ms-[600px]
            font-cerapro_light text-gray-800 "
            >
              {navLinks.map((link, index) => {
                if (link.dropdown) {
                  return (
                      <div
                          key={index}
                          className="relative group"
                          onMouseEnter={() => setIsDropdownOpen(true)}
                          onMouseLeave={() => setIsDropdownOpen(false)}
                      >
                        <button
                            className="hover:text-green-600 transition flex items-center"
                            onClick={(e) => {
                              e.preventDefault();
                              setIsDropdownOpen(!isDropdownOpen);
                            }}
                        >
                          <span>{link.label}</span>
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              className="w-4 h-4 ml-2"  // Added margin-left to create extra space
                          >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute z-20 w-48 bg-white shadow-lg rounded-lg">
                              <ul className="py-2 text-sm text-gray-700">
                                {link.dropdown.map((item, subIndex) => (
                                    <li
                                        key={subIndex}
                                        className="hover:bg-gray-100 transition"
                                    >
                                      <button
                                          onClick={() => {
                                            router.push(item.href)
                                            setIsDropdownOpen(false);
                                          }}
                                          className="block px-4 py-2 text-gray-800"
                                      >
                                        {item.label}
                                      </button>
                                    </li>
                                ))}
                              </ul>
                            </div>
                        )}
                      </div>
                  );
                } else {
                  return (
                      <button
                          key={index}
                          onClick={() => {
                            router.push(link.href)
                            setIsDropdownOpen(false);
                          }}
                          className="hover:text-green-600 transition"
                      >
                        {link.label}
                      </button>
                  );
                }
              })}
            </nav>

            {/* Book Now Button */}
            <div className="hidden lg:flex">
              <BookNowBtn title={"Book Now"} handleOnClick={()=>router.push(ApplicationRoute.CONTACT_US)}/>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="lg:hidden text-gray-800 ml-auto"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
              >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 7.5h16.5M3.75 12h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </button>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-all duration-1000 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
              <div className={`fixed top-0 right-0 w-52 bg-white h-full shadow-lg z-50 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500`}>
                <button
                    className="text-black p-4"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                  ✕
                </button>
                <nav className="flex flex-col p-4 space-y-4">
                  {navLinks.map((link, index) => {
                    if (link.dropdown) {
                      return (
                          <div key={index} className="flex flex-col space-y-2">
                            <span>{link.label}</span>
                            {link.dropdown.map((item, subIndex) => (
                                <a
                                    key={subIndex}
                                    onClick={() => {
                                        router.push(item.href)
                                        setIsMobileMenuOpen(false);
                                }}
                                    className="text-gray-700 hover:text-green-600 transition ml-4"
                                >
                                  {item.label}
                                </a>
                            ))}
                          </div>
                      );
                    } else {
                      return (
                          <a
                              key={index}
                              onClick={() => {
                                router.push(link.href)
                                setIsMobileMenuOpen(false);
                              }}
                              className="text-gray-700 hover:text-green-600 transition"
                          >
                            {link.label}
                          </a>
                      );
                    }
                  })}
                  <div className="hidden mt-6">
                    <BookNowBtn title={"Book Now"} handleOnClick={()=>router.push(ApplicationRoute.CONTACT_US)}/>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
  );
};

export default NavBar;
