import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
//import Lists from "@material-ui/core/Lists";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
// import IconButton from "@material-ui/core/IconButton";
// import Container from "@material-ui/core/Container";
// import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
// import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// import MainMenu from "./listItem";
// import Tabs from "@material-ui/core/Tabs";

import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
function a11yList(index) {
  return {
    id: `simple-auto-list-${index}`,
    "aria-controls": `simple-auto-listpanel-${index}`,
  };
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));


export default function Dashboard() {
  const classes = useStyles();
   // const [open, setOpen] = React.useState(true);
  const [value, setValues] = React.useState(1);
  function handleClick(event){
   //  console.log(event.value);
    
    handleChange(event, value);
  }
  const handleChange = (event, newValue) => {
    console.log(newValue); 
    setValues(newValue);
  };
  return (
 
      <div className={classes.root}>
        <CssBaseline />

        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !true && classes.drawerPaperClose),
          }}
          open={true}
        >

          <Divider />
          <div onClick={handleClick}>
            <List>
              <Tab
                value={value}
                label="main manu"
                {...a11yList(0)}
                
              />
            </List>
            <Divider />
            <List>
              <Tab
                value={value}
                label="secondary Manu"
                {...a11yList(1)}
                
              />
            </List>
          </div>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <TabPanel  value={value} index={0}>
            MainMenu
          </TabPanel>
          <TabPanel value={value} index={1}>
            secondary
          </TabPanel>
          <Box pt={4}>
            <Copyright />
          </Box>
        </main>
      </div>
  
  );
}