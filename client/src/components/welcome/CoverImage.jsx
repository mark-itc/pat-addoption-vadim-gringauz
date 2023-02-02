import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box } from '@mui/material'
import Image from 'mui-image'
import coverImage from '../../assets/cover.jpg'
import coverImageMobile from '../../assets/cover-mobile.jpg'


export default function CoverImage() {
  const isMobile = useMediaQuery('(width <= 900px)');

  return (
    <Box
      sx={{
        position: 'relative'
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
          opacity: '0.2',
          zIndex: 98,
          position: 'absolute',
        }}
      ></Box>
      <Image
        shift={false}
        alt={'Cover'}
        src={isMobile ? coverImageMobile : coverImage}
        showLoading
        // fit={'cover'}
        sx={{

        }}
      />
    </Box>
  )
}
