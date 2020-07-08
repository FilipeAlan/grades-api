import mongoose from 'mongoose';

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB;

var Schema = db.mongoose.Schema;

var gradesSchema = new Schema({  
    name:{
        type:String,
        require:true,
    },
    subject:{
        type:String,
        require:true,
    },
    type:{
        type:String,
        require:true,
    },
    value:{
        type:Number,
        require:true,        
    },
    lastModified:{
        type:Date,
        require:true,        
    }
});

db.gradesModel = db.mongoose.model('grades',gradesSchema,'grades');
export { db };
