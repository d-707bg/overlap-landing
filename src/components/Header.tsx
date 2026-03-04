'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';

import Container from './Container';
import { menuItems } from '@/data/menuItems';
import Image from "next/image";
import DropdownMenu from './DropdownMenu';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 mx-auto w-full">
            <Container className="!px-0">
                <nav className="bg-white mx-auto flex justify-between items-center py-4 px-6 rounded-full border border-gray-200 mt-4 max-w-6xl shadow-sm">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/images/overlap-trans.png" alt="Logo" width={40} height={40} />
                        <span className="text-primary min-w-fit text-xl font-semibold">
                            Overlap
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-8 items-center">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                {item.hasDropdown ? (
                                    <DropdownMenu item={item} />
                                ) : (
                                    <Link href={item.url} className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                                        {item.text}
                                    </Link>
                                )}
                            </li>
                        ))}
                        <li>
                            <Link
                                href="/demo"
                                className="text-white bg-primary hover:ring-2 hover:ring-primary hover:ring-offset-2 hover:ring-offset-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-200"
                            >
                                Request demo
                            </Link>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="bg-blue-500 text-white focus:outline-none rounded-full w-10 h-10 flex items-center justify-center"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? (
                                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <HiBars3 className="h-6 w-6" aria-hidden="true" />
                            )}
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                    </div>
                </nav>
            </Container>

            {/* Mobile Menu with Transition */}
            <Transition
                show={isOpen}
                enter="transition ease-out duration-200 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div id="mobile-menu" className="md:hidden bg-white shadow-lg mt-20 mx-4 rounded-lg border border-gray-200">
                    <ul className="flex flex-col space-y-4 pt-6 pb-6 px-6">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <div>
                                    <Link href={item.url} className="text-gray-600 hover:text-gray-900 block font-medium" onClick={toggleMenu}>
                                        {item.text}
                                    </Link>
                                    {item.hasDropdown && item.dropdownItems && (
                                        <div className="ml-4 mt-2 space-y-2">
                                            {item.dropdownItems.map((dropdownItem) => (
                                                <Link
                                                    key={dropdownItem.url}
                                                    href={dropdownItem.url}
                                                    className="block text-sm text-gray-500 hover:text-gray-700 py-1"
                                                    onClick={toggleMenu}
                                                >
                                                    {dropdownItem.text}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </li>
                        ))}
                        <li>
                            <Link href="/demo" className="text-white bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full block w-fit" onClick={toggleMenu}>
                                Request demo
                            </Link>
                        </li>
                    </ul>
                </div>
            </Transition>
        </header>
    );
};

export default Header;
