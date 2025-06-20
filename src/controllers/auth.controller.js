import { AuthService } from "../services/auth.service.js"

export const AuthController = {
    async register(req,res){
        await AuthService.registrer(req.body);
        res.status(201).json({
            message:"User Register completed"
        })
    },

    async login(req,res){
        const result = await AuthService.login(req.body);
        if(!result) return res.status(400).json({message: "Credeniales invalidas"})
        res.status(201).json(result)
    },
}