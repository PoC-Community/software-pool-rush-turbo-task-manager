import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const boardSchema = new Schema({
    name: String,
    author: String,
    users: [ String ],
    tasks: [ String ],
});

const Board = mongoose.model('Board', boardSchema);

export default Board
