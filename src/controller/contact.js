const Contact = require("../models/contact");

exports.createContact = (req, res) => {
  const { fullName, email, message, businessName, businessLink } = req.body;

  const contactObject = {
    fullName,
    email,
    message,
    businessDetails: { businessLink, businessName },
  };

  const contact = new Contact(contactObject);

  contact.save((error, data) => {
    if (error) {
      return res.status(401).json({
        message: "Something went wrong",
        data: error,
      });
    }

    if (data) {
      return res.status(200).json({
        message: "Message Sent Successfully..!",
        data: data,
      });
    }
  });
};

exports.getAllContact = (req, res) => {
  Contact.find({}).exec((error, contact) => {
    if (error) {
      return res.status(401).json({ message: "Something Went Wrong" });
    } else {
      return res.status(200).json({ data: contact });
    }
  });
};

exports.deleteContact = async (req, res) => {
  const id = req.body;
  Contact.findOneAndDelete(id).exec();

  return res.status(200).json({ data: ids });
};
