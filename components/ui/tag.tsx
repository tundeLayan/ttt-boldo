import React from 'react';

type TTagProps = {
    label: string;
    className?: string;
};
const Tag = (props: TTagProps) => {
    const { label, className } = props;
    return (
        <span
            className={`bg-green-100 text-primary-100 font-openSans text-[13px] font-bold leading-7 rounded-[120px] px-[14px] inline-block ${className}`}
        >
            {label}
        </span>
    );
};

export default Tag;
