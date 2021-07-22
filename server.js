const express = require('express');
const port = 3000;
const morgan = require('morgan');
const session = require("express-session");

const app = express();

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
    session({
      secret: "SEIRFLEXRocks!",
      resave: false,
      saveUninitialized: true,
    })
  );

app.listen(port, () => {
    console.log(`Express is listening on port:${port}`);
});