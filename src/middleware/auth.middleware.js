import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';
import { User } from '../models/user.model.js';

export async function authverify(req,res,next) {

    const header = req.headers.authorization || '';
    console.log("headers", header);

    const token = header.startsWith('Bearer ') ? header.slice(7): null;

    if(!token) return res.status(401).json({message: 'token requerido'});

    try{
        const {sub} = jwt.verify(token, env.JWT_SECRET_KEY);
        req.user = await User.find(sub).lean();

        if(!req.user) throw new Error();
        next();
        
    }catch(error){
        res.status(401).json({message: 'Token Invalido'})
    }

    //clase 7 min 1:50:18
    
    
}