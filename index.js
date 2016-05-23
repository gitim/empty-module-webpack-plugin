'use strict';

var RawModule = require('webpack/lib/RawModule');

function EmptyModulePlugin(resourceRegExp, source) {
    this.resourceRegExp = resourceRegExp;
    this.source = source || '/* empty */';
}

module.exports = EmptyModulePlugin;

EmptyModulePlugin.prototype.apply = function (compiler) {
    compiler.plugin('normal-module-factory', function (nmf) {
        nmf.plugin('resolver', function (resolver) {
            return function (data, callback) {
                var request = data.request;

                if (this.resourceRegExp.test(request)) {
                    var source = this.source;

                    if (typeof this.source === 'function') {
                        source = this.source(request);
                    }

                    return callback(null, new RawModule(
                        source,
                        'empty ' + context + ' ' + request,
                        request + ' (empty)'
                    ));
                }

                return resolver(data, callback);
            };
        });
    });
};
