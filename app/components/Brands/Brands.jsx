import React from 'react';
import { SiNike, SiAdidas, SiApple, SiSamsung, SiSony, SiCanon, SiGap, SiZara, SiForever21, SiHm } from "react-icons/si";

const Brands = () => {
    const brands = [
        { name: 'Nike', icon: <SiNike /> },
        { name: 'Adidas', icon: <SiAdidas /> },
        { name: 'Apple', icon: <SiApple /> },
        { name: 'Samsung', icon: <SiSamsung /> },
        { name: 'Sony', icon: <SiSony /> },
        { name: 'Canon', icon: <SiCanon /> },
        { name: 'Gap', icon: <SiGap /> },
        { name: 'Zara', icon: <SiZara /> },
        { name: 'Forever 21', icon: <SiForever21 /> },
        { name: 'H&M', icon: <SiHm /> },
    ];

    return (
        <div className='flex items-center justify-between py-8'>
            {brands.map((brand, index) => (
                <span key={index} className='flex flex-col items-center font-semibold text-xl'>
                    <span className='brand_avatars'>
                        {brand?.icon}
                    </span>
                    <p>{brand.name}</p>
                </span>
            ))}
        </div>
    );
};

export default Brands;
