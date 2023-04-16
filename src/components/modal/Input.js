import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Typography, Paper} from "@mui/material";

const Modal = ({handleCloseModal, list, addList}) => {

    const theme = createTheme({
        components: {
          MuiButton: {
            variants: [
              {
                props: { variant: 'primary' },
                style: {
                  color: '#F0F9FF',
              padding: '8px 16px',

                  textTransform: 'none',
                  fontStyle: 'normal',
                  fontSize: '14px',          
                  backgroundColor: '#075985',
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: '#075985',
                   color: '#F0F9FF',
                  },
                },
              },
              {
                props: { variant: 'secondary'}, 
                style: {
                  color: '#0369A1',
                  textTransform: 'none',
                  backgroundColor: '#F5F5F5',
                  fontWeight: 600,
                  fontSize: '14px',          
                  '&:hover': {
                    backgroundColor: '#F5F5F5',
                   color: '#0369A1',
                  },
                },
              },
            ],
          },
        },
      });

      const [input, setInput] = useState('')
      const [error, setError] = useState(false)

      const handleSubmit = (e) => {
        if(input === '') {
            setError(true)
        }
        else {
            e.preventDefault()
            addList(input)
            setInput('')
            handleCloseModal()
        }
      }

      const handleInputChange = (e) => {
        const cek = e.target.value
        setInput(cek)
        setError(cek.length > 100)
      }

    return <ThemeProvider theme={theme}>
        <Grid item xs={2} >
        </Grid>
        <Grid item xs={7}>
            <Paper elevation={0} sx={{backgroundColor:'#F5F5F5'}}>
                <Input 
                placeholder="Add new to-do title..." 
                disableUnderline={true} 
                multiline={true}
                sx={{display:'block', marginLeft:'8%', fontStyle: 'normal', fontWeight: '400', fontSize: '16px'}}
                value={input}
                onChange={handleInputChange}
                error={error}
                />
            </Paper>
            {error && (
                <Typography variant='caption' sx={{color:'#E11D48', textAlign:'left', marginLeft: '50px', display:'flex'}}>
                    Title must be shorter than or equal to 100 characters.
                </Typography>
            )}
        </Grid>
        <Grid item xs={3} >
            <Stack direction="row" spacing={2}>
                <Button variant='secondary' onClick={handleCloseModal}>Cancel</Button>
                <Button variant='primary' onClick={handleSubmit}>Create</Button>
            </Stack>
        </Grid>
    </ThemeProvider>
}

export default Modal