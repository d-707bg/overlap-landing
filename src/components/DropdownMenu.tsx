'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { HiChevronDown } from 'react-icons/hi2';
import { IMenuItem } from '@/types';

interface DropdownMenuProps {
    item: IMenuItem;
    onClose?: () => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ item, onClose }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleItemClick = () => {
        setIsOpen(!isOpen);
        if (onClose) onClose();
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={handleItemClick}
                className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1 text-sm"
            >
                {item.text}
                <HiChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isOpen && item.dropdownItems && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    <div className="py-2">
                        {item.dropdownItems.map((dropdownItem) => (
                            <Link
                                key={dropdownItem.url}
                                href={dropdownItem.url}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                                onClick={() => {
                                    setIsOpen(false);
                                    if (onClose) onClose();
                                }}
                            >
                                {dropdownItem.text}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
