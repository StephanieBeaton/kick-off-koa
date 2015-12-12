//  AUTHENTICATION
//  Exercise 11 of 11

// In previous exercises, we learned route, body-parser and session.
// In this exercise, we will try to combine them all
// to create a very simple app with login and logout features.
// Let's define the following routes:

//   * `/` - If the user is logged in, they should see `hello world`.
//      ... Otherwise, they should see a `401` error because they aren't logged in.
//   * `/login` - if the method is `GET`, a form should be returned.
//                If the method is `POST`, it should validate the request body and attempt to login the user,
//                if login successful redirected to `/`.
//   * `/logout` - it should logout the user and redirected to `/login`.

// We're not actually going to create users in this example.
// The only acceptable authentication is:

//     username = username
//     password = password

// other authentication all should get 400 error.

// HINT

// We already create a frame for this simple app, let's complete it!

    var util = require("util");
    function inspect(o, d)
    {
      return console.log(util.inspect(o, { colors: true, depth: d || 1 }));
    }


    var koa     = require('koa');
    var parse   = require('co-body');
    var session = require('koa-session');

    var form = '<form action="/login" method="POST">\
      <input name="username" type="text" value="username">\
      <input name="password" type="password" placeholder="The password is \'password\'">\
      <button type="submit">Submit</button>\
    </form>';

    var app = koa();

    // use koa-session somewhere at the top of the app
    // we need to set the `.keys` for signed cookies and the cookie-session module
    app.keys = ['secret1', 'secret2', 'secret3'];
    app.use(session(app));

    app.use(function* isAuthenticated(next)
    {
      if(!this.session.authenticated)
      {
        this.status = 401;
        // return;
      }
      yield next;
    });

    /**
     * If `this.session.authenticated` exist, user will see 'hello world'
     * otherwise, people will get a `401` error  because they aren't logged in
     */
    function session(app) {
      return function* (next) {
        // do nothing
        yield next;
        // do nothing
      };
    }

    app.use(function* home(next) {
      if (this.request.path !== '/') return yield next;

      this.body = "hello world";
    });

    /**
     * If successful, the logged in user should be redirected to `/`.
     * hint: use `this.redirect`
     */

    app.use(function* login(next) {
      if (this.request.path !== '/login') return yield next;
      if (this.request.method === 'GET') return this.body = form;
      if (this.request.method === 'POST') {
        var body = yield parse(this.req);
        inspect(body);
        if(body.username !== "username" || body.password !== "password")
        {
          this.status = 400;
          this.body = "";
          // return;
        }
        else
        {
          this.session.authenticated = true;
          this.redirect('/');
        }
        // parse body and check if user can login
      }

    });

    /**
     * Let's redirect to `/login` after every response.
     * If a user hits `/logout` when they're already logged out,
     * let's not consider that an error and rather a "success".
     */

    app.use(function* logout(next) {
      if (this.request.path !== '/logout') return yield next;

      this.session = {};
      this.redirect('/login');
    });

    app.listen(process.argv[2]);


//  » To print these instructions again, run: kick-off-koa print
//  » To execute your program in a test environment, run: kick-off-koa run program.js
//  » To verify your program, run: kick-off-koa verify program.js
//  » For help run: kick-off-koa help
