import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';


   // List of Items in the Drawer
   const CatagoryItems = [
    { text: "Movie", path: `/` },
    { text: "Series", path: `/series` },
    { text: "Show", path: `/shows` },
  ];
  

export default function SideDrawer({children}) {
  const [state, setState] = React.useState({
   
    left: false,
   
  });

  const navigate = useNavigate();



  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };



  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List >
        <IconButton sx={{padding:"15px 20px"}}>
          <MenuIcon/>
        </IconButton>
          <Divider/>
        {CatagoryItems.map((text, index) => (
          <ListItem button key={index} onClick = { () => navigate(text.path) }>
            
            <ListItemText primary={text.text} />
          </ListItem>
        ))}
      </List>
     
      
    </Box>
  );

  return (
    <div>
    
        <React.Fragment >
          <Button onClick={toggleDrawer("left", true)}>{children}</Button>
          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
        </React.Fragment>
   
    </div>
  );
}
