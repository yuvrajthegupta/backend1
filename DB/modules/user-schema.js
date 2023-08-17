//structuring of a collection (user)
import  { SchemaTypes } from "mongoose";
import mongoose from "../connections.js";
const schema = mongoose.Schema;
const userschema = new schema({
  'email': { type: SchemaTypes.String, required: true, unique: true },
  'password': { type: SchemaTypes.String, required: true, minLength : 8,maxLength : 100 },
  'name': { type: SchemaTypes.String, required: true },
  'phone': { type: SchemaTypes.String }
});
const usermodel = mongoose.model("user", userschema);
export default usermodel;
