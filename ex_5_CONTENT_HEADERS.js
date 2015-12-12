//  CONTENT_HEADERS
//  Exercise 5 of 11

// Create an app that checks the Content-Type of the request.
// If it's application/json, return {message: 'hi!'} with appropriate content headers.
// Otherwise, return ok as a string.

// HINT

// Both a request and a response could have various content headers.
// Some of these are:

//     Content-Type
//     Content-Length
//     Content-Encoding

// Among many others. We're particularly interested in type and length.
// Koa has getters/setters for type and length:

//     this.request.type
//     this.request.length
//     this.response.type
//     this.response.length

// Inferring this.request.type is a little difficult.
// For example, how do you know if the request is text?
// You don't want to use a regular expression or try all the possible mime types.
// Thus, Koa has this.request.is() for you:

//     this.request.is('image/*') // => image/png
//     this.request.is('text') // => text or false

// Also Koa has this.response.is(), the same as this.request.is() but for the response.

// Learn more about request.is().

//     http://koajs.com/#request-is-types-


//  » To print these instructions again, run: kick-off-koa print
//  » To execute your program in a test environment, run: kick-off-koa run program.js
//  » To verify your program, run: kick-off-koa verify program.js
//  » For help run: kick-off-koa help



// checks the Content-Type of the request.
// If it's application/json, return {message: 'hi!'} with appropriate content headers.
// Otherwise, return ok as a string.

    var koa   = require('koa');
    var parse = require('co-body');

    var app = koa();

    // returns a stream when the client requests /stream
    // ... and a JSON body when the client requests /json.

    // app.use(function* (next) {

    //   if (this.request.type === "application/json") {
    //     this.response.type = "application/json" ;
    //     //  sthis.response.length = ;

    //     this.body = JSON.stringify({message: 'hi!'} );
    //   } else {
    //     return yield next;
    //   }

    // });

    // app.use(function* (next) {

    //   this.body = 'ok';

    // });

    // app.listen(process.argv[2]);



// Here's the official solution in case you want to compare notes:

// ────────────────────────────────────────────────────────────────────────────────
    var koa = require('koa');

    var app = koa();

    app.use(function* () {
      this.body = this.request.is('json')
        ? { message: 'hi!' }
        : 'ok';
    });

    app.listen(process.argv[2]);

// ────────────────────────────────────────────────────────────────────────────────
