import express from 'express';
import UserController from '../controllers/UserController.js';
import Authentication from '../middleware/authentication.js';
import redirectHome from '../middleware/redirectHome.js';
import redirectLogin from '../middleware/redirectLogin.js';
const userRouter = express.Router();

userRouter.put('/:id/update', redirectLogin, UserController.infoUpdate);
userRouter.delete('/:id/delete', redirectLogin, UserController.delete);
userRouter.get('/:id/edit', redirectLogin, UserController.getEdit);
userRouter.post('/login', redirectHome, Authentication, UserController.login);
userRouter.get('/profile', redirectLogin, UserController.profile);
userRouter.get('/logout', redirectLogin, UserController.logout);
userRouter.get('/trash', redirectLogin, UserController.trash);
userRouter.post('/create', redirectLogin, UserController.create);

export default userRouter;
