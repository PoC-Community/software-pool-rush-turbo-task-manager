import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const groupSchema = new Schema({
    name: String,
    boards: [ String ],
});

const Group = mongoose.model('Task', groupSchema);

export default Group
