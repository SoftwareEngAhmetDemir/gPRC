const client = require("./client");
const express = require('express')
const app = express()
const port = 3000
// client.getAllNews({}, (error, news) => {
//   if (error) throw error;
//   console.log(news);
// });

// client.AddNews({}, (error, news) => {
//     if (error) throw error;
//     console.log(news);
//   });



let count = '1';

app.get('/', (req, res) => {
    client.deleteNews({id:count}, (error, news) => {
        if (error) throw error;
        console.log(news);
      });
 let cn  = Number(count)+1;
 count = cn.toString();
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})