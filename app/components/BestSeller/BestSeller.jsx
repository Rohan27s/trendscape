import React from 'react'
import Link from 'next/link'
import { MdOutlineArrowOutward } from "react-icons/md";
import Cards from './Cards';

const BestSeller = () => {
    return (
        <div className='my-3'>
            <div className='flex justify-between mb-3 items-center'>
                <h2 className='text-4xl font-bold'>Best of the week</h2>
                <Link href="#" className="view_more">
                    View more
                    <MdOutlineArrowOutward />
                </Link>
            </div>
            <div className='flex flex-row gap-4'>
                <div className='flex flex-wrap gap-3 w-1/2'>
                    <Cards className={'w-full'} src={'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} name={'Nike'} desc={'Newly Launched Shoe'} />
                </div>
                <div className='flex flex-row w-1/2 gap-2'>
                    <Cards className={' h-1/2'} src={'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} name={'Tshirt'} desc={'Newly Launched Tshirt'} />
                    <Cards className={' h-1/2'} src={'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} name={'Apple'} desc={'Newly Launched Watch'} />

                </div>

            </div>
        </div>
    )
}

export default BestSeller