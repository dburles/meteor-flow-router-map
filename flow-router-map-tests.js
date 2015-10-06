Tinytest.add('flow-router-map - Working', function(test) {
  var definitions = [];

  FlowRouter.route = function(path, controller) {
    definitions.push({
      path: path,
      controller: controller
    });
  };

  Routes = {
    home: {
      test1: true
    },
    admin: {
      home: {
        test2: true
      }
    }
  };

  RouteGroups = {};
  RouteGroups.admin = FlowRouter.group({
    prefix: '/admin'
  });
  RouteGroups.admin.route = FlowRouter.route;

  FlowRouter.map(function(route) {
    route('/', Routes.home);
    route('/', Routes.admin.home, RouteGroups.admin);
  });

  var basic = definitions[0];
  var group = definitions[1];

  test.equal(basic.path, '/');
  test.equal(basic.controller, { test1: true });

  test.equal(group.path, '/');
  test.equal(group.controller, { test2: true });
});
