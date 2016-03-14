var mongoose = require('mongoose');

var Sighting = new mongoose.Schema({
    name: {type: String, lowecase: true, required: true},
    order: {type: String, lowercase: true, maxlength: 20},
    status: {type: String, enum:[
      'extinct',
      'extinct in the wild',
      'critically endangered',
      'endangered',
      'vulnerable',
      'near threatened',
      'conservation dependent',
      'least concern'
    ]},
    numberSeen: {type: Number, min: 1},
    confirmed: Boolean,
})

module.exports = mongoose.model('Sighting', Sighting);
