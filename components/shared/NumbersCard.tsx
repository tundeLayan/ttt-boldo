import React from 'react';

type TNumbeersCardProps = {
    value: string;
    subtitle: string;
};
const NumbersCard = (props: TNumbeersCardProps) => {
    const { value, subtitle } = props;
    return (
        <div className="">
            <p className="text-green-100 text-[96px] font-normal leading-[56px] mb-[32px]">
                {value}
            </p>
            <p className="font-openSans text-2xl font-normal leading-[36px] text-primary-200">
                {subtitle}
            </p>
        </div>
    );
};

export default NumbersCard;
