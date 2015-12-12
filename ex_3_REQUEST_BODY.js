//  REQUEST_BODY
//  Exercise 3 of 11

// Create a koa server which parse the post data, Convert the name field to
// upper case and respond to client.

// If you get this:

//     POST / with { name: 'koa' }

// Respond with:

//     KOA

// HINTS

// There are several body parsers for Koa:

//     https://github.com/koajs/body-parser
//     https://github.com/koajs/body-parsers

// However in this exercise, we just use co-body to parse the request body.
// To use co-body, you need install from npm first:

//     npm install co-body

// co-body is a yieldable, accept a Koa Context as its first argument.
// So you can use it like this:

//     var parse = require('co-body');

//     // in Koa handler
//     var body = yield parse(this);


//  » To print these instructions again, run: kick-off-koa print
//  » To execute your program in a test environment, run: kick-off-koa run program.js
//  » To verify your program, run: kick-off-koa verify program.js
//  » For help run: kick-off-koa help

    var koa = require('koa');
    var parse = require('co-body');

    var app = koa();

    // handlers here
    // app.use(handlers);

//  EXPECTED INPUT
//     POST / with { name: 'koa' }

//  you can route paths like this:

    app.use(function* (next) {
      // skip the rest of the code if the route does not match
      if (!(this.path.length === 1 && this.path === '/')) return yield next;

      // this.body = 'hello koa';
      var body = yield parse(this);
      body.name = body.name.toUpperCase();
      this.body = body.name;
    });

    app.use(function* (next) {
      // skip the rest of the code if the route does not match
      if (this.path !== '/404') return yield next;

      this.body = 'page not found';
    });

    app.use(function* (next) {
      // skip the rest of the code if the route does not match
      if (this.path !== '/500') return yield next;

      this.body = 'internal server error';
    });

    // You can get the port by
    var port = process.argv[2];
    app.listen(port);


// Here's the official solution in case you want to compare notes:

// ────────────────────────────────────────────────────────────────────────────────
//     var koa = require('koa');
//     var parse = require('co-body');

//     var app = koa();

//     app.use(function* (next) {
//       // only accept POST request
//       if (this.method !== 'POST') return yield next;

//       // max body size limit to `1kb`
//       var body = yield parse(this, { limit: '1kb' });

//       // if body.name not exist, respond `400`
//       if (!body.name) this.throw(400, '.name required');

//       this.body = body.name.toUpperCase();
//     });

//     app.listen(process.argv[2]);
