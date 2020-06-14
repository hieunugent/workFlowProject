import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import DashBoard from "./tabComponent/dashboard";
import { IconButton, Badge, Toolbar } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Project from "./tabComponent/project";
import Issues from "./tabComponent/issues";
import Report from "./tabComponent/report";
import Users from "./tabComponent/users";



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

function a11yProps(index) {
  return {
    id: `simple-auto-tab-${index}`,
    "aria-controls": `simple-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:'100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Main() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="light">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable tabs example"
          scrollButtons="auto"
          variant="scrollable"
        >
          <Tab label="Dash Board" {...a11yProps(0)} />
          <Tab label="Project" {...a11yProps(1)} />
          <Tab label="Issues" {...a11yProps(2)} />
          <Tab label="Report" {...a11yProps(3)} />
          <Tab label="Users" {...a11yProps(4)} />
          <Toolbar>
            <IconButton color="inherit">
              <Badge badgeContent={10} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </Tabs>
      </AppBar>
      
    
      <TabPanel value={value} index={0}>
        <DashBoard />
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* <Project/> */}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {/* <Issues/> */}
      </TabPanel>
      <TabPanel value={value} index={3}>
        {/* <Report/> */}
      </TabPanel>
      <TabPanel value={value} index={4}>
        {/* <Users/> */}
      </TabPanel>
    </div>
  );
}
