const express = require('express');
const app = express();
const stdRoutes = require('./routes/std');
const errorController = require('./controllers/error');
const bosyparser = require('body-parser');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const ports = process.env.PORT || 3000;

app.use(bosyparser.json());
app.use('/std', stdRoutes);

app.use(errorController.get404);
app.use(errorController.get500);

app.listen(ports, ()=> console.log(`port listen...${ports}`));