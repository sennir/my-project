// user-router.mjs

import express from "express";
import {
    getUserById,
    getUsers,
    postUser,
    putUser,
    deleteUser
} from '../controllers/user-controller.mjs';

const userRouter = express.Router();

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

// Delete user
userRouter.delete('/:id', deleteUser);

export default userRouter;
