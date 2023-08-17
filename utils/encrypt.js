import bcrypt from 'bcrypt';
export const hashing = {
SALT : 10,
passwordhash(plainpwd){
   return bcrypt.hashSync(plainpwd,this.SALT)
},
matchpassword(plainpwd,dbpwd){
    return bcrypt.compareSync(plainpwd,dbpwd);
}
}