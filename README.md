# Flow Router Map

Provides a nice routing API for FlowRouter. Inspired by [Django urls](https://docs.djangoproject.com/en/1.8/topics/http/urls/#example) flow-router-map is designed to keep all of your url paths in the one place so you gain a clear visual overview of your entire application's routes. See the example below.

## Installation

```sh
$ meteor add dburles:flow-router-map
```

## API

```
route(path, options, [group])
```

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
  // ... etc
});
```

## Basic Usage

```js
Routes = {
  home: {
    name: 'home',
    action() {
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
    action() {
      // ...
    }
  },
  admin: {
    home: {
      name: 'adminHome',
      action() {
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
