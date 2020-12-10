const express = require('express')
const morgan = require('morgan')
const { urlencoded, json } = require('body-parser')
const users = require('./users')
const app = express()

app.use(morgan('dev'))
app.use(urlencoded({extended: true}))
app.use(json())

app.get('/user/:id', async (req, res) => {
  debugger;
  const id = req.params.id
    // console.log(req);

  // should ge user by given id in route param
  // const user = await users.findUser(user => user.id === id)
  const user = await users.findUser(id)
  // console.log(res);
  res.status(200).send(user)
  // res.status(304).send(user)
})

app.delete('/user/:id', async (req, res) => {
  const id = req.id
  await users.deleteUser(id)
  res.status(201).send({id})
})


// app.get('/', (req, res) => {
//   // should ge user by given id in route param
//   res.status(200).send('<h1>Index</h1>')
// })

module.exports = app
