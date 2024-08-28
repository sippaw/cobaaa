// import Users from "../models/users.js";
import argon2 from 'argon2';
import { UUID, where } from 'sequelize';
import Users from '../models/UserModel.js';
export const getUsers = async (req, res) => {
try {
    const respone = await Users.findAll({
        attributes: ['uuid', 'username', 'email', 'role']}
    );

    res.status(200).json(respone);
} catch (error) {
    res.status(500).json({msg: error.message});
    
}
}

export const getUsersById = async (req, res) => {
    try {
        const respone = await Users.findOne({
            where: {
                uuid : req.params.id
            }
        });
        res.status(200).json(respone);
    } catch (error) {
        res.status(500).json({msg: error.message});
        
    }
    }

export const createUsers = async (req, res) => {
    const { username, email, password, conPassword, role} = req.body;
    if (password !== conPassword ) return res.status (400).json({msg: "password not match"});
    const hashPassword = await argon2.hash(password);
    try {
        await Users.create({
            username: username,
            email: email,
        password:hashPassword,
        role: role
        });
        res.status(201).json({msg: "Register Success"});
    } catch (error) {
        res.status(400).jsona({msg: error.message});
    }
}
export const updateUsers = async (req, res) => {
    
}
export const deleteUsers = async (req, res) => {
 const user = await Users.findOne({
    where: {
        uuid : req.params.id
    }
 });
 if(!user) return res.status(404).json({msg: "User tidak ditemukan"});
try {
    await Users.destroy({
        where:{
            id: user.id
        }
    });
    res.status(200).json ({msg: "user deleted"});
} catch (error) {
    res.status(400).json ({msg: error.message});
}
 }
// module.exports = {
//     getUsers,
//     getUsersById,
//     createUsers,
//     updateUsers,
//     deleteUsers
// }