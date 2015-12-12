//  RESPONSE_BODY
//  Exercise 4 of 11

// Create an app that returns a stream when the client requests /stream and a JSON body when the client requests /json.

// When /json is requested, the output should be

//     { foo: 'bar' }

// When /stream is requested, the server should respond with the content in file process.argv[3]. Use fs.createReadStream:

//     fs.createReadStream(process.argv[3]);

// HINT

// So far, we've only used strings as bodies. Koa supports the following types of bodies:

//   * Strings
//   * Buffers
//   * Streams (node)
//   * JSON Objects

//     app.use(function* (next) {
//       this.body = {
//         message: 'this will be sent as a JSON response!'
//       };
//     })

// When setting a stream as a body, Koa will automatically add error handlers so you don't have to worry about error handling.

//     var fs = require('fs');

//     app.use(function* (next) {
//       this.body = fs.createReadStream('some_file.txt');
//       // koa will automatically handle errors and leaks
//     })


//  » To print these instructions again, run: kick-off-koa print
//  » To execute your program in a test environment, run: kick-off-koa run program.js
//  » To verify your program, run: kick-off-koa verify program.js
//  » For help run: kick-off-koa help


    var koa   = require('koa');
    var parse = require('co-body');
    var fs    = require('fs');

    var app = koa();

    // returns a stream when the client requests /stream
    // ... and a JSON body when the client requests /json.

    app.use(function* (next) {
      // only accept GET request
      if (this.method !== 'GET') return yield next;

      if (this.path !== '/stream') return yield next;

      // When /stream is requested, the server should respond with the content in file process.argv[3]. Use fs.createReadStream:

      this.body = fs.createReadStream(process.argv[3]);
      // koa will automatically handle errors and leaks

    });

    app.use(function* (next) {
      // only accept GET request
      if (this.method !== 'GET') return yield next;

      if (this.path !== '/json') return yield next;

      this.body = { foo: 'bar' };

    });

    app.listen(process.argv[2]);

// Here's the official solution in case you want to compare notes:

// ────────────────────────────────────────────────────────────────────────────────
//     var koa = require('koa');
//     var fs = require('fs');

//     var app = koa();

//     app.use(function *(next) {
//       if (this.path !== '/json') {
//         return yield next;
//       }

//       this.body = { foo: 'bar' };
//     });

//     app.use(function *(next) {
//       if (this.path !== '/stream') {
//         return yield next;
//       }

//       this.body = fs.createReadStream(process.argv[3]);
//     });

//     app.listen(process.argv[2]);

// ────────────────────────────────────────────────────────────────────────────────
