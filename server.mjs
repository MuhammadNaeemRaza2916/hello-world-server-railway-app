import express from 'express'
const app = express()
const port = process.env.PORT || 3000

app.get('/kiss', (req, res) => {
    console.log(`${req.ip} is asking for water`);
    res.send('Uummmmhaaaaaaaaaaaaaaaaaaaaaaa!')
})
app.get('/love', (req, res) => {
    console.log(`${req.ip} is asking for food`);
    res.send('I love you IfRa merI jaaN!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})