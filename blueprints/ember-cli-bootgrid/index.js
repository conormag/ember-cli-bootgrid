module.exports = {
  description: '',

  normalizeEntityName: function() {},

  afterInstall: function(options) {
    var blueprint = this;
    return blueprint.addBowerPackageToProject('jquery.bootgrid', '1.3.1');
  }
};
