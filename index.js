const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);

  const a = 100;
  const b = 400;
  const c = 300;

  console.log(a + b + c);
  console.log(a - b - c);
  console.log(a + b - c);
  console.log(a * b - c);
  console.log(a / b + c);
  console.log(a - b);
  console.log(a + b);
  console.log(a * b);
});
