import React from 'react';
import Link from 'next/link';

import { Button } from '@/app/_module/components';
import { Logo } from '@/app/_module/components/icons';

const Navbar = () => {
    return (
        <nav className="flex justify-between px-4 lg:px-[100px] pt-[56px] pb-2 bg-primary-100 text-white !border-0">
            <Logo />
            <ul className="hidden lg:flex gap-[40px] font-openSans [&>li]:nav-link items-center">
                <li className="">
                    <Link href="#">Product</Link>
                </li>
                <li className="">
                    <Link href="#">Services</Link>
                </li>
                <li className="">
                    <Link href="#">About</Link>
                </li>
                <li className="">
                    <Button label="Log in" />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
