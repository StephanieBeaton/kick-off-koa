//  HELLO_KOA
//  Exercise 1 of 11

// Create a koa server that listens on a port passed from the command line
// and replies with "hello koa" when an HTTP GET request is sent to /.

// The workshop will execute requests against the server and verify the output.

// HINTS

// In all these exercises, we need koa.

// To install koa:

//     npm install koa

// Also we need node 0.11.9+ to run the koa applications, you can use nvm to install node 0.11.9 or higher (e.g. 0.12):

//     https://github.com/creationix/nvm

// If you are on Windows, use the equivalent nvmw:

//     https://github.com/hakobera/nvmw

// Create a server that listens on a given port number with the following code:

//     var koa = require('koa');
//     var app = koa();

//     // handlers here
//     // app.use(handlers);

//     app.listen(port);

// You can get the port by

//     var port = process.argv[2];

// Handlers can be anonymous generate functions or separately declared (just like in javascript :P):

//     app.use(function *() {
//       // you can set the response body in handler like this
//       this.body = 'hello';
//     });

// You can read more about ECMAScript 6 generator functions here:

//     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*

// Or walk through the “Learn Generators” NodeSchool workshop:

//     https://github.com/isRuslan/learn-generators

// A Koa Context(this in middlewares) encapsulates node's request and response objects into a single object
// which provides many helpful methods for writing web applications and APIs.
// To learn more about Koa Context, please check the Koa website:

//     http://koajs.com


//  » To print these instructions again, run: kick-off-koa print
//  » To execute your program in a test environment, run: kick-off-koa run program.js
//  » To verify your program, run: kick-off-koa verify program.js
//  » For help run: kick-off-koa help


    var koa = require('koa');
    var app = koa();

    // handlers here
    // app.use(handlers);
    app.use(function *() {
        // you can set the response body in handler like this
        this.body = 'hello koa';
    });


    // You can get the port by
    var port = process.argv[2];
    app.listen(port);



// Here's the official solution in case you want to compare notes:

// ────────────────────────────────────────────────────────────────────────────────
//     var koa = require('koa');

//     var app = koa();

//     app.use(function* () {
//       this.body = 'hello koa';
//     });

//     app.listen(process.argv[2]);

// ─

