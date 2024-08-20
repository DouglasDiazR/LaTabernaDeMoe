import { Request, Response } from "express";
import {
  getAllAppointmentsServices,
  getAppointmentsByIdServices,
  scheduleAppointmentsService,
  cancelAppointmentsService,
} from "../../services/appointmentsServices";
import Appointments from "../../entities/Appointments";
import { error } from "console";

//GET /appointments => Obtener el listado de todos los turnos de todos los usuarios.
export const getAllAppointments = async (req: Request, res: Response) => {
  try {
    const allAppointments: Appointments[] = await getAllAppointmentsServices();
    res.status(200).json(allAppointments);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

//GET /appointment => Obtener el detalle de un turno específico.
export const getAppointmentsById = async (
  req: Request<{ id: string }, {}, {}>,
  res: Response
) => {
  try {
    const { id } = req.params;
    const appointment: Appointments = await getAppointmentsByIdServices(
      Number(id)
    );
    res.status(200).json(appointment);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

//POST /appointment/schedule => Agendar un nuevo turno.
export const scheduleAppointments = async (req: Request, res: Response) => {
  try {
    const { date, time, userId, description } = req.body;
    const newAppointment: Appointments = await scheduleAppointmentsService({
      date,
      time,
      userId,
      description,
    });
    res.status(201).json({ newAppointment });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

//PUT /appointment/cancel => Cambiar el estatus de un turno a “cancelled”.
export const cancelAppointments = async (
  req: Request<{ id: string }, {}, {}>,
  res: Response
) => {
  const { id } = req.params;
  try {
    await cancelAppointmentsService(Number(id));
    res.status(200).json({ message: "Canceled Appointment" });
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};
