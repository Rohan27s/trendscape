import React from 'react';
import { SiNike, SiAdidas, SiApple, SiSamsung, SiSony, SiZara } from "react-icons/si";

const Brands = () => {
    const brands = [
        { name: 'Nike', icon: <SiNike /> },
        { name: 'Adidas', icon: <SiAdidas /> },
        { name: 'Apple', icon: <SiApple /> },
        { name: 'Samsung', icon: <SiSamsung /> },
        { name: 'Sony', icon: <SiSony /> },
        { name: 'Zara', icon: <SiZara /> },
        { name: 'Nike', icon: <SiNike /> },
        { name: 'Adidas', icon: <SiAdidas /> },
        { name: 'Apple', icon: <SiApple /> },
        { name: 'Samsung', icon: <SiSamsung /> },
        { name: 'Sony', icon: <SiSony /> },
        { name: 'Zara', icon: <SiZara /> },
    ];

    return (
        <div className='flex items-center justify-between py-8'>
            {brands.map((brand, index) => (
                <span key={index} className='flex flex-col  items-center font-semibold text-xl'>
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
