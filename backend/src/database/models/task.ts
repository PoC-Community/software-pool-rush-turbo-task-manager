import mongoose from 'mongoose'
import User from './user';

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    content: String,
    assigned: [ User ],
});

const Task = mongoose.model('Task', taskSchema);

export default Task
