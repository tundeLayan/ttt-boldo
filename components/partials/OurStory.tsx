import React from 'react';
import Image from 'next/image';

import aboutAssets from '@/lib/assets/about';

const OurStory = () => {
    return (
        <section className="min-h-screen text-left  mx-auto">
            <div className="hidden lg:grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-y-[48px] gap-x-[50px] relative w-10/12 mx-auto top-[-82px]">
                <div className=" md:block relative w-full h-full pb-[56.25%] col-start-1 row-start-1">
                    <Image
                        src={aboutAssets.header1}
                        alt=""
                        layout="fill"
                        objectFit="contain"
                        className=""
                    />
                </div>
                <div className="relative w-full h-full pb-[56.25%] row-start-2 col-start-1">
                    <Image
                        src={aboutAssets.header2}
                        alt=""
                        layout="fill"
                        objectFit="contain"
                        className=""
                    />
                </div>
                <div className="relative w-full h-full pb-[112.5%] row-start-1 col-start-2 row-span-2">
                    <Image
                        src={aboutAssets.header3}
                        alt=""
                        layout="fill"
                        objectFit="contain"
                        className=""
                    />
                </div>
                <div className="relative w-full h-full pb-[56.25%] row-start-1 col-start-3">
                    <Image
                        src={aboutAssets.header4}
                        alt=""
                        layout="fill"
                        objectFit="contain"
                        className=""
                    />
                </div>
                <div className="relative w-full h-full pb-[56.25%] row-start-2 col-start-3">
                    <Image
                        src={aboutAssets.header5}
                        alt=""
                        layout="fill"
                        objectFit="contain"
                        className=""
                    />
                </div>
            </div>
            <div className="px-7 md:px-0 py-8 md:py-0 w-full md:w-[800px] mx-auto">
                <h5 className="font-openSans text-xl font-normal leading-[32px] mb-[12px]">
                    Our Story
                </h5>
                <p className="text-black text-5xl font-normal leading-[72px] mb-[30px]">
                    Handshake infographic mass market crowdfunding iteration.
                </p>
                <p className="text-primary-300 font-openSans text-xl font-normal leading-[32px]">
                    Conversion angel investor entrepreneur first mover
                    advantage. Handshake infographic mass market crowdfunding
                    iteration. Traction stock user experience deployment beta
                    innovator incubator focus. Sales user experience branding
                    growth hacking holy grail monetization conversion prototype
                    stock network effects. Learning curve network effects return
                    on investment bootstrapping business-to-consumer.
                </p>
            </div>
        </section>
    );
};

export default OurStory;
