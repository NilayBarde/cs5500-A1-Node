const express = require('express');
const app = express();

app.get('/hello', (req, res) =>
  res.send('Hello World!'));

const PORT = 4000;

app.listen(process.env.PORT || PORT, () => {
  console.log(`server started on port ${process.env.PORT}`)
});

// app.listen(PORT);
