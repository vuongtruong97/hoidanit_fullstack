import express from 'express';
import SiteController from '../controllers/SiteController.js';
import redirectLogin from '../middleware/redirectLogin.js';
import redirectHome from '../middleware/redirectHome.js';

const siteRouter = express.Router();
siteRouter.get('/register', SiteController.getRegister);
siteRouter.get('/login', redirectHome, SiteController.getLogin);
siteRouter.get('/manage-user', redirectLogin, SiteController.getManageUser);
siteRouter.get('/create', redirectLogin, SiteController.createPage);
siteRouter.get('/', SiteController.getHomePage);

export default siteRouter;
