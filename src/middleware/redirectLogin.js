function redirectLogin(req, res, next) {
    if (!req.session.userid) {
        res.redirect('/sign-up');
    } else {
        next();
    }
}
export default redirectLogin;
