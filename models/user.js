const {pool} = require('../database/dataHandler');

class User{
    constructor(id,user_name_, user_email){
        this.id = id;
        this.user_name_= user_name_;
        this.user_email = user_email;

    }
    async save(){
        let sql = `
        INSERT INTO users(
            id,
            user_name_,
            user_email 
        )
        VALUES(
            '${this.id}',
            '${this.user_name_}',
            '${this.user_email}'
            )`
        try{
            const result = await pool.execute(sql);
            return result;
        }catch(error){
            console.log(error);
            return null;
        }
    }
    static async saveUser(id,user_name_, user_email){
        let user = new User(id,user_name_,user_email);
        let result = await user.save();
        if (!result) return null;
        return user;
    }
}
module.exports = User;


// _______________________________________________________________________________
// for mongnoDB
// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;


// const userSchema = new Schema( {
//     name: String,
//     pass: String,
//     email: String,

// });
// const user_mongo = mongoose.model("user_mongo",userSchema);
// module.exports = user_mongo;






















