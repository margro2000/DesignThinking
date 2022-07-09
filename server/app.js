const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const db = mysql.createConnection({
  user: "root".
  host: "localhost",
  password: "password",
  database: "LogInSystem"
});

app.listen(3001, () =>
{
  console.log("running server");
});
