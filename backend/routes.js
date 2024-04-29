
const express = require("express");
const axios = require("axios");
const User = require("./models/user");

const router = express.Router();



//Creating a new User
router.post('/create-user', async(req,res) =>{
  try{
    const user = await User({
      email:'',
      });
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
      });
      res.json(user);
  }catch(error){
    res.status(500).send(error.toString());
  }
});


router.get('/api/babynames?gender=', async (req, res) => {
  const gender = req.query.gender || 'neutral';
  const options = {
    method: 'GET',
    url: 'https://baby-names-by-api-ninjas.p.rapidapi.com/v1/babynames',
    params: { gender: gender },
    headers: {
      'X-RapidAPI-Key': 'c7b1e7049fmshbb9e2a30a0241d7p17f765jsn8a681bb98066',
      'X-RapidAPI-Host': 'baby-names-by-api-ninjas.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch baby names', message: error.message });
  }
});

module.exports = router;
