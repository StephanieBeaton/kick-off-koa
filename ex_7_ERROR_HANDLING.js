//  ERROR_HANDLING
//  Exercise 7 of 11

// Add an error handler middleware for the koa application below.
// The errorHandler middlware should catch all the downstream errors,
// then responds to the client with internal server error and status 500.

    // var koa = require('koa');

    // var app = koa();

    // app.use(errorHandler());

    // app.use(function* () {
    //   if (this.path === '/error') throw new Error('ooops');
    //   this.body = 'OK';
    // });

    // function errorHandler() {
    //   return function* (next) {
    //     // try catch all downstream errors here
    //   };
    // }

    // app.listen(process.argv[2]);

// HINT

// In Koa, error handling is done using try/catch (except with event emitters).
// You might not have seen this in a while if you've been working with Express
// and most other node frameworks. Unlike,
// Express, error handlers are simply decorators that you add to the top of your middleware stack.

// You can set the response status by:

//     this.status = 404;

// Each Koa app is an EventEmitter instance.
// All errors uncaught by any middleware are sent to app.on('error', function (err, context) {}).
// This is useful for logging.
// However, if you create your own error handler (i.e. catching it),
// you will have to manually emit these events yourself.


//  » To print these instructions again, run: kick-off-koa print
//  » To execute your program in a test environment, run: kick-off-koa run program.js
//  » To verify your program, run: kick-off-koa verify program.js
//  » For help run: kick-off-koa help

    var koa = require('koa');

    var app = koa();

    app.use(errorHandler());

    app.use(function* (next) {
      if (this.path === '/error') throw new Error('ooops');
      this.body = 'OK';
      this.status = 200;
      yield next;
    });

    function errorHandler() {
      return function* (next) {
        // try catch all downstream errors here
        // The errorHandler middlware should catch all the downstream errors,
        // then responds to the client with internal server error and status 500.
        try
        {
          yield next;
        }
        catch(ex)
        {
          console.log(ex.message);
          this.response.body = 'internal server error';
          this.status = 500;
          return;
        }
      };
    }

    app.listen(process.argv[2]);

// Here's the official solution in case you want to compare notes:

// ────────────────────────────────────────────────────────────────────────────────
//     var koa = require('koa');

//     var app = koa();

//     app.use(errorHandler());

//     app.use(function* () {
//       if (this.path === '/error') throw new Error('ooops');
//       this.body = 'OK';
//     });

//     function errorHandler() {
//       return function* (next) {
//         // we catch all downstream errors here
//         try {
//           yield next;
//         } catch (err) {
//           // set response status
//           this.status = 500;
//           // set response body
//           this.body = 'internal server error';
//           // can emit on app for log
//           // this.app.emit('error', err, this);
//         }
//       };
//     }

//     app.listen(process.argv[2]);

