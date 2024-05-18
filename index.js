const express = require('express');
const fs = require("fs")


const app = express();
const port = 8080;

app.use(function (req, res, next) {
  const timestamp = Date.now();
  const logMessage = `${timestamp}: ${req.ip}: ${req.method}:${req.path}\n`;

  fs.appendFile('log.txt', logMessage, (err) => {
    if (err) {
      console.error('Error writing to log file:', err);
      res.send("Error Try Again",err)
    }else{
      next();
    }
  });
});

app.get("/middleware", (req, res)=>{
  res.send("MiddleWare Working")
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
