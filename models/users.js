const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/koneksi');

const Users = db.define('user',{
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
    },
    username : {
        type : DataTypes.STRING,
        allowNull : true
    },
    email : {
        type : DataTypes.STRING,
        allowNull : true
    },
    password : {
        type : DataTypes.STRING,
        allowNull : true
    },
    no_telp : {
        type : DataTypes.STRING,
        allowNull : true
    },
    alamat : {
        type : DataTypes.STRING,
        allowNull : true
    },
},{
    freezeTableName : true,
    timestamps : true
})

module.exports = Users;