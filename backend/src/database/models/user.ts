import mongoose from 'mongoose'
import Board from './board'
import Group from './group'

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    boards: [ Board ],
    groups: [ Group ],
});

const User = mongoose.model('User', userSchema);

export default User
