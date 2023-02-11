import mongoose from 'mongoose'
import creds from '../../creds.json'

async function connectToDatabase() {
    await mongoose.connect(creds.database_uri);
}

export default connectToDatabase
