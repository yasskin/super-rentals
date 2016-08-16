import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,
  actions: {
    announcementFormShow() {
      this.set('addNewAnnouncement', true);
    },

    save1() {
      var params = {
        title: this.get('title'),
        description: this.get('description')
      };
      this.set('addNewAnnouncement', false);
      this.sendAction('save2', params);
    }
  }
});
