const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');

const port = process.env.PORT || 3000;

require('dotenv').config();

const app = express();

require('./auth/passport');
require('./models/index');

const indexRouter = require('./routes/index');
const postsRouter = require('./routes/posts');
const commentRouter = require('./routes/comments');

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
    session({
      secret: 'TIDDER!',
      resave: false,
      saveUninitialized: true,
    })
  );
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/posts', postsRouter); 
app.use('/', commentRouter)


app.listen(port, () => {
    console.log(`Express is listening on port:${port}`);
});