import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  updateRentalForm: false,
  actions: {
    imageShow() {
      this.set('isImageShowing', true);
    },
    imageHide() {
      this.set('isImageShowing', false);
    },
    update(rental, params) {
      this.sendAction('update', rental, params);
    },
    delete(rental) {
      if (confirm('Untermensh - Rahee, this basically means a moron, are you sure you want to destroy this rental?')) {
        this.sendAction('destroyRental', rental);
      }
    }
  }
});
