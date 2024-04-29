
const express = require("express");
const axios = require("axios");
const Story = require("./models/user");

const router = express.Router();

// Fetch baby names from the API
router.get("/baby-names", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.babynames.com/v1/names/?gender=both&start=A&count=10"
    );
    res.json(response.data.names);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

//Creating a new User
router.post('/create-user', async(req,res) =>{
  try{
    const user = await User({
      email:'Dave',
      password:'123',});
      res.json(user);
  }catch(error){
    res.status(500).send(error.toString());
  }
});

//Logining in
router.post('/login-user', async(req,res) =>{
  try{
    const user = await User({
      email:'',
      password:'',});
      res.json(user);
  }catch(error){
    res.status(500).send(error.toString());
  }
});




// Save a story to MongoDB (if needed)
router.post("/save-story", async (req, res) => {
  try {
    // Implementation for saving stories to MongoDB goes here if necessary
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

module.exports = router;
