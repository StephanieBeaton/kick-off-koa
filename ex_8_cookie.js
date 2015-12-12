//  COOKIE
//  Exercise 8 of 11

// Create an app that use cookie to store user's view times.

//   * cookie's key is `view`, you need store the view times in this cookie.
//   * every time the server is queried, the response must be `{count} views`.
//   * cookie needs to be `signed`.

// visit /:
// =>
// response body: 1 views
// set-cookie: view=1

// visit / again:
// =>
// response body: 2 views
// set-cookie: view=2

// HINT

// koa uses the cookies module to operate cookies.

//     https://github.com/expressjs/cookies

// APIs:

// ctx.cookies.get(name, [options]): Get cookie name with options

//   * `signed`: the cookie requested should be signed

// ctx.cookies.set(name, value, [options]): Set cookie name to value with options:

//   * `signed`: sign the cookie value
//   * `expires`: a Date for cookie expiration
//   * `path`: cookie path, '/' by default
//   * `domain`: cookie domain
//   * `secure`: secure cookie
//   * `httpOnly`: server-accessible cookie, true by default

// Don't forget to set options.signed in get and set to make sure the cookie is signed.

// And to use signed cookies, you need set app.keys:

//     var app = koa();
//     app.keys = ['secret', 'keys'];


//  » To print these instructions again, run: kick-off-koa print
//  » To execute your program in a test environment, run: kick-off-koa run program.js
//  » To verify your program, run: kick-off-koa verify program.js
//  » For help run: kick-off-koa help


// And to use signed cookies, you need set app.keys:

    var koa = require('koa');

    var app = koa();
    app.keys = ['secret', 'keys'];

// Don't forget to set options.signed in get and set to make sure the cookie is signed.

// https://github.com/pillarjs/cookies
 // inbound cookies to be read using req.cookies.get
 // and outbound cookies to be set using res.cookies.set.


    app.use(function* (next) {
        // do nothing
        var n;

        n = +this.cookies.get('view', {signed: true}) || 0;
        n = n + 1;

        //this.cookies.set('view', n);

        this.body = n + ' views';

        //this.cookies.set('view', n, [{'signed': true}]);

        //this.cookies.options.signed = true;
        // set a signed cookie
        //this.cookies.set( "signed", "view", { signed: true } );

        // console.log(this.cookies);

        this.cookies.set('view', n, {signed: true});

    });


    app.listen(process.argv[2]);


//  https://github.com/pillarjs/cookies
// var http    = require( "http" );
// var Cookies = require( "cookies" );

// server = http.createServer( function( req, res ) {

//   var cookies = new Cookies( req, res, keys ),
//      unsigned, signed, tampered;

//   if ( req.url == "/set" ) {
//     cookies
//       // set a regular cookie
//       .set( "unsigned", "foo", { httpOnly: false } )

//       // set a signed cookie
//       .set( "signed", "bar", { signed: true } )

//       // mimic a signed cookie, but with a bogus signature
//       .set( "tampered", "baz" )
//       .set( "tampered.sig", "bogus" );

//     res.writeHead( 302, { "Location": "/" } );
//     return res.end( "Now let's check." );
//   }

//   unsigned = cookies.get( "unsigned" );
//   signed = cookies.get( "signed", { signed: true } );
//   tampered = cookies.get( "tampered", { signed: true } );

//   assert.equal( unsigned, "foo" );
//   assert.equal( signed, "bar" );
//   assert.notEqual( tampered, "baz" );
//   assert.equal( tampered, undefined );

//   res.writeHead( 200, { "Content-Type": "text/plain" } );
//   res.end(
//     "unsigned expected: foo\n\n" +
//     "unsigned actual: " + unsigned + "\n\n" +
//     "signed expected: bar\n\n" +
//     "signed actual: " + signed + "\n\n" +
//     "tampered expected: undefined\n\n"+
//     "tampered: " + tampered + "\n\n"
//   );
// });
