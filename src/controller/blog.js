const Blog = require("../models/blog");

exports.createBlog = (req, res) => {
  const { title, body, summary } = req.body;

  const blogObject = { title, body, summary };

  blogObject.createdBy = req.user;

  if (req.body.category) {
    blogObject.category = req.body.category;
  }

  if (req.file) {
    blogObject.featureImage = req.file.filename;
  } else {
    blogObject.featureImage = req.body.featureImage;
  }

  const blog = new Blog(blogObject);

  blog.save((error, data) => {
    if (error) {
      return res.status(400).json({
        message: "Something went wrong",
        data: error,
      });
    }

    if (data) {
      return res.status(200).json({
        message: "Blog created Successfully..!",
        data: data,
      });
    }
  });
};

exports.getAllBlog = (req, res) => {
  Blog.find({})
    // .select("title summary featureImage")
    .exec((error, blog) => {
      if (error) {
        return res.status(400).json({ message: "Something Went Wrong" });
      } else {
        return res.status(200).json({ data: blog });
      }
    });
};

exports.deleteBlog = async (req, res) => {
  const id = req.body;
  Blog.findOneAndDelete(id).exec();

  return res.status(200).json({ data: ids });
};
