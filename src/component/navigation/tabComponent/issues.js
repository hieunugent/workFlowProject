import React from "react";
import { Button } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';

export default function Issues(){
    const handleIssueClick = () => {
        console.log("create new issue");

    }

    return (
        <div >
            <Button
                color="primary"
                variant="outlined"
                aria-controls="create-issue"
                onClick={handleIssueClick}
            >
                <AddIcon /> New Issues
           </Button>
            <h1> Issues starts </h1>


        </div>
    );
}