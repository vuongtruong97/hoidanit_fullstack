import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import configViewEngine from './configs/viewEngine.js';
import initWebRoutes from './routes/routes.js';

const app = express();

//define port server
const port = dotenv.config().parsed.PORT || 1997;

//middleware log request
app.use(morgan('combined'));

app.use(express.urlencoded());
app.use(express.json());

configViewEngine(app); // view engine config

initWebRoutes(app); // route config
//routes

// about page
app.get('/about', function (req, res) {
    res.render('pages/about');
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
