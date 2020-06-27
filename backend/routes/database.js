var express = require('express');
var router = express.Router();

const cors = require('cors');


const bodyParser = require("body-parser");

// mongoose starting project
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/WorkFlowDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const projectSchema = new mongoose.Schema({
  
  nameProject: String,
  isDoneProject: Boolean,
});
projectSchema.method("toJSON", function(){
    const {__v, _id, ...object}=this.toObject();
    object.id = _id;
    return object;
});

const MyProject = mongoose.model("Project", projectSchema);
const issueSchema = new mongoose.Schema({
  nameProject: String,
  sumaryIssue:String,
  descriptionsIssue: String,
})

const MyIssue = mongoose.model("Issue", issueSchema);

const issues = new MyIssue(
    {
        nameProject: "Project 1",
        sumaryIssue:"the first Issue of Project 1",
        descriptionsIssue:"is issue is starting  with the project 1 and it may not be solve by now"
    }
   

);


const project1 = new MyProject(
    {
  nameProject: "Project 1",
  isDoneProject: false,   
    }
);
const project2 = new MyProject({
  nameProject: "Project 2",
  isDoneProject: false,
});
const project3 = new MyProject({
  nameProject: "Project 3",
  isDoneProject: false,
});
const projects = [project1,project2,project3];
MyProject.insertMany(projects, function(err){
    if(err){
        console.log(err);
        
    }
    else{
        console.log("successfully saved defauldt value");
        
    }
});

// projects.save();
// issues.save();

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log("successfull using database");
});


// exports.create = (req, res) => {
//   if (!req.body.nameProject) {
//     res.status(400).send({ message: "COntent cna not be empty " });
//     return;
//   }
//   const projects = new dataProject({
//     nameProject: req.body.nameProject,
//     isDoneProject: req.body.isDoneProject,
//   });

//   projects
//     .save(projects)
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while creating the Project. ",
//       });
//     });
// };
// exports.findAll = (req, res) => {
//   const nameProject = req.query.nameProject;
//   var condition = nameProject
//     ? { nameProject: { $regex: new RegExp(nameProject), $option: "i" } }
//     : {};

//   dataProject
//     .find(condition)
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).end({
//         message: err.message || "Some error occured  while retrieving project",
//       });
//     });
// };


router.get("/", function (req, res, next) {
  //res.send(projects.nameProject)
  MyProject.find({}, function(err, foundItems){
    res.send(foundItems);
      
  });

});
// router.post("/", dataProject.create);
// router.get("/", dataProject.findAll);
module.exports = router;