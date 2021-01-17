const mongoose = require('mongoose');

const CounterSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    obj_id: String,
    status: String,
    backpack: String,
    umbrella: String,
    handbag: String,
    tie: String,
    suitcase: String,
    time_stamp: Date
});

module.exports = mongoose.model("Counter", CounterSchema);