//  ROUTING
//  Exercise 2 of 11

// Create a koa server that listen on a port passed from the command line,
// and returns the following responses from the following routes:

//     /    - hello koa
//     /404 - page not found
//     /500 - internal server error

// HINTS

// Unlike Express and many other frameworks, Koa does not include a router.
// Without a router, routing in Koa can be done by using this.path and yield next.
// To check if the request matches a specific path:

//     app.use(function* (next) {
//       if (this.path === '/') {

//       }
//     })

// To skip this middleware:

//     app.use(function* (next) {
//       if (skip) return yield next;
//     })

// Combining this together, you can route paths like this:

//     app.use(function* (next) {
//       // skip the rest of the code if the route does not match
//       if (this.path !== '/') return yield next;

//       this.body = 'we are at home!';
//     })

// Learn More

// There are more properties you're probably interested in when routing:

//   * this.method
//   * this.query
//   * this.host

// Also there are some router middlewares for koa, you can find them in npm:

//   * koa-route
//   * koa-router
//   * koa-resource-router


//  » To print these instructions again, run: kick-off-koa print
//  » To execute your program in a test environment, run: kick-off-koa run program.js
//  » To verify your program, run: kick-off-koa verify program.js
//  » For help run: kick-off-koa help

    var koa = require('koa');
    var app = koa();

    // handlers here
    // app.use(handlers);

//  you can route paths like this:

    app.use(function* (next) {
      // skip the rest of the code if the route does not match
      if (!(this.path.length === 1 && this.path === '/')) return yield next;

      this.body = 'hello koa';
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

//     var app = koa();

//     app.use(function* (next) {
//       if (this.path !== '/') {
//         return yield next;
//       }

//       this.body = 'hello koa';
//     });

//     app.use(function* (next) {
//       if (this.path !== '/404') {
//         return yield next;
//       }

//       this.body = 'page not found';
//     });

//     app.use(function* (next) {
//       if (this.path !== '/500') {
//         return yield next;
//       }

//       this.body = 'internal server error';
//     });

//     app.listen(process.argv[2]);

