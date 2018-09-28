var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const Strings = require('../libraries/string');
const autoIncrement = require('mongoose-auto-increment')


var StatusSchema = new mongoose.Schema({
    id:  Number,
    api_id :Number,
    state : String,
    checkTime : Date
});

let Status;

exports.init = (connection) => {
    Status = connection.model('status', StatusSchema)
    StatusSchema.plugin(autoIncrement.plugin, { model: 'Status', field: 'id' })
}


exports.create = (apiId, state) => {
    const password = Strings.generatePasswordHash(rawPassword)
    return Status.create({
        api_id :apiId,
        state,
    })
}


exports.findOne = (where={}) => Status.findOne(where, {"_id": 0, "__v": 0}).lean().exec()

exports.getList = (where={}) => Status.find(where, {"_id": 0, "__v": 0}).lean().exec()

exports.count = (where={}) => Status.count(where, {"_id": 0, "__v": 0}).exec()



