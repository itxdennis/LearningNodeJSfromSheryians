console.log(`Hello itxdennis`);

//npm i figlet --> installed packages from npm
//then copied usage

/*var figlet = require('figlet');

figlet('Dennis Johnson', function (err, data) {
  if (err) {
    console.log('Something went wrong...');
    console.dir(err);
    return;
  }
  console.log(data);
});
*/
//express is a framework for node.js
//already have so many packeages to accomplish something
//use case of express ==> ROUTING
//example www.itxdennis.com/about/01
//here /about is a ROUTE
//then /01 is a route
//alag alg routes pe alag alag pages dikha paayein
//GET ROUTE
//POST ROUTE are two main routes
//PUT PATCH DELETE, are also types of routes

//GET route use --> when we want data like searched content should be visible in URl, use GET route
//POST route use --> when we don't want data like email, passwords, otp, bank details etc to be visible in URl, use POST route

//USING EXPRESS

const express = require('express');
const app = express();

app.use(function (req, res, next) {
  console.log('Hello from middleware1');
  next();
});

app.use(function (req, res, next) {
  console.log('Hello from middleware2');
  next();
});

app.get('/', function (req, res) {
  res.send(
    "I'm Dennis learning node js, finally installed nodemon, a default route"
  );
});

app.get('/profile', function (req, res) {
  res.send('A route to profile');
});

app.get('/about', function (req, res) {
  res.send('A route to ABOUT');
});

app.listen(3001);

//MIDDLEWARE
//kisi bhi route chalne se pehle middleware chalta hai
// function parameteres are same, but next() is extra
/*app.use(function(req, res, next){
console.log("Hello from middleware")
});
*/

//agar middleware chalta hai to request jam ho jaati hai
//isliye next(), ek push krne ka kaam karta hai

//also, pehle saare middlewares chalnege fr routes chanlenge
