import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Paper,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Button,
  FormLabel,
  Grid,
} from '@mui/material'

function QuickSearch() {

  const navigate = useNavigate()

  return (
    <Paper
      elevation={20}
      sx={{
        maxWidth: '900px',
        borderRadius: '20px',
        padding: '15px 25px',
        backgroundColor: 'rgba(0,0,0,.2)'
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <FormLabel sx={{ color: 'white', fontSize: '2rem' }} >
            What are you looking for?
          </FormLabel>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl size='small' sx={{ width: '100%' }}>
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
        </Grid>
        <Grid item xs={12} sm={4}>
        <FormControl size='small' sx={{ width: '100%' }}>
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
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button
            variant='contained'
            size='small'
            sx={{ width: '100%' }}
            onClick={() => navigate('/search')}
          >
            Search Pets
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default QuickSearch