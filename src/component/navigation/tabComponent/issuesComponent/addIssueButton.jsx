import React, { useState } from "react";
import { Button, makeStyles, TextField, FormControl, Select, Input, MenuItem, useTheme, Box,  } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import "./issues.css";

// const MongoClient= require('mongodb').MongoClient;
// const assert = require('assert');

// const url = 'mongodb://localhost:27017';

// const dbName = 'issuesDB';

// const client = new MongoClient(url);

// client.connect(function(err){
//     assert.equal(null, err);
//     console.log("connected successfully to server");
//     const db = client.db(dbName);
//     client.close();
    
// });










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
    nameProject: "project A",
    sumariesIssue: " this is First Issue ",
    descriptionsIssue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}, {
    nameProject: "project E",
    sumariesIssue: " this is second Issue ",
    descriptionsIssue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}, {
    nameProject: "project B",
    sumariesIssue: " this is third Issue ",
    descriptionsIssue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}, {
    nameProject: "project C",
    sumariesIssue: " this is fouth Issue ",
    descriptionsIssue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}, {
    nameProject: "project D",
    sumariesIssue: " this is fifth Issue ",
    descriptionsIssue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}, {
    nameProject: "project F",
    sumariesIssue: " this is sixth Issue ",
    descriptionsIssue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
},]
const useStyles = makeStyles((theme) => ({
    formInput: {
        '& > *': {
            margin: theme.spacing(1),
            width: '70%',

        },
    },

    formControl: {
        margin: theme.spacing(1),
        width: 'auto',
        minWidth: 120,
        maxWidth: 300,
    },
    inputOption: {
        margin: theme.spacing(1),
        position: "auto",
        marginLeft: '15%',
        width: '40%',

    },
    fieldButton: {
        '& > *': {
            margin: theme.spacing(1),

            left: "60%",
            position: "relative",
        },
    },
    previewField: {
    },
}));
const names = ['project 1', 'project 2', 'project 3', 'project 4', 'project 5', 'project 6', 'new project 7',];
function getStyles(name, projectName, theme) {
    return {
        fontWeight:
            projectName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
    };
}
const IssueForm = (props) => {
    return (

        <div className="leftaligning">
            <h4>{props.nameProject}</h4>
            <h4>{props.sumariesIssue}</h4>
            <p> {props.descriptionsIssue} </p>
        </div>
    );
}

export default function AddIssueButton (props){
    const classes = useStyles();
    const [projectName, setProjectName] = useState([]);
    const [openissueform, setissueOpen] = useState('none');
    const [modifyIssueForm, setIssueModify] = useState('block');
    const [issuePageON, setIssuepageOn] = useState(false);


    const [issueFormInfo, setIssueInfo] = useState(
        {
            nameProject: "",
            sumariesIssue: "",
            descriptionsIssue: "",
        }
    );

    const [listIssue, setListIssue] = useState([]);
    const addListIssue = (newNode) => {
        setListIssue(prevList => {
            return [...prevList, newNode];
        });
    }

    const submitIssue = (event) => {      
        addListIssue(issueFormInfo);
        setIssueInfo({
            nameProject: "",
            sumariesIssue: "",
            descriptionsIssue: "",
        });
        setIssueModify('block');
        setissueOpen('none');
        setIssuepageOn(false);
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

    }

    const handleIssueClick = () => {
        if (!issuePageON) {
           
            setissueOpen('block');
            setIssueModify('none')
            setIssuepageOn(true);
        }
        else {
            setissueOpen('none');
            setIssueModify('block')
            setIssuepageOn(false);
        }
    }


    const IssueOfProject = () => {
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
            <h1> Issue Pages</h1>
            <div className="issuesButton" >
                <Button
                    color="primary"
                    variant="contained"
                    aria-controls="create-issue"
                    onClick={handleIssueClick}
                >
                    <AddIcon /> New Issues
            </Button>
            </div>

            <Box display={openissueform}>
                <div className={classes.formInput}>
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
                        onChange={handlePreviewIssue} />


                    <div className={classes.fieldButton}>
                        <Button variant="contained" color='primary' onClick={submitIssue} onChange={addListIssue}> Create </Button>
                        <Button variant="outlined" color='primary' onClick={handleIssueClick}> Cancel </Button>
                    </div>

                </div>
                <div className="leftaligning" id="previewSection">
                    <h3> Preview Issue</h3>
                    <h4>{issueFormInfo.nameProject}</h4>
                    <h4>{issueFormInfo.sumariesIssue}</h4>
                    <p> {issueFormInfo.descriptionsIssue} </p>
                </div>
            </Box>
            <Box display={modifyIssueForm}   >
                <h2 className="leftaligning"> All the Issue that you have</h2>
                {listIssueTemple.map((list, index) => {
                    return (
                        <div key={`${index}-${list.nameProject}`}>
                            <IssueForm

                                id={index}
                                value={list}
                                nameProject={list.nameProject}
                                sumariesIssue={list.sumariesIssue}
                                descriptionsIssue={list.descriptionsIssue}
                            />
                        </div>
                    );
                })}
                {listIssue.map((list, index) => {
                    return (

                        <div key={`${index}-${list.nameProject}`}>

                            <IssueForm

                                id={index}
                                value={list}
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