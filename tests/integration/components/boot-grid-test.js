import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('boot-grid', 'Integration | Component | boot grid', {
  integration: true,
});

var header = [
        {id: 'id', name: "id", datatype: "numeric", identifier: true}, 
        {id: 'sender', name: "Sender", datatype: "string"}, 
        {id: 'recevied', name: "Received", datatype: "string"}
      ];
var rows= [{id: 10228, email: "eduardo1@pingpong.com", received: "14.10.2013"}];


test('identifier value is set', function(assert) {

  assert.expect(1);

  this.render(hbs`
    {{boot-grid header=header rows=rows}}
  `);
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set('header',header);
  this.set('rows',rows);

  assert.equal(this.$().find('th[data-identifier="true"]').text().trim(),"id", 'data-identifer correctly set');
});

test('table rows created correctly', function(assert) {

  assert.expect(1);

  this.render(hbs`
    {{boot-grid header=header rows=rows}}
  `);
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set('header',header);
  this.set('rows',rows);
  
  this.render(hbs`
    {{#boot-grid  header=header rows=rows}}
      template block text
    {{/boot-grid}}
  `);

  assert.equal(this.$().find('tr').length,2, 'table rows created correctly');
});
