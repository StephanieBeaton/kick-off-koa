//  TEMPLATING
//  Exercise 10 of 11

// Create a koa server that listens on a port passed from the command line
// and replies with HTML, which is processed ejs template file
// when an HTTP GET request is sent to /.

// The workshop will execute requests against the server and verify the output.

// HINTS

// First up, install the required dependencies:

//     npm install co-views ejs

// Now, setup views:

//     var views = require('co-views');

//     var render = views(__dirname + '/views', {
//       ext: 'ejs'
//     });

// You might be wondering where is the views dir,
// that must be created by you
// and it must contain a ejs file,
// say user.ejs which looks like:

//     <p><%= user.name.first %> is a <%= user.age %> year old <%= user.species %>.</p>

// Now that must give you a clue that it requires user object that might look like:

//     var user = {
//       name: {
//         first: 'Tobi',
//         last: 'Holowaychuk'
//       },
//       species: 'ferret',
//       age: 3
//     };

// Having all this in placing and the below code to render the results, you can easily crack this.

//     this.body = yield render('user', {user: user});

// Good luck!


//  » To print these instructions again, run: kick-off-koa print
//  » To execute your program in a test environment, run: kick-off-koa run program.js
//  » To verify your program, run: kick-off-koa verify program.js
//  » For help run: kick-off-koa help

    var koa   = require('koa');
    var views = require('co-views');

    var app = koa();


    var render = views(__dirname + '/views', {
      ext: 'ejs'
    });

    var user = {
      name: {
        first: 'Tobi',
        last: 'Holowaychuk'
      },
      species: 'ferret',
      age: 3
    };

// Having all this in placing and the below code to render the results, you can easily crack this.


    app.use(function* (next) {
      // only accept GET request

      this.body = yield render('user', {user: user});

    });

    app.listen(process.argv[2]);


// Here's the official solution in case you want to compare notes:

// ────────────────────────────────────────────────────────────────────────────────
//     var views = require('co-views');
//     var koa = require('koa');
//     var app = module.exports = koa();

//     // setup views, appending .ejs
//     // when no extname is given to render()

//     var render = views(__dirname + '/views', {
//       ext: 'ejs'
//     });

//     // dummy data

//     var user = {
//       name: {
//         first: 'Tobi',
//         last: 'Holowaychuk'
//       },
//       species: 'ferret',
//       age: 3
//     };

//     // render

//     app.use(function * () {
//       this.body = yield render('user', {
//         user: user
//       });
//     });

//     app.listen(process.argv[2]);

