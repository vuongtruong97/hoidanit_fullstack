import CRUDservice from '../services/CRUDservice.js';
import db from '../models/index.js';
import dotenv from 'dotenv';
const { SESS_NAME } = dotenv.config().parsed;

class UserController {
    // [POST] /user/create
    async create(req, res) {
        const result = await CRUDservice.createNewUser(req.body);
        result
            ? res.redirect('/manage-user')
            : res.status(404).send(`Email already exists`);
    }
    //[POST] /user/login
    async login(req, res) {
        res.redirect('/');
    }
    // [GET] /user/:id/edit
    async getEdit(req, res) {
        const userTarget = await CRUDservice.getUserInfoById(req.params.id);
        userTarget && res.render('pages/editUser', { userTarget });
        !userTarget && res.status(404).send(`User is not exist`);
    }
    // [PUT] /user/:id/update
    async infoUpdate(req, res) {
        const result = await CRUDservice.updateUserInfoById(
            req.params.id,
            req.body
        );
        res.redirect('/manage-user');
    }
    // [DELETE] /user/:id/delete
    async delete(req, res) {
        const result = await CRUDservice.deleteUserById(req.params.id);
        result
            ? res.redirect('/manage-user')
            : res
                  .status(404)
                  .send('Error! An error occurred. Please try again later');
    }
    // [GET] /user/trash
    async trash(req, res) {
        const deletedUsers = await db.User.findByPk(3, {
            paranoid: true,
        });
        res.json(deletedUsers);
    }
    //[GET] /user/logout
    logout(req, res, next) {
        req.session.destroy(function (err) {
            // cannot access session here
        });
        res.clearCookie(SESS_NAME);
        res.redirect('/');
    }
    //[GET] /user/logout
    profile(req, res, next) {
        res.render('pages/userprofile');
    }
}
export default new UserController();
