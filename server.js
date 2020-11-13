//imports
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const routes = require('./routes');
const mongoose = require('mongoose');


//Middleware functions

var whitelist = ['http://localhost:5000/api/listing', 'http://localhost:3000', `http://ec2-18-216-28-255.us-east-2.compute.amazonaws.com:3000/` ]
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api', routes);


//mongo stuff
mongoose.connect(process.env.MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('mongodb connected');
})
.catch(err => console.log(err));


app.listen(PORT, console.log(`Server running on ${PORT}`));
