import Ember from 'ember';
import layout from '../templates/components/boot-grid';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'table',
  classNameBindings: ['class'],

  header: undefined,
  rows: undefined,

	selection: undefined,
	multiSelect: undefined,
	rowSelect: undefined,
	keepSelection: undefined,

	setup: Ember.on('init', function() {
		// 'navigation' enables or disables header and/or footer. Default value is 3.
    // 0 for none, 1 for header, 2 for footer and 3 for both.
    this.set('navigation', (this.get('header')) ? 3 : 0);
	}),


  didInsertElement: function() {
  	this.$().bootgrid({
  		css: this.getWithDefault('css', {}),
	    templates: this.getWithDefault('templates', {}),
      navigation: this.getWithDefault('navigation',0),
      selection: this.getWithDefault('selection', false),
      multiSelect: this.getWithDefault('multiSelect',false),
      rowSelect: this.getWithDefault('rowSelect',false),
      keepSelection: this.getWithDefault('keepSelection',false),
    });
  }
});
