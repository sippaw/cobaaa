const express = require('express');
const dotenv = require('dotenv')
const sequelize = require('./config/koneksi');
const Users = require('./models/users');

const app = express();

dotenv.config();
app.use(express.json());

sequelize.authenticate()
.then(async () => {
    console.log('Connection success');
    await Users.sync({alter:true});
})
.catch(err => console.log('Error: ' + err));

app.listen(process.env.PORT, () => {
    console.log(`Server berhasil di running di port ${process.env.PORT}`);
})