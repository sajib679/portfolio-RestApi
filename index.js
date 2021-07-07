require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors());

mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

app.use("/public", express.static(path.join(__dirname, "/src/uploads")));

// Main App Body

const adminRoutes = require("./src/routes/admin/auth");
const categoryRoutes = require("./src/routes/category");
const serviceRoutes = require("./src/routes/service");
const projectRoutes = require("./src/routes/project");
const blogImageRoutes = require("./src/routes/blogimage");
const blogRoutes = require("./src/routes/blog");
const partnershipRoutes = require("./src/routes/partnership");
const contactRoutes = require("./src/routes/contact");

// routes

app.use("/api", adminRoutes);
app.use("/api", categoryRoutes);
app.use("/api", serviceRoutes);
app.use("/api", projectRoutes);
app.use("/api", blogImageRoutes);
app.use("/api", blogRoutes);
app.use("/api", partnershipRoutes);
app.use("/api", contactRoutes);

// Main App Body End

app.listen(process.env.PORT, () => {
  console.log(`SERVER started at, http://localhost:` + process.env.PORT);
});
