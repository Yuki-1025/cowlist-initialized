const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let cowSchema = mongoose.Schema({
  id: {type: Number, required: true, unique: true},
  name: String,
  description: String
});

let Cow = mongoose.model('CowList', cowSchema);

module.exports = {
  // create: function(newcow, callback) {
  //   Cow.create({id: newcow.id, name: newcow.name, description: newcow.description}, (err, result) => {
  //     if (err) {
  //       console.log('failed to create new cow ', err);
  //       callback(err);
  //     }
  //     callback(null, result);
  //   })
  // },
  create: function(newcow) {
    return Cow.create({id: newcow.id, name: newcow.name, description: newcow.description});
  },

  // getAll: function(callback) {
  //   Cow.find({}, (err, result) => {
  //     if (err) {
  //       console.log('failed to find all cows ', err);
  //       callback(err);
  //     }
  //     callback(null, result);
  //   })
  // },
  getAll: function() {
    return Cow.find({})
      .catch((err) => {
      throw Error('failed to find all cows ', err);
      });
  },

  updateOne: function(cowid, newdata, callback) {
    // var keys = Object.keys(newdata);
    // var newvalue = Object.values(newdata);
    Cow.findOneAndUpdate(cowid, newdata, {new: true}, (err, result) => {
      if (err) {
        console.log('failed to update cow info ', err);
        callback(err);
      }
      callback(null, result);
    })
  },

  deleteOne: function(cowid, callback) {
    Cow.deleteOne(cowid, (err) => {
      if (err) {
        console.log('failed to delete a cow ', err);
        callback(err);
      }
      callback();
    })
  }
};