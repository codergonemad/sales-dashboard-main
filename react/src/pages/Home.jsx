import React, { useState } from 'react';
import Sidenav from '../components/Sidenav';
import Navbar from '../components/Navbar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { height } from '@mui/system';
import "../Dash.css";
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { red } from '@mui/material/colors';
import AccordionDash from '../components/AccodianDash';
// import BarChart from '../charts/BarChart';
import ProductList from '../components/Products/ProductList';
import CountUp from 'react-countup';
import { Button } from '@mui/material';
import Divider from "@mui/material/Divider";
import Modal from '@mui/material/Modal';
import AddProduct from '../components/Products/AddProduct';
import EditProduct from '../components/Products/EditProduct';
import DeleteProduct from '../components/Products/DeleteProduct';
import axios from 'axios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const baseURL="http://localhost:9191/sumProduct";
const baseURL2="http://localhost:9191/sumBought";
const baseURL3="http://localhost:9191/totalProduct";



function Home() {
    const [open, setOpen] = React.useState(false);
    const [editopen, setEditOpen] = React.useState(false);
    const [deleteopen, setDeleteOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleEditOpen = () => setEditOpen(true);
    const handleDeleteOpen = () => setDeleteOpen(true);
    const handleClose = () => setOpen(false);
    const handleEditClose = () => setEditOpen(false);
    const handleDeleteClose = () => setDeleteOpen(false);
    const [cost,setCost]=React.useState();
    const [bought,setBought]=React.useState();
    const [income,setIncome]=React.useState();
    const [units,setUnits]=React.useState();
    // function setTotal(){
    //     setIncome({cost}-{bought});
    // }
    React.useEffect(() => {
        axios.get(baseURL).then((response)=>
        {
          // console.log(response.data[0].productId);
          setCost(response.data);
        })
      },[]);
      React.useEffect(() => {
        axios.get(baseURL2).then((response)=>
        {
          // console.log(response.data[0].productId);
          setBought(response.data);
          
        })
      },[]);
      React.useEffect(() => {
        axios.get(baseURL3).then((response)=>
        {
          // console.log(response.data[0].productId);
          setUnits(response.data);
          
        })
      },[]);
      React.useEffect(()=>{
        setIncome(cost-bought);

      });
    //   let income={cost}-{bought};
    //   console.log(income);
    //   const [income, setIncome] = useState(0);
    //   React.setIncome(cost-bought);

    return (
        <>
            <div>
                <Modal
                    open={open}
                    // onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <AddProduct closeEvent={handleClose} />
                    </Box>
                </Modal>

            </div>
            <div>
                {/* <Button ></Button> */}
                <Modal
                    open={editopen}
                    // onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <EditProduct closeEvent={handleEditClose} />
                    </Box>
                </Modal>
            </div>
            <div>
                {/* <Button ></Button> */}
                <Modal
                    open={deleteopen}
                    // onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <DeleteProduct closeEvent={handleDeleteClose} />
                    </Box>
                </Modal>
            </div>
            <div className='bgcolor'>
                <Navbar />
                <Box height={70} />
                <Box sx={{ display: 'flex' }}>
                    <Sidenav />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Stack spacing={2} direction="row">
                                    <Card sx={{ minWidth: 49 + "%", height: 150 }} className='gradient'>
                                        <CardContent>
                                            <div className='iconstyle'>
                                                <CreditCardIcon />
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "antiquewhite" }}>
                                                $<CountUp delay={0.2} end={bought} duration={1} />
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div" sx={{ color: "red" }}>
                                                Total Spending
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    <Card sx={{ minWidth: 49 + "%", height: 150 }} className='gradientlight'>
                                        <CardContent>
                                            <div className='iconstyle'>
                                                <ShoppingBagIcon />
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "antiquewhite" }}>
                                                $<CountUp delay={0.2} end={cost} duration={1} />
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div" sx={{ color: "green" }}>
                                                Total Earning
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Stack>
                            </Grid>
                            <Grid item xs={4}>
                                <Stack spacing={2}>
                                    <Card className='gradientlight'>
                                        <Stack spacing={2} direction="row">
                                            <div className='iconstyle'>
                                                <StorefrontIcon />
                                            </div>
                                            <div className='paddingall'>
                                                <span className='pricetitle'>$<CountUp delay={0.2} end={income} duration={1} /></span>
                                                <br />
                                                <span className='pricesubtitle'>Total Income</span>
                                            </div>
                                        </Stack>
                                    </Card>
                                    <Card >
                                        <Stack spacing={2} direction="row">
                                            <div className='iconstyleblack'>
                                                <StorefrontIcon />
                                            </div>
                                            <div className='paddingall'>
                                                <span className='pricetitle'><CountUp delay={0.2} end={units} duration={1} /></span>
                                                <br />
                                                <span className='pricesubtitle'>Total Products</span>
                                            </div>
                                        </Stack>
                                    </Card>
                                </Stack>
                            </Grid>
                        </Grid>
                        <Box height={20} />
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Card sx={{ height: 60 + "vh" }}> {/*vh used for vertical height*/}
                                    <CardContent>
                                        {/* <BarChart /> */}
                                        <Button variant="contained" className='AddButton' onClick={handleOpen}>ADD</Button>
                                        <Button variant="contained" className='EditButton' onClick={handleEditOpen}>Edit</Button>
                                        <Button variant="contained" className='DeleteButton' onClick={handleDeleteOpen}>Delete</Button>
                                        <Divider />
                                        <ProductList />
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card sx={{ height: 60 + "vh" }}>
                                    <CardContent>
                                        <div className='paddingall'>
                                            <span className='pricetitle'>Popular Products</span>
                                        </div>
                                        <AccordionDash />
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>

                </Box>
            </div>
        </>
    )
}

export default Home