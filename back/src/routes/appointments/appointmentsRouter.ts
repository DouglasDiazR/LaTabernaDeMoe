import { Router } from "express";

import {
  getAllAppointments,
  getAppointmentsById,
  scheduleAppointments,
  cancelAppointments,
} from "../../controllers/appointments/appointmentsControllers";

const appointmentRouter: Router = Router();

//GET /appointments => Obtener el listado de todos los turnos de todos los usuarios.
appointmentRouter.get("/", getAllAppointments);

//GET /appointment => Obtener el detalle de un turno específico.
appointmentRouter.get("/:id", getAppointmentsById);

//POST /appointment/schedule => Agendar un nuevo turno.
appointmentRouter.post("/schedule", scheduleAppointments);

//PUT /appointment/cancel => Cambiar el estatus de un turno a “cancelled”.
appointmentRouter.put("/cancel/:id", cancelAppointments);
export default appointmentRouter;
