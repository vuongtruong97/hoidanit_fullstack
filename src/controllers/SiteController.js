import db from '../models/index.js';
import CRUDservice from '../services/CRUDservice.js';
class SiteController {
    // [GET] /
    async getHomePage(req, res, next) {
        const data = await db.User.findAll();
        // res.locals.user = 'User Vuong';
        res.render('pages/home', { users: data, title: 'HOME PAGE' });
    }
    // [GET] /create
    async createPage(req, res, next) {
        try {
            res.render('pages/create', { title: 'CRUD PAGE' });
        } catch {}
    }
    // [GET] /login
    async getLogin(req, res, next) {
        res.render('pages/login');
    }
    async getManageUser(req, res, next) {
        const users = await CRUDservice.getAllUser();
        res.render('pages/manageuser', { users });
    }
    //[GET] /register
    getRegister(req, res) {
        res.render('pages/register');
    }
}

export default new SiteController();
