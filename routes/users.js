const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://jkthecoder:jkTheCoder@cluster0.va5hj.mongodb.net/minorB13?retryWrites=true&w=majority', {
  useFindAndModify:false,
  useUnifiedTopology:true,
  useNewUrlParser:true
}).then( () => console.log("Database Configured"))
.catch(err => console.log(err))