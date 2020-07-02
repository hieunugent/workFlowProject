const db = require("../models");
const Project = db.projects;


exports.create = (req, res) => {
    if(!req.body.nameProject){
        res.status(400).send({
            message: "This can not be empty !",
        });
        return;
    }
    const project = new Project({
        nameProject: req.body.nameProject,
    });

    project
        .save(project)
        .then((data) => {
            res.send(data);
        })
        .catch((err)=> {
            res.status(500).send({
                message:
                err.message || "some error occurred while creating new project."
            });
        });
};