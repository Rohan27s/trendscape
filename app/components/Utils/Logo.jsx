import React from 'react'
import { BRAND_NAME } from '@/app/Data/constants'
const Logo = ({ className }) => {
  return (
    <h1 className={className + " font-bold font-mono antialiased text-3xl tracking-wider syne-font"}>{BRAND_NAME}</h1>
  )
}

export default Logo