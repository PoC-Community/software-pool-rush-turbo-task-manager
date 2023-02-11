import mongoose from 'mongoose'
import User from './user';
import Task from './task';

const Schema = mongoose.Schema;

const boardSchema = new Schema({
    name: String,
    users: [ String ],
    tasks: [ String ],
});

const Board = mongoose.model('Task', boardSchema);

export default Board
