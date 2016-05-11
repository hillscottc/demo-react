/* eslint no-console: 0 */

var debug = require('debug')('app:server');
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const secrets = require('../config/secrets');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack.config.js');

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();



// Connect to database
var connect = function() {
  mongoose.connect(secrets.db, function(err, res) {
    if(err) {
      console.log('Error connecting to: ' + secrets.db + '. ' + err);
    }else {
      console.log('Connected to database: ' + secrets.db);
    }
  });
};
connect();
mongoose.connection.on('database error', console.log);
mongoose.connection.on('database disconnected', connect);

const plant = require('./models/plant');
// Bootstrap the server-side routes
require('./routes')(app);


// While developing, use a hot replacement server for live reload
if (isDeveloping) {
  debug("Running as developer.");
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, '../dist/index.html')));
    res.end();
  });
} else {
  app.use(express.static(__dirname + '../dist'));
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
}

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
