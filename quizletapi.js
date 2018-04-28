var options = {
  host: "http://quizlet.com/288032437",
  port: 80,
  path: '/neuroscience-brain-bee-challenge-flash-cards/',
  method: 'POST'
};

http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
}).end();