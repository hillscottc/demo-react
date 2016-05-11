var debug = require('debug')('app:routes');
var mongoose = require('mongoose');
var Plant = mongoose.model('Plant');

function getPlants(req, res) {
  Plant.find({}).exec(function(err, plants) {
    if(!err) {
      debug("Returning plants.");
      res.json(plants);
    }else {
      console.log('Error in first query');
    }
  });
}

module.exports = function(app) {

  app.get('/plant', getPlants);


};
