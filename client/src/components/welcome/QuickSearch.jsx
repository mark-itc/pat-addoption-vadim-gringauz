import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Box,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Button,
  FormLabel,
  Stack,
} from '@mui/material'

function QuickSearch() {

const navigate = useNavigate()

  return (
    <Box sx={{
      mt: { xs: 1, lg: 10 },
      width: '250px',
      // border: '1px black solid',
      borderRadius: '10px',
      padding: '25px',
      backgroundColor: 'rgba(0,0,0,.2)'
    }} >
      <Stack spacing={1} >
        <FormLabel sx={{ color: 'white' }} >What are you looking for?</FormLabel>

        <FormControl size='small' >
          <InputLabel id="type-label">Type</InputLabel>
          <Select
            // displayEmpty={true}
            labelId="type-label"
            id="type-select"
            // value=''
            label="Type"
            // onChange={}
            sx={{
              backgroundColor: 'white',
            }}
          >
            <MenuItem value={'dog'}>Dog</MenuItem>
            <MenuItem value={'cat'}>Cat</MenuItem>
          </Select>
        </FormControl>
        <FormControl size='small' >
          <InputLabel id="size-label">Size</InputLabel>
          <Select
            labelId="size-label"
            id="size-select"
            // value=''
            label="Size"
            // onChange={}
            sx={{
              backgroundColor: 'white',
            }}
          >
            <MenuItem value={'small'}>Small</MenuItem>
            <MenuItem value={'medium'}>Medium</MenuItem>
            <MenuItem value={'big'}>Big</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant='contained'
          size='small'
          sx={{ width: 'fit-content' }}
          onClick={() => navigate('/search')}
        >
          Search Pets
        </Button>
      </Stack>
    </Box>
  )
}

export default QuickSearch