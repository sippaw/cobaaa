import { DataTypes } from 'sequelize';
import db from '../config/Database.js';

export const Users = db.define('user',{
   uuid : {
        type : DataTypes.INTEGER,
        defaultValue : DataTypes.UUIDV4,
        allowNull : false,
        primaryKey : true,
        autoIncrement : true,
        validate : {
            notEmpty : true}
    },
    username :{
        type : DataTypes.STRING,
        defaultValue : DataTypes.UUIDV4,
        allowNull : false,
        validate : {
            notEmpty : true,
            len : [3, 100]
        }
    },
    email :{
        type : DataTypes.STRING,
        defaultValue : DataTypes.UUIDV4,
        allowNull : false,
        validate : {
            notEmpty : true,
            isEmail : true
        }
    },
    password : {
        type : DataTypes.STRING,
        defaultValue : DataTypes.UUIDV4,
        allowNull : false,
        validate : {
            notEmpty : true}
    },
    role : {
        type : DataTypes.STRING,
        defaultValue : DataTypes.UUIDV4,
        allowNull : false,
        validate : {
            notEmpty : true}
    },
 
},{
    freezeTableName : true,
    timestamps : true
})

export default Users;