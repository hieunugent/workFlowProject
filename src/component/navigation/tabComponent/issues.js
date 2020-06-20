import React from "react";
import { Button, makeStyles, TextField, FormControl, InputLabel, Select, Input, MenuItem, useTheme } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';

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
        minWidth: 120,
        maxWidth: 300,
    },
  
})); 
const names=['project 1', 'project 2','project 3', 'project 4', 'project 5', 'project 6', ];
function getStyles(name, projectName, theme){
    return {
        fontWeight:
            projectName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular: theme.typography.fontWeightMedium,
    };
}
function IssueOfProject(){
    const classes = useStyles();
    const theme = useTheme();
    const [projectName, setProjectName] = React.useState([]);
    const handleChange=(event)=> {
        console.log(event.target);
        
        setProjectName(event.target.value);
    }
    return (
        <FormControl className={classes.formControl} >
           <Select
           multiple
           value={projectName}
                onChange={handleChange}
                input={<Input/>}
                renderValue={(seleted)=> {
                    if (seleted.length ===0){
                        return <em>Project Name</em>
                    }
                    return seleted;  
                }}
                MenuProps={MenuProps}
                inputProps={{'aria-label': 'Without label'}}
                >
                <MenuItem disabled value="">
                    <em>Project Name</em>
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
function AddIssueButton (){
    const classes = useStyles();

    const handleIssueClick = () => {
        console.log("create new issue");

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

            
                <div className={classes.formInput}>
                <h1> New Issue in <IssueOfProject/> </h1>
                <TextField 
                    id="sumary-issue" 
                    style={{ margin: 8 }} 
                    label="Sumary Issue" 
                    fullWidth 
                    placeholder=" Add quick sumary for your issues"
                    margin="normal"
                    // InputLabelProps={{
                    //     shrink: true,
                    // }}
                />
                <TextField id="description" label="Description" />

                </div>
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