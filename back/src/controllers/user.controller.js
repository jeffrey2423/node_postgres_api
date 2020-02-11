const connection = require('../database/database');

const userController = {};

userController.getUsers = async (req, res) =>{
    try {
       let sql = "select * from f_get_users()";
        await connection.query(sql, (err, results)=>{
            if(!err){
                res.status(200).json(results.rows)
            }else{
                res.status(204).json({ response: err});
            }
        });
    } catch (error) {
        res.status(204).json({ response: error });
    }
}

module.exports = userController;