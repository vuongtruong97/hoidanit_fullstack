import db from '../models/index.js';
import bcrypt from 'bcryptjs';

const Authentication = async (req, res, next) => {
    const user = await db.User.findOne({ where: { email: req.body.email } });
    if (user == null) {
        console.log('Email is not exist');
        res.status(422).send('Email or Password is not correct');
        return;
    }
    const isVerified = await bcrypt.compare(req.body.password, user.password);
    if (!isVerified) {
        res.status(422).send('Email or Password is not correct');
        return;
    }
    // req.body.logged = isVerified;

    req.session.userid = user.id;

    return next();
};
export default Authentication;
