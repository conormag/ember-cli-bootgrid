import Ember from 'ember';
import layout from '../templates/components/each-keys';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'tr',
  items: Ember.computed('object', function() {
  	var object = Ember.get(this, 'object');
    var keys = Object.keys(object);
    
    return keys.map(function(key) {
      return { key: key, value: object[key]};
    });
  })
});
