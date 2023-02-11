import mongoose from 'mongoose'
import Board from './board';

const Schema = mongoose.Schema;

const groupSchema = new Schema({
    name: String,
    boards: [ Board ],
});

const Group = mongoose.model('Task', groupSchema);

export default Group