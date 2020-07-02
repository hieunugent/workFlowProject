module.exports = (mongoose) => {
    var schema = mongoose.Schema(
        {
            nameProject:String,
        },
        {
            timestamps: true
        }
    );
    schema.method("toJSON", function (){
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });
    const Project = mongoose.model("project", schema);
    return Project;
};

exports.findAll = (req, res) => {
    const nameProject = req.query.nameProject;
    var condition = nameProject
        ? { nameProject: { $regex: new RegExp(nameProject), $options: "i" } }
        : {};

    Issue.find(condition)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Project.",
            });
        });
}