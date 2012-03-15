var vows = require('vows'),
    assert = require('assert'),
    util = require('util');

var ypapi = require('./../lib/yellowbot.js');

var api1 = ypapi.create()
var api2 = ypapi.create();

ypapi.configure({api_key: "base", api_secret: "789"});
api1.configure({api_key: "abc", api_secret: "123"});
api2.configure({api_key: "def", api_secret: "456"});

vows.describe("instances").addBatch({
    'have different configuration': function () {
        assert.notEqual(api1.server.api_key, api2.server.api_key);
        assert.notEqual(ypapi.server.api_key, api1.server.api_key);
    },
}).export(module, {error: false});

