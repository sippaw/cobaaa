import User from "../models/UserModel.js";
import argon2, { verify } from 'argon2';

export const Login = async (req, res) => {
    const user = await Users.findOne({
        where: {
            email : req.body.email
        }
     });
     if(!user) return res.status(404).json({msg: "User tidak ditemukan"});
     const match = await argon2 .verify(user.password, req.body.password);
     if(!match) return res.status(400).json ({msg : 'Password salaj'});
     req.session.userId = user.uuid;

     const uuid = user.uuid;
     const name = user.username;
     const email = user.email;
     const role = user.role;
     res.status(200).json({uuid, name, email, role});
    
    }

    export const logout = (req, res) => {
    req.session.destroy((err) =>{
        if(err) return res.status(400).json({msg: 'Tidak dapat logout'});
        res.status(200).json({msg: 'Anda telah logout'});
})};