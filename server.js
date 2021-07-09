var path = require('path');
var express = require('express');
var session = require('express-session');
var exphbs = require('express-handlebars');
var helpers = require('./utils/helpers');

var app = express();
var PORT = process.env.PORT || 3001;

var sequelize = require('./config/connection');
var SequelizeStore = require('connect-session-sequelize')(session.Store);

var sess = {
  secret: 'Super secret secret',
  cookie: {
    // session expires in two hours
    expires: 7200000
    // // test session expires in 30 seconds
    // expires: 30000
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

var hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
}); 

