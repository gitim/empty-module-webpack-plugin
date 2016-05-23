# Empty module plugin for webpack

## Usage

Replaces the module of the request that matches `resourceRegExp` with an empty module.
If the second argument `source` is specified, it will be used as the source of the new module. If the `source` is a function, it will be called with the `request` and the result will be used as the source of the module.

```js
new EmptyModulePlugin(resourceRegExp)

new EmptyModulePlugin(resourceRegExp, '/* was replaced with empty module */')

new EmptyModulePlugin(resourceRegExp, (request) => '/* ' + request + ' was ignored */')
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
