import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import ViewListIcon from '@material-ui/icons/ViewList';
import { List, ListItem, ListItemIcon, ListItemText, Hidden, Tab } from "@material-ui/core";
import './mycomponent.css'
// import clsx from "clsx";
// import { makeStyles } from "@material-ui/core/styles";
// import Box from "@material-ui/core/Box";
// import List from "@material-ui/core/List";

// import Divider from "@material-ui/core/Divider";

// import Link from "@material-ui/core/Link";
// import TabContent from 'react-bootstrap/TabContent'
// import TabContainer from 'react-bootstrap/TabContainer'
// import Tab from "@material-ui/core/Tab";
// import PropTypes from "prop-types";
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Nav from 'react-bootstrap/Nav';

// import { Router, NavLink } from "react-router-dom";
// import {
//   Switch,
//   Route,
// } from "react-router-dom";


export default function Dashboard() {
  const drawer = (
      <div >
      <div />
      <List>
        {['List Done', 'List Request', 'List Waiting', 'List Error'].map((text, index) => (
          <ListItem button key={text} >
            <ListItemText primary={text} />
          </ListItem>
        ))
        }
      </List>

      <main>
        <div> Main</div>
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