import {ValidateToken} from '../utility/dummy.utility.js'



export const Authenticate=async(req,res,next)=>{

    const validate=await ValidateToken(req);
    if(validate){next();}
    else{
        return res.json({message:"user not authorized!"});
    }
}