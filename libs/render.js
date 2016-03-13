/**
 * Created by breakhappy on 16/3/13.
 */



var views = require('co-views');

// setup views mapping .html
// to the swig template engine

module.exports = views(__dirname + '/../modules/layouts/views', {});