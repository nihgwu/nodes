/**
 * @fileOverview
 * @author rekey
 * Created by rekey on 21/10/14.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
module.exports = new Schema({
  '_id': {
    'type': Number
  },
  'title': {
    'type': String
  },
  'slug': {
    'type': String
  },
  'text': {
    'type': String
  },
  'cover': {
    'type': String
  },
  'media': {
    'type': Number,
    'ref': 'media'
  },
  'category': {
    'type': Number,
    'ref': 'category'
  },
  'author': {
    'type': Number,
    'ref': 'user'
  },
  'created': {
    'type': Date,
    'default': Date.now
  },
  'updated': {
    'type': Date,
    'default': Date.now
  },
  'tags': [
    {
      'type': String
    }
  ],
  'order': {
    'type': Number,
    'default': 0
  }
});