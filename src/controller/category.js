const Category = require("../models/category");

exports.createCategory = (req, res) => {
  console.log(req.icon);
  const { title, desc, icon } = req.body;

  console.log(icon);

  const catObject = { title: title, desc: desc, icon: JSON.parse(icon) };

  if (req.body.parentId) {
    catObject.parentId = req.body.parentId;
  }
  let categoryPictures = [];

  if (req.files) {
    if (req.files.length > 0) {
      categoryPictures = req.files.map((file) => {
        return { img: file.filename };
      });
    }

    catObject.categoryPictures = categoryPictures;
  }

  const category = new Category(catObject);

  category.save((error, data) => {
    if (error) {
      return res.status(400).json({
        message: "Something went wrong",
        data: error,
      });
    }

    if (data) {
      return res.status(200).json({
        message: "Category created Successfully..!",
        data: data,
      });
    }
  });
};

exports.getAllCategory = (req, res) => {
  Category.find({}).exec((error, categories) => {
    if (error) {
      return res.status(400).json({ message: "Something Went Wrong" });
    } else {
      return res.status(200).json({ data: categories });
    }
  });
};

exports.deleteCategory = async (req, res) => {
  const id = req.body;
  Category.findOneAndDelete(id).exec();

  return res.status(200).json({ data: ids });
};
