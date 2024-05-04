const express = require('express');
var path = require('path');

const app = express();

app.use('/res',express.static(path.join(__dirname, 'public/res')));


app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});


app.get('/search', (req, res) => {
  myUrl = "https://plantnet.rbgsyd.nsw.gov.au/cgi-bin/NSWfl.pl?page=nswfl&search=yes&namesearch=" + req.query.item;
  res.redirect(myUrl);
});



app.listen(3000, () => {
  console.log('server started');
});