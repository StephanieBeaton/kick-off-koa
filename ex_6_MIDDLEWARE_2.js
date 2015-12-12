//  MIDDLEWARE
//  Exercise 6 of 11

// Complete the Koa application below, finish two middlewares:

//   * responseTime: record each request's response time(ms), set the response header `X-Response-Time`.
//   * upperCase: convert response body to upper case.

//     var koa = require('koa');

//     var app = koa();

//     app.use(responseTime());
//     app.use(upperCase());

//     app.use(function* () {
//       this.body = 'hello koa';
//     });

//     function responseTime() {
//       return function* (next) {
//         // record start time
//         yield next;
//         // set X-Response-Time head
//       };
//     }

//     function upperCase() {
//       return function* (next) {
//         // do nothing
//         yield next;
//         // convert this.body to upper case
//       };
//     }

//     app.listen(process.argv[2]);

// HINT

// In Koa, all middleware are essentially decorators for all following middleware:

//     app.use(function* decorator(function (subapp) {
//       // do something before subapp executes
//       yield* subapp;
//       // do something after subapp executes
//     }));

//     app.use(function* subapp(next) {
//       this.response.body = 'hello world';
//     });

// In koa middlewares, use this.set(name, val) to set a response header.
// And change response body by reassign this.body.

// READ MORE

// View the koajs org to learn more about koa middlewares.

//     https://github.com/koajs


//  » To print these instructions again, run: kick-off-koa print
//  » To execute your program in a test environment, run: kick-off-koa run program.js
//  » To verify your program, run: kick-off-koa verify program.js
//  » For help run: kick-off-koa help


  // finish two middlewares:

  // * responseTime: record each request's response time(ms), set the response header `X-Response-Time`.
  // * upperCase: convert response body to upper case.

    var koa = require('koa');

    var app = koa();

    app.use(function* (next) {
        // record start time
        var start = new Date;
        yield next;
        // set X-Response-Time head
        var ms = new Date - start;
        this.set('X-Response-Time', ms + 'ms');
    });

    app.use(function* (next) {
        // do nothing
        yield next;
        // convert this.body to upper case
        this.body = this.body.toUpperCase();
    });

    app.use(function* () {
      this.body = 'hello koa';
    });


    app.listen(process.argv[2]);


// Here's the official solution in case you want to compare notes:

// ────────────────────────────────────────────────────────────────────────────────
//     var koa = require('koa');

//     var app = koa();

//     app.use(responseTime());
//     app.use(upperCase());

//     app.use(function* () {
//       // step 3: respond `hello koa`
//       this.body = 'hello koa';
//     });

//     function responseTime() {
//       return function* (next) {
//         // step 1: record start time
//         var start = new Date;
//         yield next;
//         // step 5: set X-Response-Time head
//         this.set('X-Response-Time', new Date - start);
//       };
//     }

//     function upperCase() {
//       return function* (next) {
//         // step 2: do nothing here
//         yield next;
//         // step 4: convert this.body to upper case
//         this.body = this.body.toUpperCase();
//       };
//     }

//     app.listen(process.argv[2]);

