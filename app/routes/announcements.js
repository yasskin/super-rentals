import Ember from 'ember';

var announcements = [{
  id: 1,
  title: "Rapper ShadowDom in shootout with Stormzy",
  description: "bullet holes in Stormzy's crib"
}, {
  id: 2,
  title: "Tonyzz eats Sammy's sandwich",
  description: "too lurid to print"
}, {
  id: 3,
  title: "Shit gets wack @ Epicodus",
  description: "Floor 8 hoop destroyed"
}];

export default Ember.Route.extend({
  model() {
    return announcements;
  },
});
