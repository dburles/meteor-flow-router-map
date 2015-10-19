# Flow Router Map

Provides a nice routing API for FlowRouter.

## Installation

```sh
$ meteor add dburles:flow-router-map
```

## API

FlowRouter.map(path, options, [group])

## Example

```js
FlowRouter.map(route => {
  // Base
  route('/', Routes.home);
  route('/about', Routes.about);
  route('/contact', Routes.contact);

  // Products
  route('/', Routes.products.home, RouteGroups.products);
  route('/view/:slug', Routes.products.view, RouteGroups.products);
  route('/category/:slug', Routes.products.category, RouteGroups.products);

  // Admin
  route('/', Routes.admin.home, RouteGroups.admin);
  /// ... etc
});
```

## Basic Usage

```js
Routes = {
  home: {
    name: 'home',
    render() {
      // ...
    }
  }
};

FlowRouter.map(route => {
  route('/', Routes.home);
});
```

## Route Groups

flow-router-map works well with Flow Router route groups.

```js
Routes = {
  home: {
    name: 'home',
    render() {
      // ...
    }
  },
  admin: {
    home: {
      name: 'adminHome',
      render() {
        // ...
      }
    }
  }
};

RouteGroups = {
  admin: FlowRouter.group({
    prefix: '/admin'
  })
};

FlowRouter.map(route => {
  route('/', Routes.home);
  route('/', Routes.admin.home, RouteGroups.admin);
});
```

### License

MIT
