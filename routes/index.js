var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/event', function (req, res, next) {
  initialiseSSE(req, res);
});

function initialiseSSE(req, res) {
  setInterval(() => {
    const message = 'data:' + new Date().toDateString();
    var messageEvent = new ServerEvent();
    messageEvent.addData(message);
    outputSSE(req, res, messageEvent.payload());
  }, 1000);


  res.set({
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Access-Control-Allow-Origin": "*"
  });

  res.write("retry: 10000\n\n");
}
const msg = " - Simple SSE server - ";
const port = 5000;

function outputSSE(req, res, data) {
  var id = (new Date()).toLocaleTimeString();
   res.write('id: ' + id + '\n');
    // response.write('event: ' + 'add' + '\n');
  res.write("data: " + msg + port + '\n\n');
}

function ServerEvent() {
  this.data = "";
};

ServerEvent.prototype.addData = function (data) {
  this.data = data;
}

ServerEvent.prototype.payload = function () {
  var payload = "";

  payload += this.data;
  return payload + "\n";
}

module.exports = router;
