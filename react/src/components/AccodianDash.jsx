import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import axios from 'axios';
const baseURL="http://localhost:9191/popularProduct";

export default function AccordionDash() {
  const[product,setProduct] =React.useState();
  React.useEffect(()=>{
    axios.get(`${baseURL}`).then((response)=>{
        setProduct(response.data);
        console.log(response.data);
    });
},[]);

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',maxHeight:300,overflow:'hidden' }}>
      <nav aria-label="main mailbox folders">
        <List>
        {product?.map((n)=>(

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={n} />
            </ListItemButton>
          </ListItem>

          
        ))};
        </List>
        
        
      </nav>
      
    </Box>
  );
}
{/* <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={product} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={product} />
            </ListItemButton>
          </ListItem> */}