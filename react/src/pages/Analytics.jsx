import React from 'react'
import Sidenav from '../components/Sidenav'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Navbar from '../components/Navbar'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { CardActionArea } from '@mui/material'
import Stack from '@mui/material/Stack'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import StorefrontIcon from '@mui/icons-material/Storefront'
import "../Dash.css"
import { PieChart } from '../charts/PieChart'
import { LineChart } from '../charts/LineChart'
import axios from 'axios'

const baseURL="http://localhost:9191/totalProduct";
const baseURL2="http://localhost:9191/totalInventory";

function Analytics() {
    const [product,setProduct]=React.useState([]);
  const [post,setPost]=React.useState([]);
  React.useEffect(() => {
    axios.get(baseURL).then((response)=>
    {
      // console.log(response.data[0].productId);
      setProduct(response.data);
    })
  },[]);
  React.useEffect(() => {
    axios.get(baseURL2).then((response)=>
    {
      // console.log(response.data[0].productId);
      setPost(response.data);
    })
  },[]);
    return (
        <>
            <Navbar />
            <Box height={70} />
            <Box sx={{ display: 'flex' }}>
                <Sidenav />
                <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Stack spacing={2} direction='row'>
                                <Card
                                    sx={{ minWidth: 49 + '%', height: 150 }}
                                    className='gradient'
                                >
                                    <CardContent>
                                        <div className='iconstyle'>
                                            {/* <CreditCardIcon /> */}
                                        </div>
                                        <Typography
                                            gutterBottom
                                            variant='h5'
                                            component='div'
                                            sx={{ color: 'antiquewhite' }}
                                        >
                                            {product}
                                        </Typography>
                                        <Typography
                                            gutterBottom
                                            variant='h5'
                                            component='div'
                                            sx={{ color: 'white' }}
                                        >
                                            Total Products Sold
                                        </Typography>
                                    </CardContent>
                                </Card>
                                <Card
                                    sx={{ minWidth: 49 + '%', height: 150 }}
                                    className='gradientlight'
                                >
                                    <CardContent>
                                        <div className='iconstyle'>
                                            {/* <CreditCardIcon /> */}
                                        </div>
                                        <Typography
                                            gutterBottom
                                            variant='h5'
                                            component='div'
                                            sx={{ color: 'antiquewhite' }}
                                        >
                                            {post}
                                        </Typography>
                                        <Typography
                                            gutterBottom
                                            variant='h5'
                                            component='div'
                                            sx={{ color: 'white' }}
                                        >
                                            Total Stock
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Stack>
                        </Grid>

                    </Grid>
                    <Box height={20} />
                    <Grid container spacing={2}>
                        <Grid item xs={7}>
                            <Card sx={{ height: 60 + 'vh' }}>
                                <CardContent>
                                    <div >
                                        <span className='pricetitle'> Sales</span>
                                    </div>
                                    <LineChart />
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={5}>
                            <Card sx={{ height: 60 + 'vh' }}>
                                <CardContent>
                                    <div className='paddingall'>
                                        <span className='pricetitle'> Stock</span>
                                    </div>
                                    <PieChart />
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default Analytics