const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`THIS APP ${port}`);

  const a = 50;
  const b = 20;

  console.log(a - b);
  console.log(a + b);
});
