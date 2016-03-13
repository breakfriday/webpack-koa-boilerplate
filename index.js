/**
 * Created by breakhappy on 16/3/13.
 */

var render = require('./libs/render');
var logger = require('koa-logger');
var route = require('koa-route');
var parse = require('co-body');
var koa = require('koa');
var app = koa();




app.use(route.get('/', list));



function *list() {
	this.body = yield render('view.ejs', {  });
}



app.listen(3000);
console.log('listening on port 3000');