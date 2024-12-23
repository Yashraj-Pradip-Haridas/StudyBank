const mongoose = require('mongoose');

// Create a schema to store file URLs
const fileSchema = new mongoose.Schema({
  url: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now },
  year: {type: Number, require: true},
  course: {type: String, require: true}
},{timestamps: true});

// Create a model
const File = mongoose.model('File', fileSchema);

module.exports = File;
