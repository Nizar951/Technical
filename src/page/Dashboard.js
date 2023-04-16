import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Modal from '../components/modal/Input.js';
import Items from '../components/Items.js';

const Dasboard = () => {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#F5F5F5',
    fontFamily: 'Calibry',
    fontWeight: 700,
    fontSize: '24px',
    textAlign: 'center',
    color: '#292524',
    lineHeight: '28px'
  }));

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
            props: { variant: 'modal'}, 
            style: {
              color: '#F5F5F5',
              opacity: '0',
              textTransform: 'none',
              backgroundColor: '#F5F5F5',
              '&:hover': {
                backgroundColor: '#F5F5F5',
                color: '#F5F5F5'
              },
            },
          },
          {
            props: { variant: 'cancel'},
            style: {
              color:'#BE123C',
              textTransform: 'none',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '14px',          
              '&:hover': {
                backgroundColor: '#F5F5F5',
               color: '#BE123C',
              },
            },
          },
        ],
      },
    },
  });
  
  const [list,setList] = useState([])
  const [modal,setModal] = useState(false)

  const clear = () => {
    setList([])
  }

  const handleCloseModal = () => {
    setModal(false);
  }

  const addList = (text) => {
    const newList = [...list, {text}]
    setList(newList)
  }
  console.log(list);
  return (
      <Container fixed sx={{py: '20px'}}>
        <Box>
          <Grid container spacing={3} py={4}>
            <Grid item xs={9}>
              <Item elevation={0}>Things you should be doing today...</Item>
            </Grid>
            <Grid item xs={3}>
            <Stack direction="row" spacing={2}>
              <ThemeProvider theme={theme}>
                {modal ? (
                  <Button variant='modal' disabled>Add New</Button>
                ) 
                : (
                <Button variant='primary' onClick={()=>setModal(true)}>Add New</Button>
                )}
                <Button variant='cancel'onClick={clear}>Clear</Button>
              </ThemeProvider>
            </Stack>
            </Grid>
            {modal ?
            (
              <Modal handleCloseModal={handleCloseModal} list={list} addList={addList}/>
            )
            :
            <></>
          }
          { list.length !== 0 ? 
            list.map((isi) => {
            return(
              <Items isi={isi.text} />
            )
             })
            : (
            <>
            <Grid item xs={2.5}>
            </Grid>
            <Grid item xs={8.5}>
                <Paper sx={{paddingY: "50px", 
                    fontStyle: 'normal', 
                    fontWeight: '500', 
                    fontSize: '14px'}}
                    >
                Nothing to-do yet.
                </Paper>
            </Grid>
            <Grid item xs={1}>
            </Grid>
            </>
            )
        }
        </Grid>
        </Box>
      </Container>
  );
}

export default Dasboard;
