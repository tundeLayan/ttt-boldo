import React from 'react';
import Image from 'next/image';

import aboutAssets from '@/lib/assets/about';

const OurTeam = () => {
    return (
        <section className="min-h-fit text-left px-10 xl:px-[200px] pt-[96px] pb-[120px]">
            <div className="w-full xl:w-[800px] mx-auto mb-[52px]">
                <h5 className="font-openSans text-xl font-normal leading-8 text-primary-300 mb-3">
                    Our team
                </h5>
                <p className="font-manrope text-5xl font-normal leading-[72px] mb-[22.5px] text-black">
                    The leadership team
                </p>
                <p className="font-openSans text-xl font-normal leading-8">
                    Conversion angel investor entrepreneur first mover
                    advantage. Handshake infographic mass market crowdfunding
                    iteration. Traction stock user experience deployment beta
                    innovator incubator focus.
                </p>
            </div>
            <div className="flex flex-col items-center gap-14 lg:gap-0 lg:items-start lg:flex-row justify-between">
                <div className="text-center lg:text-left">
                    <div className="relative mb-6">
                        <Image
                            src={aboutAssets.leadership1}
                            width={299}
                            height={354}
                            alt="leadership image"
                            // layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <p className="mb-3 text-black font-manrope text-[28px] font-normal leading-[48px]">
                        Micheal Scott
                    </p>
                    <p className="text-primary-300 font-openSans text-xl font-normal leading-8">
                        General Manager
                    </p>
                </div>
                <div className="">
                    <div className="relative mb-6">
                        <Image
                            src={aboutAssets.leadership2}
                            width={299}
                            height={354}
                            alt="leadership image"
                            // layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <p className="mb-3 text-black font-manrope text-[28px] font-normal leading-[48px]">
                        Dwight Schrute
                    </p>
                    <p className="text-primary-300 font-openSans text-xl font-normal leading-8">
                        General Manager
                    </p>
                </div>
                <div className="">
                    <div className="relative mb-6">
                        <Image
                            src={aboutAssets.leadership3}
                            width={299}
                            height={354}
                            alt="leadership image"
                            // layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <p className="mb-3 text-black font-manrope text-[28px] font-normal leading-[48px]">
                        Pam Beetsley
                    </p>
                    <p className="text-primary-300 font-openSans text-xl font-normal leading-8">
                        General Manager
                    </p>
                </div>
            </div>
        </section>
    );
};

export default OurTeam;
