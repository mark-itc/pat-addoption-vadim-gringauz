import React from 'react'
import { Link } from '@mui/material'
import Image from 'mui-image'
import { appLogo } from '../../App'


function Logo ({ size, noMotion, noLink }) {
  return (
    <Link href={noLink ? null : '/'}  >
      <Image 
      shift={noMotion ? false : 'right'} 
      alt={'WeAdopt'} 
      src={appLogo} 
      showLoading width={size}
       />
    </Link>
  )
}

export default Logo
