const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://jesciak_admin:admin!@cluster0.buz5hyz.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
