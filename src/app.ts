const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});