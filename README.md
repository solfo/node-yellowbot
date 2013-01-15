# node-yellowbot.js - node.js yellowbot API

Access to the [YellowBot](http://www.yellowbot.com/) APIs, including the Reputation Management APIs.

## Installation

`npm install yellowbot`

## Usage overview

    var api = require('yellowbot');
    
    api.configure( { api_key: "abcd1234", api_secret: "def0" } );

    var api2 = api.create();
    api2.configure( ... );
    
    var api3 = api.create({ api_key: "abc987", ... });

    api.get("test/echo",
            { "foo": "bar", "another query": "parameter" },
            function(err, response) { }
           );

    api.post("test/json_echo",
             { "foo": "bar", "another": "query parameter" },
             { "some": "json data structure" },
             function(err, response) { }
    );

    var login_url = api.login_url( { api_user_identifier: "abc123" } );


## TODO and bug reporting

See the [issue tracker](http://github.com/solfo/node-yellowbot).

## License

Copyright (C) 2011-2013 Solfo, Inc

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.