
import {pool} from '../config/index.js'

export const get_users=async() => {
    
    const client = await pool.connect();

    try{
      
      
        var res = await client.query('SELECT * FROM public.dummy');
        console.log(res.rows[0]);
        
      return {res:res.rows[0]};
      } 
      catch(e){
        console.log(e.message);
      }
      finally {
        client.release();
      }
    
     
    }


 
