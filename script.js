const express = require("express");
const { body, validationResult } = require("express-validator");
const app = express();
const router = express.Router();
const userModel = require("./config/db.js");
// const ejs = require("ejs");
// const submit=ejs.require("./views/submitted_Form")
const port = process.env.PORT || 3000;
//for form fill up this midddware is used
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static("./public"));
// const items = [
//   await userModel.find()
// ];
app.get("/", (req, res) => {
  // res.render("index");
  res.send("Just fillUp the form");
});
app.get("/form-filUp", (req, res) => {
  // res.render("index");
  res.render("index");
});
app.post(
  "/form-filUp",
  body("University_Registration_No").trim().isLength(11),
  body("University_Roll_No").trim().isLength(11),
  body("Mobile_No").trim().isLength(10),
  async (req, res, next) => {
    const {
      Student_Name,
      option,
      University_Registration_No,
      University_Roll_No,
      Mobile_No,
      University_Email_No,
    } = req.body;
    const UniversityRollNo = await userModel.findOne({
      University_Roll_No: University_Roll_No,
    });
    const UniversityRegistrationNo = await userModel.findOne({
      University_Registration_No: University_Registration_No,
    });
    const result = validationResult(req);
    if (result.isEmpty() && (!UniversityRollNo || !UniversityRegistrationNo)) {
      await userModel.create({
        Student_Name: Student_Name,
        option: option,
        University_Registration_No: University_Registration_No,
        University_Roll_No: University_Roll_No,
        Mobile_No: Mobile_No,
        University_Email_No: University_Email_No,
      });
      return res.render("submitted_Form");
    }
    if (!result.isEmpty()) {
      res.status(400).json({ errors: result.array() });
    } else {
      res.send("User is exist!!");
    }
  }
);

app.get("/edit-form/:No", async (req, res) => {
  const itemId = String(req.params.No); // Fetching the parameter from the route
  try {
    // Fetch the item by University_Registration_No or _id
    const item = await userModel.findOne({
      University_Registration_No: itemId,
    });
    // console.log(item);

    if (item) {
      res.render("edit", { item }); // Pass the retrieved data to the EJS template
    } else {
      res.status(404).send("Item not found");
    }
  } catch (error) {
    res.status(500).send("An error occurred while fetching data.");
  }
});

app.post("/update/:No", async (req, res) => {
  const itemId = String(req.params.No); // Fetching the parameter from the route

  const {
    Student_Name,
    option,
    University_Registration_No,
    University_Roll_No,
    Mobile_No,
    University_Email_No,
  } = req.body;

  try {
    // Update the document by University_Registration_No
    const updatedItem = await userModel.findOneAndUpdate(
      { University_Registration_No: itemId },
      {
        Student_Name,
        option,
        University_Registration_No,
        University_Roll_No,
        Mobile_No,
        University_Email_No,
      },
      { new: true } // Return the updated document
    );

    if (updatedItem) {
      res.redirect("/"); // Redirect to the home page after updating the item
    } else {
      res.status(404).send("Item not found!");
    }
  } catch (error) {
    res.status(500).send("An error occurred while updating data!");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
