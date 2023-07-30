import { Button, IconButton, Typography } from '@mui/material'
import { Box, minWidth } from '@mui/system'
import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import axios from 'axios';
const baseURL="http://localhost:9191/deleteProduct";

function DeleteProduct({ closeEvent }) {
    const [id, setID] = useState("0");
    const [post,setPost]=useState();
    useEffect(() =>{
        axios.get(`${baseURL}/1`).then((response)=>{
            setPost(response.data);
        });
    },[]);

    

    const handleIDChange = (event) => {
        setID(event.target.value);
    };

    // const handleNameChange = (event) => {
    //     setName(event.target.value);
    // };

    // const handlePriceChange = (event) => {
    //     setPrice(event.target.value);
    // };

    function deleteUser() {
        axios.delete(`${baseURL}/${id}`).then(()=>{
            setPost(null);
        });
    }

    const refreshPage=()=>{
        window.location.reload(false);
    }
    return (
        <>
            <Box sx={{ m: 2 }} />
            <Typography variant='h5' align='center'>
                <b>DELETE PRODUCT</b>
            </Typography>
            <IconButton style={{ position: 'absolute', top: '0', right: '0', }} onClick={closeEvent}>
                <CloseIcon />
            </IconButton>
            <Box height={20} />
            <Grid container spacing={2}>
                {/* <Grid item xs={12}>
                    <TextField id="outlined-basic" label="S.NO." variant="outlined" size='small' sx={{ minWidth: "100%" }} />
                </Grid> */}


                <Grid item xs={12}>
                    <TextField id="outlined-basic" label="Product ID" variant="outlined" size='small' value={id} onChange={handleIDChange} type='number' sx={{ minWidth: "100%" }} />
                </Grid>


                {/* <Grid item xs={12}>
                    <TextField id="outlined-basic" label="Product Name" variant="outlined" size='small' value={name} onChange={handleNameChange} sx={{ minWidth: "100%" }} />
                </Grid> */}


                {/* <Grid item xs={12}>
                    <TextField id="outlined-basic" label="Product Price" variant="outlined" size='small' value={price} onChange={handlePriceChange} type='number' InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <CurrencyRupeeIcon />
                            </InputAdornment>
                        ),
                    }} sx={{ minWidth: "100%" }} />
                </Grid> */}

                <Grid item xs={12}>
                    <Typography align='center' variant="h5" >
                        <Button variant='contained' onClick={function(event){ deleteUser(); closeEvent(); refreshPage();}}>
                            Submit
                        </Button>
                    </Typography>
                </Grid>



            </Grid>

            <Box sx={{ m: 4 }} />


        </>
    )
}

export default DeleteProduct