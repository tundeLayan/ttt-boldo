import React from 'react';

const OurNumbers = () => {
    return (
        <section className="min-h-fit py-[96px] px-10 xl:px-[200px] bg-primary-100 text-center">
            <h5 className="text-primary-200 font-openSans text-xl font-normal leading-[32px]">
                Our numbers
            </h5>
            <h5 className="text-white font-manrope text-5xl font-normal leading-[72px] mb-[84px]">
                Handshake infographic mass market{' '}
                <br className="hidden md:block" /> crowdfunding iteration.
            </h5>
            <div className="flex flex-col gap-10 lg:gap-0 items-center lg:flex-row justify-between text-left">
                <div className="">
                    <p className="text-green-100 text-[96px] font-normal leading-[56px] mb-[32px]">
                        120m
                    </p>
                    <p className="font-openSans text-2xl font-normal leading-[36px] text-primary-200">
                        Cool feature title
                    </p>
                </div>
                <div className="">
                    <p className="text-green-100 text-[96px] font-normal leading-[56px] mb-[32px]">
                        10.000
                    </p>
                    <p className="font-openSans text-2xl font-normal leading-[36px] text-primary-200">
                        Cool feature title
                    </p>
                </div>
                <div className="">
                    <p className="text-green-100 text-[96px] font-normal leading-[56px] mb-[32px]">
                        240
                    </p>
                    <p className="font-openSans text-2xl font-normal leading-[36px] text-primary-200">
                        Cool feature title
                    </p>
                </div>
            </div>
        </section>
    );
};

export default OurNumbers;
