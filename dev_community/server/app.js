let PORT = 3000

const express = require('express')

const app = express()

const testRoute = require('./routes/test')

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.listen(PORT, () => console.log(`test ${PORT}`))

app.use('/greeting', testRoute)