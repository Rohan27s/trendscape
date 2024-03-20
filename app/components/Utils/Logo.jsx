import React from 'react'
import { BRAND_NAME } from '@/app/Data/constants'
import Link from 'next/link'
const Logo = ({ className }) => {
  return (
      <Link href="/" className={className + " select-none font-bold font-mono antialiased tracking-wider syne-font"}>{BRAND_NAME}
    </Link>
  )
}

export default Logo