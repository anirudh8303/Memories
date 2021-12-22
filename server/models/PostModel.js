const mongoose =  require('mongoose');
const postSchema = new  mongoose.Schema({
 title: String,
 message: String,
 creator: String,
 tags: [String],
 selectedFile: {
    type: String,
    default: "https://i1.fnp.com/assets/images/custom/quotes/anniversary-for-couple/anniversary-wishes-for-couple-1.jpg"
},
 Location: String,
 likeCount: {
     type: Number,
     default:0,
 },
 createdAt: {
     type: Date,
     default: new Date(),
 },
});
const PostMemories = mongoose.model('PostMemories',postSchema)
module.exports= PostMemories;