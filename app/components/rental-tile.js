import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide: function() {
      this.set('isImageShowing', false);
    },
    delete(rental) {
      if (confirm('Untermensh - moron, are you sure you want to destroy this rental?')) {
        this.sendAction('destroyRental', rental);
      }
    }
  }
});
