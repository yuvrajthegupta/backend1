//request,response handling
import usermodel from "../DB/modules/user-schema.js";
import { hashing } from "../utils/encrypt.js";

export const userController = {
  async login(request, response){
    const userInfo=request.body
    const doc=await usermodel.findOne({'email':userInfo.email}).exec()
    console.log("doc is",doc);
    if(doc&&doc._id){
        const plainPassword=userInfo.password
        const dbPassword=doc.password
        if(hashing.matchpassword(plainPassword,dbPassword)){
            response.json({message:'Welcome '+doc.name})
        }
        else{
            response.json({message:"Invalid user Id or password"})
        }
    }
    else{
        response.json({message:"Invalid user Id or password"})
    }},
  // async login(req, res) {
  //   const userinfo = req.body;

  //   const doc = await usermodel.findOne({ email: userinfo.email }).exec();
  //   console.log(doc);
  //   if (doc && doc._id) {
  //     const plainpwd = userinfo.password;
  //     const dbpwd = doc.password;
  //     if (hashing.matchpassword(plainpwd, dbpwd)) {
  //       res.json({ message: "welcome " + doc.name });
  //     } else {
  //       res.json({ message: "incorrect pwd" });
  //     }
  //   } 
  //   else {
  //     res.json({ message: "invalid email" });
  //   }
  //   // const userinfo = req.body;
  //   // // console.log('request body is ',userinfo);
  //   // if (userinfo.id == userinfo.username)
  //   //   res.json({ message: "welcome " + userinfo.username });
  //   // else {
  //   //   res.json({ message: "invalid user" });
  //   // }
  // },
  profile(req, res) {
    const userName = req.params;
    console.log("all params", userName);
    res.json({ message: userName + " profile" });
  },
  async register(req, res) {
    try {
      const userinfo = req.body;
      userinfo.password = hashing.passwordhash(userinfo.password);
      const doc = await usermodel.create(userinfo);
      if (doc && doc._id) {
        res.json({ message: "register successfully" });
      } else {
        res.json({ message: "problem" });
      }
    } catch (err) {
      console.log("error occured");
      res.json({ message: "register successfully" });
    }
  },
  changepassword(req, res) {
    res.json({ message: "change password" });
  },
};
