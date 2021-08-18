const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost/trello', {
  useCreateIndex: true,
  useNewUrlParser: true
})
  .then(() => console.log('DB is connected'))
  .catch(err => console.error(err));


module.exports = mongoose;