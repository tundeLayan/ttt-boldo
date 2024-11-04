import React from 'react';

import { Input } from '../ui/input';
import { Button } from '@/app/_module/components';

const Template = () => {
    return (
        <section className="min-h-fit px-10 xl:px-[100px] pb-[84px] pt-[124px] bg-white">
            <div className="bg-[url('/media/images/wavybackground.png')] bg-cover bg-center bg-no-repeat rounded-xl w-full text-white text-center min-h-[391px] pt-[72px] pb-[50px] xl:pb-0">
                <p className=" text-5xl font-normal leading-[72px] mb-12">
                    An enterprise template to ramp
                    <br className="hidden md:block" /> up your company website
                </p>
                <form className="flex md:gap-6 justify-center h-[60px]">
                    <Input
                        placeholder="Your email address"
                        className="rounded-[240px] py-3 md:pl-8 w-7/12 md:w-[370px] h-full font-openSans text-xl font-normal leading-8 text-primary-100"
                    />
                    <Button
                        variant="secondary"
                        label="Start now"
                        className="h-full rounded-[56px]"
                    />
                </form>
            </div>
        </section>
    );
};

export default Template;
