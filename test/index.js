var Server = require('../index.js');
var WebSocket = require('ws');

var server = new Server({
  projects: [
    '/Users/xukaixuan/Projects/taxi/passenger-gulp-app/*',
    '/Users/xukaixuan/Projects/taxi/hx-ser/svn/*'
  ]
});
server.onLog(console.log);
setTimeout(function () {
  var ws = new WebSocket('ws://127.0.0.1:' + server.info().port);
  ws.on('open', function() {
    ws.send(JSON.stringify({
      command: 2,
      appid: 'A6932196309087',
      timestamp: (new Date().getTime() / 1000) - 3000
    }));
  });
}, 2000);

setTimeout(function () {
  server.ignore('A6932196309087', '/Users/xukaixuan/Projects/taxi/passenger-gulp-app/build/config.xml');
  server.sync({
    project: '/Users/xukaixuan/Projects/taxi/passenger-gulp-app/build',
    updateAll: true
  });
}, 1000);