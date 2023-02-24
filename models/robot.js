// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const robotSchema = new Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     attend:String,
//     stand:String,

// });

// const Robot = mongoose.model("Robot",robotSchema);
// module.exports = Robot;

const {pool} = require('../database/dataHandler');

class Robot{
    constructor(id,robot_name, robot_type,user_id){
        this.id = id;
        this.robot_name= robot_name;
        this.robot_type = robot_type;
        this.user_id = user_id

    }
    async save(){
        let sql = `
        INSERT INTO robots(
            id,
            robot_name,
            robot_type,
            user_id
        )
        VALUES(
            '${this.id}',
            '${this.robot_name}',
            '${this.robot_type}',
            '${this.user_id}'
            )`
        try{
            const result = await pool.execute(sql);
            return result;
        }catch(error){
            console.log(error);
            return null;
        }
    }
    static async saveRobot(id,robot_name, robot_type){
        let robot = new Robot(id,user_name_,user_email);
        let result = await robot.save();
        if (!result) return null;
        return robot;
    }
}
module.exports = Robot;
