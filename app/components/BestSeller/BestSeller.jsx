import React from 'react'
import Link from 'next/link'
import { MdOutlineArrowOutward } from "react-icons/md";
import Cards from './Cards';

const BestSeller = () => {
    return (
        <div className='my-3'>
            <div className='flex justify-between mb-3 items-center'>
                <h2 className='text-4xl font-bold'>Best of the week</h2>
                {/* <Link href="#" className="view_more">
                    View more
                    <MdOutlineArrowOutward />
                </Link> */}
            </div>
            <div className='flex flex-row gap-4'>
                <div className='flex flex-wrap gap-3 w-1/2'>
                    <Cards _id={"660c1b9d530ad5862b20a53a"} name={"nike air zoom pegasus 38"} className={'w-full'} src={'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}  desc={'Newly Launched Shoe'} />
                </div>
                <div className='flex flex-row w-1/2 gap-2'>
                    <Cards _id={"660c1d4d530ad5862b20a541"} name={"Zara Basic T-Shirt"} className={' h-1/2'} src={'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}  desc={'Newly Launched Tshirt'} />
                    <Cards _id={"660c1da3530ad5862b20a543"} name={"Zara Polo Shirt"} className={' h-1/2'} src={'https://images.unsplash.com/photo-1581791538302-03537b9c97bf?q=80&w=1779&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}  desc={'New Polo Tshirt'} />

                </div>

            </div>
        </div>
    )
}

export default BestSeller