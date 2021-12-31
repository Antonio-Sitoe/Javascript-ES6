const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  discription: String,
});


const homeModel = mongoose.model('Home', homeSchema)


