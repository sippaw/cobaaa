import { DataTypes } from 'sequelize';
import db from '../config/Database.js';
import Users from './UserModel.js';

export const Products = db.define('product',{
   uuid : {
        type : DataTypes.INTEGER,
        defaultValue : DataTypes.UUIDV4,
        allowNull : false,
        primaryKey : true,
        autoIncrement : true,
        validate : {
            notEmpty : true}
    },
    name :{
        type : DataTypes.STRING,
        defaultValue : DataTypes.UUIDV4,
        allowNull : false,
        validate : {
            notEmpty : true,
            len : [3, 100]
        }
    },
    pricre : {
        type : DataTypes.INTEGER,
        defaultValue : DataTypes.UUIDV4,
        allowNull : false,
        validate : {
            notEmpty : true}
    },
 userId :{
    type : DataTypes.INTEGER,
    defaultValue : DataTypes.UUIDV4,
    allowNull : false,
    validate : {
        notEmpty : true}
},
},{
    freezeTableName : true,
    timestamps : true
})

Users.hasMany(Products)
Products.belongsTo(Users ,{foreignKey : 'userId'})

export default Products;
