import Ember from 'ember';

var announcements = [{
  id: 1,
  title: "Rapper ShadowDom in shootout with Stormzy",
  description: "bullet holes in Stormzy's crib"
}, {
  id: 2,
  title: "TonyZZ eats Sammy's kebab-case",
  description: "too lurid to print"
}, {
  id: 3,
  title: "Handlebar Mustache shit gets wack @ Epicodus",
  description: "Floor 8 hoop destroyed"
}];

export default Ember.Route.extend({
  model() {
    return announcements;
  },
});
