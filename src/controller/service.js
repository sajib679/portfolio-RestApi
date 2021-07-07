const Service = require("../models/service");

exports.createService = (req, res) => {
  const { title, desc } = req.body;

  const serviceObject = { title: title, desc: desc };

  if (req.body.category) {
    serviceObject.category = req.body.category;
  }
  let servicePictures = [];

  if (req.files) {
    if (req.files.length > 0) {
      servicePictures = req.files.map((file) => {
        return { img: file.filename };
      });
    }

    serviceObject.servicePictures = servicePictures;
  }

  const service = new Service(serviceObject);

  service.save((error, data) => {
    if (error) {
      return res.status(400).json({
        message: "Something went wrong",
        data: error,
      });
    }

    if (data) {
      return res.status(200).json({
        message: "Service created Successfully..!",
        data: data,
      });
    }
  });
};

exports.getAllService = (req, res) => {
  Service.find({}).exec((error, service) => {
    if (error) {
      return res.status(400).json({ message: "Something Went Wrong" });
    } else {
      return res.status(200).json({ data: service });
    }
  });
};

exports.deleteService = async (req, res) => {
  const id = req.body;
  Service.findOneAndDelete(id).exec();

  return res.status(200).json({ data: ids });
};
