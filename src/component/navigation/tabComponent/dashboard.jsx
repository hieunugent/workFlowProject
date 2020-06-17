import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Button, Menu, MenuItem } from "@material-ui/core";
import './mycomponent.css'
import MainMenu from "./listItem";



export default function Dashboard() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick =(event)=> {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const drawer = (
      <div >
      <div className="buttonOnleft" >
        <Button
          color="primary"
          variant="outlined"
          aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}
        > Open Menu</Button>
      </div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        keepMounted
        onClose={handleClose}
        >
        {['List Done', 'List Request', 'List Waiting', 'List Error'].map((text, index) => (
          <MenuItem onClick={handleClose} >
            <div> {text}</div> 
          </MenuItem>
        ))
        }
      </Menu>
      <main>
        <div> <MainMenu/> </div>
      </main>
      </div>

  );
 
  return (
 
    <div  role='presentation'>
        <CssBaseline />

     
        
          {drawer}
    
        
        
      
    </div>

  
  );
}