import React from 'react'
import { Box } from '@mui/material'
import Image from 'mui-image'
import coverImage from '../../assets/cover.jpg'

export default function CoverImage() {
  return (
    <Box
      sx={{
        opacity: '0.8',
        // filter: 'blur(5px)',
      }}
    >
      <Image
        shift={false}
        alt={'We love pets'}
        src={coverImage}
        showLoading
        fit={'cover'}
        sx={{ aspectRatio: { xs: '9/16', md: '3/2' } }}
      />
    </Box>
  )
}
