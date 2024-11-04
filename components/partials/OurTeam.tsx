import React from 'react';
import Image from 'next/image';

import aboutAssets from '@/lib/assets/about';
import { TeamCard } from '../shared';

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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[51px] w-full ">
                <TeamCard
                    image={aboutAssets.leadership1}
                    role="General Manager"
                    name="Micheal Scott"
                />
                <TeamCard
                    image={aboutAssets.leadership2}
                    role="General Manager"
                    name="Dwight Schrute"
                />
                <TeamCard
                    image={aboutAssets.leadership3}
                    role="General Manager"
                    name="Pam Beetsley"
                />
            </div>
        </section>
    );
};

export default OurTeam;
