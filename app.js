/**
 * @fileOverview
 * @author rekey
 * Created by rekey on 21/10/14.
 */
var koa = require('koa');
var router = require('koa-router');
var favicon = require('koa-favicon');
var jade = require('koa-jade');
var mongoose = require('mongoose');
var config = require('./config.js');
var path = require('path');
var app = new koa();

var isDev = 'development' === app.env;

if (isDev) {
  app.use(function *(next) {
    var start = Date.now();
    yield* next;
    var delta = Math.ceil(Date.now() - start);
    this.set('X-Response-Time', delta + 'ms');
    console.log(this.request.url, delta + 'ms');
  });
}

app.use(jade.middleware({
  viewPath: __dirname + '/views',
  debug: isDev,
  pretty: isDev,
  compileDebug: isDev,
  cache: isDev,
  locals: {},
  basedir: path.resolve(__dirname, './views'),
  helperPath: []
}));

app.use(router(app));

global.app = app;

app.use(favicon(__dirname + '/public/img/favicon.png'));

require('./routes/index.js');

//var url = config.db.user + ':' + config.db.password + '@' + config.db.host + ':' + config.db.port + '/' + config.db.name;
var url = config.db.host + ':' + config.db.port + '/' + config.db.name;
mongoose.connect(url, function (err) {
  if (!err) {
    app.listen(config.hosts.port);
    console.log('server start at port %s', config.hosts.port);
  } else {
    console.error('mongodb error');
  }
});