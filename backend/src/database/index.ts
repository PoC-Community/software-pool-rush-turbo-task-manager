import mongoose from 'mongoose'

const uri = "mongodb+srv://root:0y4oCYRAb5wdEh7R@cluster0.ocpjfwg.mongodb.net/?retryWrites=true&w=majority";

async function connectToDatabase() {
    await mongoose.connect(uri);
}

export default connectToDatabase
