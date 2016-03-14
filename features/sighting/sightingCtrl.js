var Sighting = require('./Sighting');

module.exports = {
  addSighting: function( req, res ) {
    new Sighting(req.body).save(function(err, sighting) {
      if(err) {
        return res.status(500).send(err);
      }
      res.send(sighting)
    })
  },
  getSighting: function(req, res) { //THIS CAN GET ALL AND ONE SPECIFIC /sighting?status=extinct
    Sighting.find(req.query).exec().then(function(err, sighting) {
      if(err) {
        return res.status(500).send(err)
      }
      res.send(sighting)
    })
  },
  getOnesighting: function(req, res ) {
    Sighting.findOne({_id:req.params.id}).exec().then(function(sighting) {
      console.log(sighting)
     res.send(sighting);
   });
 },


}
