const Partnership = require("../models/partnership");

exports.createPartnership = (req, res) => {
  const { title, desc, partnershipPicture } = req.body;

  const partnershipObject = { title, desc };

  if (req.file) {
    partnershipObject.partnershipPicture = req.files.filename;
  } else {
    partnershipObject.partnershipPicture = partnershipPicture;
  }

  const partnership = new Partnership(partnershipObject);

  partnership.save((error, data) => {
    if (error) {
      return res.status(400).json({
        message: "Something went wrong",
        data: error,
      });
    }

    if (data) {
      return res.status(200).json({
        message: "Partnership created Successfully..!",
        data: data,
      });
    }
  });
};

exports.getAllPartnership = (req, res) => {
  Partnership.find({}).exec((error, partnership) => {
    if (error) {
      return res.status(400).json({ message: "Something Went Wrong" });
    } else {
      return res.status(200).json({ data: partnership });
    }
  });
};

exports.deletePartnership = async (req, res) => {
  const id = req.body;
  Partnership.findOneAndDelete(id).exec();

  return res.status(200).json({ data: ids });
};
