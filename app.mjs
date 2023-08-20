import express from 'express'
import path from "path"
import cors from "cors"
const app = express()
const port = 5001

app.use(cors())
app.use(express.json())

app.use('/', express.static(path.join(process.cwd(),"web","build")));
app.get('/abc', (req, res) => {
  res.send('Hello World! ' + new Date().toString())
  console.log(req.ip);

})
  // URL parameters example
// app.get('/weather/:cityName', (req, res) => {
//   console.log(req.params.cityName);
//   res.send({
//     city : req.params.cityName,
//     temperature:20,
//     max:30.64,
//     min:26.56,
//     time : new Date()
//   })
// })
  // query parameters example
app.get('/weather', (req, res) => {
  console.log(req.query.city);
  res.send({
    city : req.query.city,
    temperature:20,
    max:30.64,
    min:26.56,
    time : new Date()
  })
})
app.use('*', express.static(path.join(process.cwd(),"web","build")))
// app.use har trha ke method me chalta he 
// console.log(path.dirname(__filename));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})