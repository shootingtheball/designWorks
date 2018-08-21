const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/data');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('-------成功了');
});

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
});

const workSchema = new mongoose.Schema({
  dataList: [
    {
      url: String,
    },
  ],
});

const User = mongoose.model('User', userSchema);
const Work = mongoose.model('Work', workSchema);
const Models = {
  User,
  Work,
};

const Work1 = new Work({
  dataList: [
    {
      url: 'https://img.zcool.cn/community/010a9b5b67e98ea801206a350fd6c6.png@1280w_1l_2o_100sh.webp',
    },
    {
      url: 'https://img.zcool.cn/community/01c4fc5b67e99ca801206a3590d389.png@1280w_1l_2o_100sh.webp',
    },
    {
      url: 'https://img.zcool.cn/community/016b2e5b67e9b4a801215c8f4345a0.png@1280w_1l_2o_100sh.webp',
    },
    {
      url: 'https://img.zcool.cn/community/01aad35b67e9c1a801215c8f62b1bb.png@1280w_1l_2o_100sh.png',
    },
  ],
});
Work1.save((err) => {
  if (err) return console.log('----------', err);
});

module.exports = Models;
