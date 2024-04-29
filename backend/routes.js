
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


// Fetch special date info from API
router.get('/special-days', async (req, res) => {
  try {
    const options = {
      method: 'GET',
      url: 'https://day-special-finder-api.p.rapidapi.com/all/04/30',
      headers: {
        'X-RapidAPI-Key': 'f3ecad7dd9mshd03659d07014c7cp1e6a74jsn817e07d03b3d',
        'X-RapidAPI-Host': 'day-special-finder-api.p.rapidapi.com'
      }
    };

    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
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
