import Ember from 'ember';
import layout from '../templates/components/boot-grid';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'table',
  classNameBindings: ['class'],

  headers: undefined,
  rows: undefined,
  identifier: undefined,

	selection: undefined,
	multiSelect: undefined,
	rowSelect: undefined,
	keepSelection: undefined,

  // headerIds: function() {
  // 	var headers = this.get('headers');
  // 	if (headers) {
	 //  	return headers.map(function(i,idx){
	 //  		var str='';
	 //  		console.log(idx);
	 //  		if (!i.name) {
	 //  			i.name="column-" + idx;
	 //  		} 
	 //  		if (i.id) {
	 //  			str+=' data-column-id="' + i.id + '"';
	 //  		} else {
	 //  			str+=' data-column-id="' + i.name.dasherize() + '"';
	 //  		}
	 //  		if (i.datatype) {
	 //  			str+=' data-type="' + i.datatype + '"';
	 //  		}
	 //  		if (i.identifier) {
	 //  			str+=' data-identifier="' + i.identifier + '"';
	 //  		}  
	 //  		i.dataAPI = str;		
	 //  	});  		
  // 	}
  // }.property('headers'),

  didInsertElement: function() {
  	this.$().bootgrid({
      css: {
	      icon: 'zmdi icon',
	      iconColumns: 'zmdi-view-module',
	      iconDown: 'zmdi-expand-more',
	      iconRefresh: 'zmdi-refresh',
	      iconUp: 'zmdi-expand-less'
      },
      templates : this.get('templates') ? this.get('templates') : {},

      selection: this.get('selection') ? this.get('selection') : false,
      multiSelect: this.get('multiSelect') ? this.get('multiSelect') : false,
      rowSelect: this.get('rowSelect') ? this.get('rowSelect') : false,
      keepSelection: this.get('keepSelection') ? this.get('keepSelection') : false,
    });
  }
});
