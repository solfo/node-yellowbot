var vows = require('vows'),
    assert = require('assert'),
    util = require('util');

var api_key = process.env.API_KEY,
    api_secret = process.env.API_SECRET;

if (! ( api_key && api_secret )) {
    util.puts('To run vows, you must have API_KEY and API_SECRET environment variables set');
    process.exit(2)
}

var api = require('./../lib/yellowbot.js');

var config = {
    api_key: api_key,
    api_secret: api_secret,
};

if (process.env.API_HOST) { config.host = process.env.API_HOST }

api.configure(config);

function encode_utf8(s) {
    return unescape(encodeURIComponent(s));
}

vows.describe("echo test").addBatch({
    'send GET request': {
        topic: function() {
            api.get("test/echo", { "foo": "bar" }, this.callback);
        },
        'returns an echo': function(err, response) {
            assert.isNull(err);
            console.log('response', response);
            assert.isDefined(response.request_id);
            assert.equal(response.foo, 'bar');
        }
    },
    'send GET request with Iñtërnâtiônàlizætiøn': {
        topic: function() {
            api.get("test/echo", { "q": "Iñtërnâtiônàlizætiøn" }, this.callback);
        },
        'returns an echo': function(err, response) {
            assert.isNull(err);
            console.log('response', response);
            assert.isDefined(response.request_id);
            assert.equal(response.q, 'Iñtërnâtiônàlizætiøn');
        }
    }
}).export(module, {error: false});


