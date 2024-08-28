import express from 'express';
import cors from 'cors';
import session from 'express-session';
import dotenv from 'dotenv';
import sequelize from './config/Database.js';
import Users from './models/UserModel.js';
import cookieParser from 'cookie-parser';
import UserRoute from './routes/UserRoute.js';
import ProductsRoute from './routes/ProductsRoute.js';
// import router from './routes/router.js'; // Import router.js secara eksplisit

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: 'auto'
    }
}));

// Gunakan rute setelah middleware
app.use("/",UserRoute);
app.use("/",ProductsRoute);

// Menggunakan rute dari router.js
// app.use("/api", router);

sequelize.authenticate()
    .then(async () => {
        console.log('Connection success');
        await Users.sync({alter : true});
    })
    .catch(err => console.log('Error: ' + err));

app.listen(process.env.APP_PORT, () => {
    console.log(`Server berhasil di running di port ${process.env.APP_PORT}`);
});
