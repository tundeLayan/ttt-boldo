import React from 'react';
import Image from 'next/image';

import aboutAssets from '@/lib/assets/about';

const OurStory = () => {
    return (
        <section className="min-h-screen text-left  mx-auto">
            <div className="hidden lg:grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-y-[48px] gap-x-[50px] relative w-10/12 mx-auto top-[-82px] h-[623px]">
                <div className="rounded-xl overflow-hidden col-span-1 row-span-1 ">
                    <Image
                        src={aboutAssets.header1}
                        alt=""
                        width={300}
                        height={285}
                        className="object-contain w-full h-full"
                        layout="responsive"
                        quality={90}
                    />
                </div>
                <div className="rounded-xl overflow-hidden col-span-1 row-span-2 ">
                    <Image
                        src={aboutAssets.header3}
                        alt=""
                        width={250}
                        height={250}
                        className="object-contain w-full h-full"
                        layout="responsive"
                        quality={90}
                    />
                </div>
                <div className="rounded-xl overflow-hidden col-span-1 row-span-1 ">
                    <Image
                        src={aboutAssets.header4}
                        alt=""
                        width={300}
                        height={285}
                        className="object-contain w-full h-full"
                        layout="responsive"
                        quality={90}
                    />
                </div>
                <div className="rounded-xl overflow-hidden col-span-1 row-span-1 ">
                    <Image
                        src={aboutAssets.header2}
                        alt=""
                        width={300}
                        height={285}
                        className="object-contain w-full h-full"
                        layout="responsive"
                        quality={90}
                    />
                </div>
                <div className="rounded-xl overflow-hidden col-span-1 row-span-1 ">
                    <Image
                        src={aboutAssets.header5}
                        alt=""
                        width={300}
                        height={285}
                        className="object-contain w-full h-full"
                        layout="responsive"
                        quality={90}
                    />
                </div>
            </div>
            <div className="px-7 md:px-5 pt-4 pb-[96px] w-full lg:w-[800px] mx-auto">
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
