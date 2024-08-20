import { Router } from "express";
import userRouter from "./users/usersRouter";
import appointmentRouter from "./appointments/appointmentsRouter";

const indexRouter: Router = Router();

indexRouter.use("/users", userRouter);
indexRouter.use("/appointments", appointmentRouter);

export default indexRouter;
