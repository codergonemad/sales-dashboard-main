import { Button, IconButton, Typography } from '@mui/material'
import { Box, minWidth } from '@mui/system'
import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import axios from 'axios';
import { LocalizationProvider,DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

const baseURL="http://localhost:9191/updateProduct";
function EditProduct({ closeEvent }) {
    const [id, setID] = useState("0");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("0");
    const [serial,setSerial]=useState();
    const [cost,setCost]=useState();
    const [value,setValue]=useState();
    const [units,setUnits]=useState();
    const [post,setPost]=useState();
    useEffect(()=>{
        axios.get(`${baseURL}`).then((response)=>{
            setPost(response.data);
        });
    },[]);
    const handleUnitsChange =(event)=>{
        setUnits(event.target.value);
    };

    const handleIDChange = (event) => {
        setID(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };
    const handleSerialChange =(event)=>{
        setSerial(event.target.value);
    };
    const handleCostChange =(event)=>{
        setCost(event.target.value);
    };

    const refreshPage = () =>{
        window.location.reload(false)
      }

    function updateUser() {
        axios.put(`${baseURL}`,{
            productId:id,
    serialNo:serial,
    productName:name,
    productCost:price,
    boughtPrice: cost,
    unitsSold: units,
    date:value
        }).then((response)=>{
            setPost(response.data);
        });

     }
    return (
        <>
            <Box sx={{ m: 2 }} />
            <Typography variant='h5' align='center'>
                <b>EDIT PRODUCT</b>
            </Typography>
            <IconButton style={{ position: 'absolute', top: '0', right: '0', }} onClick={closeEvent}>
                <CloseIcon />
            </IconButton>
            <Box height={20} />
            <Grid container spacing={2}>
            <Grid item xs={12}>
                    <TextField id="outlined-basic" label="Quantity" variant="outlined" size='small' value={serial} onChange={handleSerialChange} type='number' sx={{ minWidth: "100%" }} />
                </Grid>


                <Grid item xs={12}>
                    <TextField id="outlined-basic" label="Product ID" variant="outlined" size='small' value={id} onChange={handleIDChange} type='number' sx={{ minWidth: "100%" }} />
                </Grid>


                <Grid item xs={12}>
                    <TextField id="outlined-basic" label="Product Name" variant="outlined" size='small' value={name} onChange={handleNameChange} sx={{ minWidth: "100%" }} />
                </Grid>
                <Grid item xs={12}>
                    <TextField id="outlined-basic" label="Product Cost" variant="outlined" size='small' value={cost} onChange={handleCostChange} sx={{ minWidth: "100%" }} />
                </Grid>
                <Grid item xs={12}>
                    <TextField id="outlined-basic" label="Units Sold" variant="outlined" size='small' value={units} onChange={handleUnitsChange} sx={{ minWidth: "100%" }} />
                </Grid>
                <Grid item xs={12}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                    <DatePicker
                        label="Date"
                        value={value}
                         onChange={(newValue) => setValue(newValue)}
                        />
                    </DemoContainer>
                </LocalizationProvider>
                </Grid>


                <Grid item xs={12}>
                    <TextField id="outlined-basic" label="MRP" variant="outlined" size='small' value={price} onChange={handlePriceChange} type='number' InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <CurrencyRupeeIcon />
                            </InputAdornment>
                        ),
                    }} sx={{ minWidth: "100%" }} />
                </Grid>

                <Grid item xs={12}>
                    <Typography align='center' variant="h5" >
                        <Button variant='contained' onClick={function(event){ updateUser(); closeEvent(); refreshPage();}}>
                            Submit
                        </Button>
                    </Typography>
                </Grid>



            </Grid>

            <Box sx={{ m: 4 }} />


        </>
    )
}

export default EditProduct