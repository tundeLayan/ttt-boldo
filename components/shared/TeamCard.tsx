import React from 'react';
import Image, { StaticImageData } from 'next/image';

type TTeamCardProps = {
    image: StaticImageData;
    name: string;
    role: string;
};
const TeamCard = (props: TTeamCardProps) => {
    const { image, name, role } = props;
    return (
        <div className="text-center lg:text-left">
            <div className="relative mb-6 w-full">
                <Image
                    src={image}
                    width={299}
                    height={354}
                    alt="leadership image"
                    layout="responsive"
                    objectFit="contain"
                    quality={100}
                />
            </div>
            <p className="mb-3 text-black font-manrope text-[28px] font-normal leading-[48px]">
                {name}
            </p>
            <p className="text-primary-300 font-openSans text-xl font-normal leading-8">
                {role}
            </p>
        </div>
    );
};

export default TeamCard;
