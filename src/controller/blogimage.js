const BlogImage = require("../models/blogimage");

exports.createImage = (req, res) => {
  const blogImageObject = {};
  if (req.file) {
    const image = req.file.filename;

    console.log(image);

    blogImageObject.link = image;

    const blogImage = new BlogImage(blogImageObject);

    blogImage.save((error, data) => {
      if (error) {
        return res.status(400).json({
          message: "Something went wrong",
          data: error,
        });
      }

      if (data) {
        return res.status(200).json({
          message: "Image created Successfully..!",
          data: process.env.BASE_IMAGE_URL + data.link,
        });
      }
    });
  }
};

exports.getAllImage = (req, res) => {
  BlogImage.find({}).exec((error, data) => {
    if (error) {
      return res.status(400).json({ message: "Something Went Wrong" });
    }

    if (data) {
      const allLink = data.map(
        (link) => process.env.BASE_IMAGE_URL + link.link
      );
      return res.status(200).json({ data: allLink });
    }
  });
};

exports.deleteImage = async (req, res) => {
  const id = req.body;
  BlogImage.findOneAndDelete(id).exec();

  return res.status(200).json({ data: ids });
};
