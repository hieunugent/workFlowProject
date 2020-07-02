import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import PostAddIcon from '@material-ui/icons/PostAdd';
import "./projectpage.css";






const ProjectFrom =(props) => {
    return (
        <div className="leftaligning">
            <h2> {props.nameProject}</h2>
            <h3> Total issue is </h3>
        </div>
    );
}

export default function Project() {
   
    const [listProject, setListProject] = useState([]);

    const handleNewProject =(event)=> {

            const {name, value} = event.target;
            setProjectInfo({
                ...projectFormInfo,
                [name]:value
            });

    };
    const addListProject = (newProject)=> {
        setListProject(preList => {
            return [...preList, newProject];
        });
    };
    const saveProject = () => {
        var data = {
            nameProject:projectFormInfo.nameProjectname,
        };
        console.log(data);
        addListProject(projectFormInfo);
        setProjectInfo(initialProject);

      
    };
    
    const initialProject={
       
        nameProject:"",

    };
    const [projectFormInfo, setProjectInfo] = useState(
        initialProject
    )
    return (
        <div className="">
            <h1> Project Start</h1>
            <div className="projectcss">
          
                <TextField
                    className="inputBox"
                    id="project-name"
                    name="nameProject"
                    label="Project Name"
                    value={projectFormInfo.nameProject}
                    placeholder="type your new project name"   
                    onChange={handleNewProject}
                    style={{marginRight:8}}
                    variant="standard"
                />
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={saveProject}
                
                >
                    <PostAddIcon fontSize="large"/>
                </Button>
            </div>
            <div>
              <h1> Show All project </h1>

              {listProject.map((list, index) => {
                return(
                    <div key={`${index}-${list.nameProject}`}>
                        <ProjectFrom
                            id={index}
                            value={list}
                            nameProject={list.nameProject}
                        />

                    </div>
                );
              })}
     
            
           </div>
          

        </div>

    )
}