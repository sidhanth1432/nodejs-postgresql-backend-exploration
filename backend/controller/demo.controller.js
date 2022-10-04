
import {
    get_users
    } from '../services/index.js'
    


    export const get_users_controller= async(req, res) => {
        try {
              
            const result = await get_users();
       console.log(result);
            return res.status(200).json(result);
        } catch (e) {
            return res.status(500).json({
                "Error": "Internal Server Error"
            });
        }
    }

