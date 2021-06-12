const express = require('express')
const app  = express()
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const bcrypt = require('bcryptjs')
const passport = require('passport')
const session = require('express-session')
const usePassport = require('./config/passport')
const port = 3000
const routes = require('./routes');

app.engine('hbs', exphbs({ defaultLayout: 'main', extname:'hbs' }))
app.set('view engine', 'hbs')
app.use(session({
  secret: 'ThisIsMySecret',
  resave: false,
  saveUninitialized: true
}))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

usePassport(app)


app.use(routes)

app.listen(port,(req, res) => {
  console.log(`App is running on  http://localhost:${port}`)
} )