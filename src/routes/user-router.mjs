import express from "express";
import {
    getUserById,
    getUsers,
    postUser,
    postLogin,
    putUser
} from '../controllers/user-controller.mjs';

const userRouter = express.Router();

// Users resource
// list users
// ohjaa tietystä osoitteesta toiseen paikkaan
// router ohjaa requestin toiselle reitille

//user endpoint
userRouter.route('/')
    //list users
    .get(getUsers)
    // user registration
    .post(postUser);

// user /:id endpoint
userRouter.route('/:id')
    // get info of a user
    .get(getUserById)
    //update user
    .put(putUser);

// user login
userRouter.post('/login', postLogin);

export default userRouter;
