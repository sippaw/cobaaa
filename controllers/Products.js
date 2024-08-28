// import Product from "../models/ProductModel.js";
import argon2 from 'argon2';
import { UUID, where } from 'sequelize';
import Users from '../models/UserModel.js';
export const getProducts = async (req, res) => {
    try {
        const respone = await Users.findAll(
        );
    
        res.status(200).json(respone);
    } catch (error) {
        res.status(500).json({msg: error.message});
        
    }

}

export const getProductsById = async (req, res) => {
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
export const createProducts = async (req, res) => {
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
export const updateProducts = async (req, res) => {
    
}
export const deleteProducts = async (req, res) => {
    
}