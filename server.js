const express = require('express');
const port = 3000;
const morgan = require('morgan');
const session = require("express-session");
const passport = require("passport");

const app = express();

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
    session({
      secret: "TIDDER!",
      resave: false,
      saveUninitialized: true,
    })
  );
app.use(passport.initialize());
app.use(passport.session());

app.listen(port, () => {
    console.log(`Express is listening on port:${port}`);
});