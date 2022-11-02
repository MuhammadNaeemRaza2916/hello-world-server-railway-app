import express from 'express'
const app = express()
const port = process.env.PORT || 3000

app.get('/coffee', (req, res) => {
    console.log(`${req.ip} is asking for water`);
    res.send('I am busy right now!')
})
app.get('/tea', (req, res) => {
    console.log(`${req.ip} is asking for food`);
    res.send('Milk has finised!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})