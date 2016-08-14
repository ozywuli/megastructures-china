import Ember from 'ember';
import ENV from 'megastructures-china/config/environment';

export default Ember.Component.extend({
  didInsertElement: function() {
    Ember.run.scheduleOnce('afterRender', function() {
      mapboxgl.accessToken = ENV.mapboxAccessToken;
      var map = new mapboxgl.Map({
          container: 'map', // container id
          style: 'mapbox://styles/mapbox/streets-v9', //stylesheet location
          center: [-74.50, 40], // starting position
          zoom: 9 // starting zoom
      });
    })
  }
});
