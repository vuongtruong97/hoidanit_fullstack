import sitesRouter from './sitesRouter.js';
import userRouter from './userRouter.js';
import redirectLogin from '../middleware/redirectLogin.js';

export default function initWebRoutes(app) {
    app.use('/user', userRouter);
    app.use('/', sitesRouter);
}
