const mongoose = require('mongoose');

const PlantSchema = new mongoose.Schema({
  id: String,
  text: String
});


PlantSchema.methods = {
  all: function() {
    // Do something
  }
};


Plant = mongoose.model('Plant', PlantSchema);

// module.exports = mongoose.model('Plant', PlantSchema);