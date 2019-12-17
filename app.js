const express = require('express')
const bodyParser = require('body-parser')
const routers = require('./routes/routes')
const loggerMiddleware = require('./middleware/loggerMiddleware')
const errorMiddleware = require('./middleware/errorMiddleware')

const app = express()
const port = 3000

app.use(loggerMiddleware)
app.use(bodyParser.json())
app.use(routers)
app.use(errorMiddleware)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))