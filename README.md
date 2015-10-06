# Flow Router Map

Provides a nice routing API for FlowRouter.

## Installation

```sh
$ meteor add dburles:flow-router-map
```

## API

FlowRouter.map(path, options, [group])

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
