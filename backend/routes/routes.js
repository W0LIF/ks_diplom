// import express
import express from "express";
// import functions from controller

import {
    showAUser,
    createAccount, allUsers
} from "../controllers/user.js";

// init express router
const router = express.Router();

////////////////////////// USER ////////////////////////////////
// get all user
router.get("/api/users/users", allUsers);
router.get("/api/users/:email", showAUser);

// create account
router.post("/api/users/", createAccount);




// export default router
export default router;