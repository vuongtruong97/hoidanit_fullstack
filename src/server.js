import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import configViewEngine from './config/viewEngine.js';
import initWebRoutes from './routes/routes.js';
import expressEjsLayouts from 'express-ejs-layouts';
import methodOverride from 'method-override';
import Authorzization from './middleware/authorzization.js';
// import cookieParser from 'cookie-parser';
import session from 'express-session';
import { v4 as uuidv4 } from 'uuid';
import Authentication from './middleware/authentication.js';
import CountUserViewed from './middleware/countuserviewed.js';

const app = express();
configViewEngine(app); // view engine config

//GET ENV
const {
    NODE_ENV = 'development',
    PORT = 1997,
    SESS_NAME = 'sid',
    SESSION_SECRET,
} = dotenv.config().parsed;
const IN_PROD = NODE_ENV === 'production';

//middleware log request
// app.use(morgan('combined'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(cookieParser());
app.use(expressEjsLayouts);
app.use(methodOverride('_method'));
app.use(
    session({
        secret: SESSION_SECRET,
        name: SESS_NAME,
        resave: false,
        saveUninitialized: true,
        cookie: {
            secure: IN_PROD,
            maxAge: 1000 * 60 * 60 * 24,
            sameSite: true,
        },
    })
);

// app.use(Authentication);
app.use(Authorzization);
app.use(CountUserViewed);

initWebRoutes(app); // route config

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
