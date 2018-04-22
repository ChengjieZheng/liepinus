const mongoose = require('mongoose');

const DB_URL = 'mongodb://127.0.0.1:27017/liepinus_testDB'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function(){
  console.log('mongo connect success');
})

const models = {
  user: {
    'user':{'type': String, 'require': true},
		'pwd': {'type': String, 'require': true},
		'type': {'type': String, 'require': true},
  },
}

for(let m in models) {
  mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
  getModel: function(name) {
    return mongoose.model(name)
  }
}
