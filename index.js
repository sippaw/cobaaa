const express = require('express');
const dotenv = require('dotenv')
const sequelize = require('./config/koneksi');
const Users = require('./models/users');

const app = express();

dotenv.config();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// this for call all router from router.js
app.use("/api", require("./routes/router"));

sequelize.authenticate()
.then(async () => {
    console.log('Connection success');
    await Users.sync({alter:true});
})
.catch(err => console.log('Error: ' + err));

app.listen(process.env.PORT, () => {
    console.log(`Server berhasil di running di port ${process.env.PORT}`);
})