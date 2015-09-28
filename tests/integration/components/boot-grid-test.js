import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('boot-grid', 'Integration | Component | boot grid', {
  integration: true,
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{boot-grid}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#boot-grid}}
      template block text
    {{/boot-grid}}
  `);

  assert.equal(this.$().text().trim(), '');
});
