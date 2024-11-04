import React from 'react';
import Link from 'next/link';

import { FooterLogo } from '@/app/_module/components/icons';

const Footer = () => {
    return (
        <footer className="px-10 lg:pl-[6.25rem] lg:pr-[11.1875rem] min-h-[29.625rem] flex items-center justify-center text-primary-300">
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[11.1875rem]">
                <div className="col-span-1">
                    <FooterLogo className="mb-[2.5rem]" />
                    <p className="mb-[4rem] text-base font-normal leading-7">
                        Social media validation business model canvas graphical
                        user interface launch party creative facebook iPad
                        twitter.
                    </p>
                    <p className="mb-[4rem] text-base font-normal leading-7">
                        All rights reserved.
                    </p>
                </div>
                <div className="col-span-2 grid gap-y-7 md:gap-y-0 grid-cols-2 md:grid-cols-3">
                    <div className="flex flex-col gap-8">
                        <h5 className="font-openSans text-xl font-bold leading-8 text-black">
                            Landings
                        </h5>
                        <div className="flex flex-col gap-6">
                            <Link
                                className="font-openSans text-base font-normal leading-[32px] hover:underline "
                                href="#"
                            >
                                Home
                            </Link>
                            <Link
                                className=" font-openSans text-base font-normal leading-[32px] hover:underline"
                                href="#"
                            >
                                Products
                            </Link>
                            <Link
                                className="font-openSans text-base font-normal leading-[32px] hover:underline"
                                href="#"
                            >
                                Services
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        <h5 className="font-openSans text-xl font-bold leading-8 text-black">
                            Company
                        </h5>
                        <div className="flex flex-col gap-6">
                            <Link
                                className="font-openSans text-base font-normal leading-[32px] hover:underline"
                                href="#"
                            >
                                Home
                            </Link>
                            <Link
                                className="font-openSans text-base font-normal leading-[32px] hover:underline"
                                href="#"
                            >
                                Careers
                            </Link>
                            <Link
                                className="font-openSans text-base font-normal leading-[32px] hover:underline"
                                href="#"
                            >
                                Services
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        <h5 className="font-openSans text-xl font-bold leading-8 text-black">
                            Landings
                        </h5>
                        <div className="flex flex-col gap-6">
                            <Link
                                className="font-openSans text-base font-normal leading-[32px] hover:underline"
                                href="#"
                            >
                                Blog
                            </Link>
                            <Link
                                className="font-openSans text-base font-normal leading-[32px] hover:underline"
                                href="#"
                            >
                                Products
                            </Link>
                            <Link
                                className="font-openSans text-base font-normal leading-[32px] hover:underline"
                                href="#"
                            >
                                Services
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
