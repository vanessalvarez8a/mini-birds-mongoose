var ctrl = require('./sightingCtrl');

module.exports = function( app ) {
  app.route('/api/sighting')
      .post(ctrl.addSighting)
      .get(ctrl.getSighting)
  app.route('/api/sighting/:id')
      .get(ctrl.getOnesighting)
}
