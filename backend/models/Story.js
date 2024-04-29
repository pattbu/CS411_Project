const mongoose = require('mongoose');
const storySchema = new mongoose.Schema({
    hnId: { type: Number, required: true, unique: true },
    });

const Story = mongoose.model('Story', storySchema);
module.exports = Story;