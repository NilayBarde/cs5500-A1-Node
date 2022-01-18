const express = require('express');
const app = express();

app.get('/hello', (req, res) =>
  res.send('Hello World!'));

const PORT = 4000;
app.listen(process.env.PORT || PORT, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

// app.listen(PORT);
