function redirectHome(req, res, next) {
    if (req.session.userid) {
        res.redirect('/');
    } else {
        next();
    }
}

export default redirectHome;
