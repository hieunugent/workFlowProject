import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  
} from "react-router-dom";
import Dashboard from "./tabComponent/dashboard";
import Project from "./tabComponent/projectComponent/addProject";
// import Issues from "./tabComponent/issues";
import Reports from "./tabComponent/report";
import {Box, Toolbar, IconButton, Drawer, Typography, ListItem, makeStyles } from "@material-ui/core";
import Copyright from './tabComponent/copyright';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import clsx from 'clsx';
import AddIssueButton from "./tabComponent/issuesComponent/addIssueButton";
import Login from "./tabComponent/authentication/login";
const drawerWidth= 240;
const useStyles = makeStyles((theme)=> ({
  root:{
   // display:'flex-start',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  content: {
  
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
   
    marginTop: `60px`,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },


}));
export default function Main() {
  const classes = useStyles();
  //const theme = useTheme();
  const [open , setOpen] = React.useState(false);
  const handleDrawerOpen =()=> {
    setOpen(true);
  }
  const handleDrawerClose = ()=> {
    setOpen(false);
  }
  return (
    <div >
    <AppBar position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]:open,
        })} >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap>
           Temperary Response Header
        </Typography>
        </Toolbar>
    </AppBar>
      <Router>
     <nav>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
            >
          <div >
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <List>
              <ListItem>   <Link  to="/" >
              Dashboard
              </Link></ListItem>
              <ListItem>   <Link  to="/projects" >          
              Projects
              </Link></ListItem>
              <ListItem>   <Link  to="/issues">
              Issues            
              </Link> </ListItem>
              <ListItem>   <Link to="/logins">
              Login
              </Link></ListItem>
              <ListItem>   <Link  to="/Report">
              Reports  
              </Link></ListItem>
              <ListItem>   <Link to="/doc">
              Documents
              </Link></ListItem> 
          </List>
        </Drawer>
     </nav>
        <main className={clsx(classes.content,{
          [classes.appBarShift]: open,}
          )}>  
          <hr />
          <div  >

          <Switch>
              <Route exact path="/"><Dashboard  /></Route>
              <Route exact path="/projects"   component={Project}></Route>
              <Route exact path="/issues"     component={AddIssueButton}></Route>
              <Route exact path="/logins"     component={Login}> users login</Route>
              <Route path="/Report"><Reports />report</Route>
              <Route path="/Doc">Documents</Route>
          </Switch>
          <Box pt={4}>
            <Copyright />
          </Box>
          </div>

      </main> 

      </Router>
    </div>
  
  );
}




