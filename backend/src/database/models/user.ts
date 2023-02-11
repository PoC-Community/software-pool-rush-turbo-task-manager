import mongoose from 'mongoose'
import Board from './board'
import Group from './group'

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    boards: [ String ],
    groups: [ String ],
});

const User = mongoose.model('User', userSchema);

export default User
