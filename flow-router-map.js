FlowRouter.map = function(fn) {
  fn(function(path, controller, group) {
    (group || FlowRouter).route(path, controller);
  });
};
