Package.describe({
  name: 'dburles:flow-router-map',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Provides a nice routing API for FlowRouter',
  // URL to the Git repository containing the source code for this package.
  git: 'http://github.com/dburles/meteor-flow-router-map.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('kadira:flow-router@2.6.2');
  api.addFiles('flow-router-map.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use(['kadira:flow-router', 'dburles:flow-router-map']);
  api.addFiles('flow-router-map-tests.js');
});
