import sitesRouter from './sitesRouter.js';

export default function initWebRoutes(app) {
    app.use('/req/:sdd', (req, res) => {
        res.send(req.path);
    });
    app.use('/', sitesRouter);
}
