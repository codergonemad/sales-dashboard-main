
// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';











// const columns = [
//   { id: 'name', label:<b>S.No.</b> , minWidth: 170, },
//   { id: 'code', label: <b>NAME</b>, minWidth: 100 },
//   {
//     id: 'population',
//     label: <b>PRICE</b>,
//     minWidth: 170,
//     align: 'right',
//     format: (value) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'size',
//     label: <b>ID</b>,
//     minWidth: 170,
//     align: 'right',
//     format: (value) => value.toLocaleString('en-US'),
//   }
// ];

// export default axios.create({
//   baseURL:"http://localhost:9191/",
//   headers: {
//     'Content-Type':'application/json'
//   }
// });
const baseURL="http://localhost:9191/listProduct";



// const rows = [
  //   createData('India', 'IN', 1324171354, 3287263),
  //   createData('China', 'CN', 1403500365, 9596961),
  //   createData('Italy', 'IT', 60483973, 301340),
  //   createData('United States', 'US', 327167434, 9833520),
  //   createData('Canada', 'CA', 37602103, 9984670),
  //   createData('Australia', 'AU', 25475400, 7692024),
  //   createData('Germany', 'DE', 83019200, 357578),
  //   createData('Ireland', 'IE', 4857000, 70273),
  //   createData('Mexico', 'MX', 126577691, 1972550),
  //   createData('Japan', 'JP', 126317000, 377973),
    // createData('France', 'FR', 67022000, 640679),
    // createData('United Kingdom', 'GB', 67545757, 242495),
    // createData('Russia', 'RU', 146793744, 17098246),
    // createData('Nigeria', 'NG', 200962417, 923768),
    // createData('Brazil', 'BR', 210147125, 8515767),
    // {product.map((product,index)=> (
    //   createData(product.productName,product.productCost,product.productId,product.serialNo)
    // ))}
// ];

export default function ProductList() {
  // const [page, setPage] = useState(0);
  // const [rowsPerPage, setRowsPerPage] = useState(5);

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };
  
  const [product,setProduct]=useState([]);
  useEffect(() => {
    axios.get(baseURL).then((response)=>
    {
      // console.log(response.data[0].productId);
      setProduct(response.data);
    })
  },[]);
//   const loadProduct = async() => {
//   const result=await axios.get("http://localhost:9191/listProduct");
//   setProduct(result.data);
//   console.log(result.data);
// }

  
    
    // <Paper elevation={0}  sx={{ width: '100%', overflow: 'hidden', marginTop: '10px' }}>
    //   <TableContainer sx={{ maxHeight: 300 }}>
    //     <Table stickyHeader aria-label="sticky table">
    //       <TableHead>
    //         <TableRow>
    //           {columns.map((column) => (
    //             <TableCell
    //               key={column.id}
    //               align={column.align}
    //               style={{ minWidth: column.minWidth }}
    //             >
    //               {column.label}
    //             </TableCell>
    //           ))}
    //         </TableRow>
    //       </TableHead>
    //       <TableBody>
    //         {rows
    //           .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    //           .map((row) => {
    //             return (
    //               <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
    //                 {columns.map((column,product) => {
    //                   const value = row[column.id];
    //                   return (
    //                     <TableCell key={column.id} align={column.align}>
    //                       {column.format && typeof value === 'number'
    //                         ? column.format(value)
    //                         : value}{product.productId}
                            
    //                     </TableCell>
    //                   );
    //                 })}
    //               </TableRow>
    //             );
    //           })}
    //       </TableBody>
    //     </Table>
    //   </TableContainer>
      {/* <Button variant="contained">Contained</Button> */}
      {/* <TablePagination
        // <Button variant="contained">Contained</Button>
      rowsPerPageOptions={[5, 15, 20]}
      component="div"
      count={rows.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    // </Paper>
    return (

    // <div className='container contain-table'>
    //   <div className='py-4'>
    //     <table className='table border shadow striped-table'>
    //       <thead>
    //         <tr>
    //           <th scope='col'>Product ID</th>
    //           <th scope='col'>Quantity</th>
    //           <th scope='col'>Product Name</th>
    //           <th scope='col'>MRP</th>
    //           <th scope='col'>Product Cost</th>
    //           <th scope='col'>Units Sold</th>
    //           <th scope='col'>Date</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {product.map((product,index)=>(
    //           <tr>
    //             <th scope='col' key={product.productId}>
    //                   {product.productId}
    //             </th>
    //             {/* <td scope='col'>{product.productId}</td> */}
    //             <td scope='col'>{product.serialNo}</td>
    //             <td scope='col'>{product.productName}</td>
    //             <td scope='col'>{product.productCost}</td>
    //             <td scope='col'>{product.boughtPrice}</td>
    //             <td scope='col'>{product.unitsSold}</td>
    //             <td scope='col'>{product.date}</td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>

    <Paper elevation={0} sx={{width:'100%',overflow:'hidden'}}>
    <TableContainer sx={{maxHeight:300}}>
  
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <div className='py-4'>
        <Table stickyHeader aria-label='sticky table' className='table striped-table'>

          <TableHead>
            <TableRow>
              <TableCell sx={{px:3}} scope='col' ><b>ID</b></TableCell>
              <TableCell sx={{px:3}} scope='col' ><b>Quantity</b></TableCell>
              <TableCell sx={{px:3}} scope='col' ><b>Name</b></TableCell>
              <TableCell sx={{px:3}} scope='col' ><b>MRP</b></TableCell>
              <TableCell sx={{px:3}} scope='col'><b>Cost</b></TableCell>
              <TableCell sx={{px:3}} scope='col'><b>UnitsBought</b></TableCell>
              <TableCell sx={{px:3}} scope='col'><b>Date</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {product.map((product,index)=>(
              <TableRow >
                <TableCell scope='col' key={product.productId}>
                      {product.productId}
                </TableCell>
                <TableCell scope='col'>{product.serialNo}</TableCell>
                <TableCell scope='col'>{product.productName}</TableCell>
                <TableCell scope='col'>{product.productCost}</TableCell>
                <TableCell scope='col'>{product.boughtPrice}</TableCell>
                <TableCell scope='col'>{product.unitsSold}</TableCell>
                <TableCell scope='col'>{product.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      </Table>
    </TableContainer>
    
    </Paper>

);
 
}
