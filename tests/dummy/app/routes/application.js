import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return {
			"table1": {
				"selection": true,
				"multiSelect": true,
				"rowSelect": true,
				"keepSelection": true,
				"css": {
	      	icon: 'zmdi icon',
	      	iconColumns: 'zmdi-view-module',
	      	iconDown: 'zmdi-expand-more',
	      	iconRefresh: 'zmdi-refresh',
	      	iconUp: 'zmdi-expand-less'
      	},
 
				"templates": {
      		actionDropDownCheckboxItem: "<li><div class=\"checkbox\"><label class=\"{{css.dropDownItem}}\"><input name=\"{{ctx.name}}\" type=\"checkbox\" value=\"1\" class=\"{{css.dropDownItemCheckbox}}\" {{ctx.checked}} /><i class=\"input-helper\"></i> {{ctx.label}}</label></div></li>",  
        	select: "<div class=\"checkbox\"><label><input name=\"select\" type=\"{{ctx.type}}\" class=\"{{css.selectBox}}\" value=\"{{ctx.value}}\" {{ctx.checked}} /><i class=\"input-helper\"</label></div>"
      	},

				"headers": [
					{id: 'id', name: "id", datatype: "numeric", identifier: true}, 
					{id: 'sender', name: "Sender", datatype: "string"}, 
					{id: 'recevied', name: "Received", datatype: "string"}
				],
				"rows": [
					{id: 10228, email: "eduardo1@pingpong.com", received: "14.10.2013"},
					{id: 10229, email: "eduardo2@pingpong.com", received: "15.10.2013"},
					{id: 10230, email: "eduardo3@pingpong.com", received: "16.10.2013"},
					{id: 10231, email: "eduardo4@pingpong.com", received: "17.10.2013"},
					{id: 10232, email: "eduardo5@pingpong.com", received: "18.10.2013"},
					{id: 10233, email: "eduardo6@pingpong.com", received: "19.10.2013"},
					{id: 10234, email: "eduardo7@pingpong.com", received: "20.10.2013"},
					{id: 10235, email: "eduardo8@pingpong.com", received: "21.10.2013"},
					{id: 10236, email: "eduardo9@pingpong.com", received: "22.10.2013"},
					{id: 10237, email: "eduardo0@pingpong.com", received: "14.11.2013"},
					{id: 10238, email: "eduard1@pingpong.com", received: "14.12.2013"},
					{id: 10239, email: "eduard2@pingpong.com", received: "14.01.2013"},
					{id: 10240, email: "eduard3@pingpong.com", received: "14.02.2013"},
					{id: 10241, email: "eduard4@pingpong.com", received: "11.10.2013"},
					{id: 10242, email: "eduard5@pingpong.com", received: "12.10.2013"},
					{id: 10243, email: "eduard6@pingpong.com", received: "13.10.2013"},
					{id: 10244, email: "eduard7@pingpong.com", received: "14.06.2013"},
					{id: 10245, email: "eduard8@pingpong.com", received: "14.07.2013"},
					{id: 10246, email: "june@pingpong.com", received: "14.08.2013"}			
				]
			}
		};
	}	
});