const Project = require("../models/project");

exports.createProject = (req, res) => {
  const { title, desc, techStack, link } = req.body;

  const tags = techStack.split(",");

  const projectObject = {
    title: title,
    desc: desc,
    techStack: tags,
    link: link,
  };

  if (req.body.category) {
    projectObject.category = req.body.category;
  }

  let projectPictures = [];

  if (req.files) {
    if (req.files.length > 0) {
      projectPictures = req.files.map((file) => {
        return { img: file.filename };
      });
    }

    projectObject.projectPictures = projectPictures;
  }

  const project = new Project(projectObject);

  project.save((error, data) => {
    if (error) {
      return res.status(400).json({
        message: "Something went wrong",
        data: error,
      });
    }

    if (data) {
      return res.status(200).json({
        message: "Project created Successfully..!",
        data: data,
      });
    }
  });
};

exports.getAllProject = (req, res) => {
  Project.find({}).exec((error, data) => {
    if (error) {
      return res.status(400).json({ message: "Something Went Wrong" });
    } else {
      return res.status(200).json({ data: data });
    }
  });
};

exports.deleteProject = async (req, res) => {
  const id = req.body;
  Project.findOneAndDelete(id).exec();

  return res.status(200).json({ data: ids });
};
