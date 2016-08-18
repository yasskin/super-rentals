import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      cities: this.store.findAll('city'),
      rentals: this.store.findAll('rental')
    });
  },
  actions:{
    save3(params) {
      var newRental = this.store.createRecord('rental', params);
      var city = params.city;
      city.get('rentals').addObject(newRental);
      newRental.save().then(function() {
        return city.save();
      });
      this.transitionTo('city', params.city);
    },
    saveCity(params) {
      var newCity = this.store.createRecord('city', params);
      this.transitionTo('index');
    }
  }
});
