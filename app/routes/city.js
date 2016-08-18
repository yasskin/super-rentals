import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('city', params.city_id);
  },
  actions: {

    destroyCity(city) {
      var rental_deletions = city.get('rentals').map(function(rental) {
        return rental.destroyRecord();
      });
      Ember.RSVP.all(rental_deletions).then(function() {
        return city.destroyRecord();
      });
      this.transitionTo('index');
    }

  }
});
