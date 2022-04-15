class SiteController {
    // [GET] /
    index(req, res, next) {
        res.render('index');
    }
}

export default new SiteController();
