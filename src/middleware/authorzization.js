import db from '../models/index.js';

async function Authorzization(req, res, next) {
    const { userid } = req.session;
    console.log(req.session);
    console.log(userid);
    if (userid) {
        const user = await db.User.findOne({ where: { id: userid } });
        res.locals.user = user;
    }

    return next();
}
export default Authorzization;
