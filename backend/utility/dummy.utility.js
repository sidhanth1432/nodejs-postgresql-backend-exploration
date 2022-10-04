export const GenerateToken=(payload)=>{

return jwt.sign(payload,APP_SECRET,{expiresIn:'1d'});

}

export const ValidateToken=async(req)=>{

    const sign=req.get('Authorization');
    if(sign){
        const payload=await jwt.verify(sign.split(' ')[1],process.env.APP_SECRET);
        res.user=payload;
        return true;
    }
return false;

}