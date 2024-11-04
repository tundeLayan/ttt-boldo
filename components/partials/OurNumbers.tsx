import React from 'react';
import { NumbersCard } from '../shared';

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
                <NumbersCard
                    value="120m"
                    subtitle="Cool feature title"
                />
                <NumbersCard
                    value="10.000"
                    subtitle="Cool feature title"
                />
                <NumbersCard
                    value="240"
                    subtitle="Cool feature title"
                />
            </div>
        </section>
    );
};

export default OurNumbers;
