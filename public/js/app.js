// app.js

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3001; // or any other port you prefer

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/campusmarket', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a simple schema for your listings
const listingSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
});

const Listing = mongoose.model('Listing', listingSchema);

// Middleware to parse JSON
app.use(express.json());

// Define routes
// app.get('/listings', async (req, res) => {
//   try {
//     const listings = await Listing.find();
//     res.json(listings);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });
app.get('/', (req, res) => {
    res.send('Hello, CampusMarket!');
  });
  

app.post('/listings', async (req, res) => {
  try {
    const { title, description, price } = req.body;
    const newListing = new Listing({ title, description, price });
    await newListing.save();
    res.status(201).json(newListing);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
