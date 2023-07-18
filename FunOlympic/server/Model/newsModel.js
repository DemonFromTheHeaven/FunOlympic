const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    photo: { type: String },
    description: { type: String },
    type: { type: String }
});



const News = mongoose.model('News', newsSchema);
module.exports = News;