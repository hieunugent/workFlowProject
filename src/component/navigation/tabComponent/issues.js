import React, { useState } from "react";
import { Button, makeStyles, TextField, FormControl,  Select, Input, MenuItem, useTheme,  Box, Grid } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import "./issues.css";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};
const listIssueTemple = [{
    projectName: "project A",
    sumariesIssue: " this is First Issue ",
    descriptionsIssue: "the issue is useed to test all the file of list template "
}, {
    projectName: "project b",
        sumariesIssue: " this is second Issue ",
        descriptionsIssue: "the issue is useed to test all the file of list template "
    }, {
        projectName: "project B",
        sumariesIssue: " this is third Issue ",
        descriptionsIssue: "the issue is useed to test all the file of list template "
    }, {
        projectName: "project C",
        sumariesIssue: " this is fouth Issue ",
        descriptionsIssue: "the issue is useed to test all the file of list template "
    }, {
        projectName: "project D",
        sumariesIssue: " this is fifth Issue ",
        descriptionsIssue: "the issue is useed to test all the file of list template "
    }, {
        projectName: "project F",
        sumariesIssue: " this is sixth Issue ",
        descriptionsIssue: "the issue is useed to test all the file of list template "
    },]
const useStyles = makeStyles((theme) => ({
    formInput: {
        '& > *': {
            margin: theme.spacing(1),
            width: '70%',
         
        },
    },
    newIssue: {
        '& > *': {
            margin: theme.spacing(1),

        },
    },
    formControl: {
        margin: theme.spacing(1),
        width:'auto',
        minWidth: 120,
        maxWidth: 300,
    },
    inputOption:{
        margin: theme.spacing(1),
        position:"auto",
        marginLeft:'15%', 
        width: '40%',

    },
    fieldButton:{
        '& > *': {
            margin: theme.spacing(1),
            
            left: "60%",
            position:"relative",


        },

    },
    previewField:{
       
    },
  
})); 
const names=['project 1', 'project 2','project 3', 'project 4', 'project 5', 'project 6','new project 7', ];
function getStyles(name, projectName, theme){
    return {
        fontWeight:
            projectName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular: theme.typography.fontWeightMedium,
    };
}
function IssueForm(props){
    return (
       
                <div>
                <h4>{props.nameProject}</h4>
                <h4>{props.sumariesIssue}</h4>
                <p> {props.descriptionsIssue} </p>
                </div>
    );
}

function AddIssueButton (props){
    const [projectName, setProjectName] = useState([]);
    const [sumaries, setSumary] = useState('');
    const [descriptions, setDescript] = useState('');

    const classes = useStyles();
    const [openissueform, setissueOpen] = useState('none');
    const [issuePageON, setIssuepageOn] = useState(false);
   
    //const [currentProject, setCurrentproject] = useState('');
    
    const [issueFormInfo, setIssueInfo] = useState(
            {  
                nameProject: "",
                sumariesIssue: "",
                descriptionsIssue: "",
            }
        );

    const [listIssue, setListIssue] = useState([]);
    function addListIssue(newNode) {
        setListIssue(prevList => {
            return [...prevList, newNode];
        });
    }
   
  function submitIssue(event){
      console.log(issueFormInfo);
      
      addListIssue(issueFormInfo);
      setIssueInfo({
          nameProject: "",
          sumariesIssue: "",
          descriptionsIssue: "",
      });
      event.preventDefault();

  }


    const handlePreviewIssue = (event) => {
        const { name, value } = event.target;
        setIssueInfo(prevItems => {
            return {
                ...prevItems,
                [name]: value
            };
        });
        if (event.target.id === "sumary-issue") {
            setSumary(event.target.value);
        }
        else if (event.target.id === "description") {
            setDescript(event.target.value);
        }

    }

    const handleIssueClick = () => {
        if (!issuePageON) {
            console.log("create new issue");
            setissueOpen('block');
            setIssuepageOn(true);
        }
        else {
            setissueOpen('none');
            setIssuepageOn(false);
        }
    }
    

    function IssueOfProject() {
        const classes = useStyles();
        const theme = useTheme();    
        const handleChange = (event) => {
            const { name, value } = event.target;
            setIssueInfo(prevItems => {
                return {
                    ...prevItems,
                    [name]: value
                };
            });
            setProjectName(event.target.value);
        }
        return (

            <FormControl className={classes.formControl} >
                <Select
                    id="selectProject"
                    name="nameProject"
                    value={issueFormInfo.nameProject}
                    onChange={handleChange}
                    input={<Input />}
                    MenuProps={MenuProps}
                    inputProps={{ 'aria-label': 'Without label' }}
                    displayEmpty

                >
                    <MenuItem value="" disabled>
                        Your Project Name
                </MenuItem>
                    {names.map((name) => (
                        <MenuItem key={name} value={name} style={getStyles(name, projectName, theme)}>
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        );
    }  
    return (
        <div>
            <Button
                className={classes.newIssue}
                color="primary"
                variant="outlined"
                aria-controls="create-issue"
                onClick={handleIssueClick}
            >
                <AddIcon /> New Issues
            </Button>
               <Box display={openissueform}>
                <div   className={classes.formInput }>
                    <h1 className={classes.inputOption}  > 
                         New Issue in 
                         <IssueOfProject id="currentProjectname" /> 
                    </h1>
                <TextField 
                    id="sumary-issue"
                    value={issueFormInfo.sumariesIssue}
                    name="sumariesIssue"
                    style={{ margin: 8 }} 
                    label="Sumary Issue" 
                    fullWidth 
                    placeholder=" Add quick sumary for your issues"
                    margin="normal"
                    onChange={handlePreviewIssue}
                        
                />
                <TextField 
                     id="description" 
                     value={issueFormInfo.descriptionsIssue}
                     name="descriptionsIssue"
                     label="Description" 
                     onChange={handlePreviewIssue}  />


                    <div className={classes.fieldButton}>
                        <Button variant="contained" color='primary' onClick={submitIssue} > Create </Button>
                        <Button variant="outlined"  color='primary' onClick={handleIssueClick}> Cancel </Button>
                    </div>  

                </div>
                <div className="leftaligning" id = "previewSection">
                    <h3> Preview Issue</h3>
                    <h4>{projectName}</h4>
                    <h4>{sumaries}</h4>
                    <p> {descriptions} </p>
                </div>
                </Box>
            <Box display='block'    >
                the Regulation form 
                 {addListIssue }
                {listIssue.map((list, index) => {
                 return (
                     <div className="leftaligning" key={index}>
                         <IssueForm
                            key={index}
                            id={index}
                            nameProject={list.nameProject}
                            sumariesIssue={list.sumariesIssue}
                            descriptionsIssue={list.descriptionsIssue}
                         />
                     </div>
                 );
            })} 

            </Box>
        </div>
       
    );
}




export default function Issues(){  
    return (
        <div>
            <h1> Issues starts </h1>
            <AddIssueButton/>
        </div>
    );
}