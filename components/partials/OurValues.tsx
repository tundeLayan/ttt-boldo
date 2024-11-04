import React from 'react';

import { Believe1, Believe2, Believe3 } from '@/app/_module/components/icons';

const OurValues = () => {
    return (
        <section className="min-h-screen bg-primary-100 px-10 xl:pl-[299px] xl:pr-[301px] py-[120px] text-white">
            <h5 className="font-openSans text-xl font-normal leading-[32px] mb-3">
                Our values
            </h5>
            <p className="text-5xl font-normal leading-[72px] mb-[22.5px]">
                Things in we believe
            </p>
            <p className="text-primary-200 font-openSans font-normal leading-8 mb-[72px]">
                Conversion angel investor entrepreneur first mover advantage.
                Handshake infographic mass market crowdfunding iteration.
                Traction stock user experience deployment beta innovator
                incubator focus.{' '}
            </p>

            <div className="text-white">
                <div className="flex gap-x-[50px] mb-[72px]">
                    <Believe1 />
                    <div className="">
                        <p className="font-normal text-[28px] leading-[48px] mb-4">
                            We are committed.
                        </p>
                        <p className="text-primary-200 text-xl font-normal leading-8 font-openSans">
                            Conversion angel investor entrepreneur first mover
                            advantage. Handshake infographic mass market
                            crowdfunding iteration.{' '}
                        </p>
                    </div>
                </div>
                <div className="flex gap-x-[50px] mb-[72px]">
                    <Believe2 />
                    <div className="">
                        <p className="font-normal text-[28px] leading-[48px] mb-4">
                            We are responsible.
                        </p>
                        <p className="text-primary-200 text-xl font-normal leading-8 font-openSans">
                            Conversion angel investor entrepreneur first mover
                            advantage. Handshake infographic mass market
                            crowdfunding iteration.{' '}
                        </p>
                    </div>
                </div>
                <div className="flex gap-x-[50px] mb-[72px]">
                    <Believe3 />
                    <div className="">
                        <p className="font-normal text-[28px] leading-[48px] mb-4">
                            We aim for progress.
                        </p>
                        <p className="text-primary-200 text-xl font-normal leading-8 font-openSans">
                            Conversion angel investor entrepreneur first mover
                            advantage. Handshake infographic mass market
                            crowdfunding iteration.{' '}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurValues;
