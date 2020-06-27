var express = require('express');
var router = express.Router();

const cors = require('cors');

const bodyParser = require("body-parser");



router.get('/', function (req, res, next) {
    res.send('Start working with database once using nodemon');
});

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
    },
    { timestamps:true}

);


const projects = new MyProject(
    {
  nameProject: "Project 2",
  isDoneProject: false,   
    }
);
projects.save();
issues.save();

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log("successfull using database");
});






module.exports = router;