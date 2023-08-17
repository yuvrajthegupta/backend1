import mongoose from "mongoose";

const URL = "mongodb+srv://amandhingra2447:AMAN123@cluster0.fgwaknf.mongodb.net/userdb1?retryWrites=true&w=majority"

const promise = mongoose.connect(URL);
promise.then((data) => {
    console.log("db connected")
}).catch((err) => {
    console.log("error",err);
});
export default mongoose;