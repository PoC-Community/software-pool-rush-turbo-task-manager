import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    content: String,
    board: String,
    assigned: [ String ],
});

const Task = mongoose.model('Task', taskSchema);

export default Task
