import { Router } from "express";

import {
  getUserById,
  getAllUsers,
  loginUsers,
  registerUsers,
} from "../../controllers/users/userControllers";

const userRouter: Router = Router();

userRouter.get("/", getAllUsers);

userRouter.get("/:id", getUserById);

userRouter.post("/register", registerUsers);

userRouter.post("/login", loginUsers);

export default userRouter;
