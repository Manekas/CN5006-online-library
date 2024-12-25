let mongoose =  require('mongoose')
const BookScheme = new mongoose.Schema({
    booktitle:{
        type:String,
        required: true
    },
    PubYear:Number,
    author:String,
    topic:String,
    format:String
})
module.exports=mongoose.model('bookmodel',BookScheme,'BookCollection2')