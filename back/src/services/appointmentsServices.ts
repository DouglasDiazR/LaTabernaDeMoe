import IScheduleAppointmentDto from "../Dtos/IScheduleAppointmentsDto";
import Appointments from "../entities/Appointments";
import Users from "../entities/users";
import { appointmentsRepositoty, usersRepository } from "../repositories";

export const scheduleAppointmentsService = async (
  scheduleAppointmentsDto: IScheduleAppointmentDto
): Promise<Appointments> => {
  const user: Users | null = await usersRepository.findOneBy({
    id: scheduleAppointmentsDto.userId,
  });
  if (!user) throw Error("User not found");

  const newAppointment: Appointments = appointmentsRepositoty.create(
    scheduleAppointmentsDto
  );
  await appointmentsRepositoty.save(newAppointment);
  newAppointment.users = user;
  await appointmentsRepositoty.save(newAppointment);
  return newAppointment;
};

export const getAllAppointmentsServices = async (): Promise<Appointments[]> => {
  const allAppointments: Appointments[] = await appointmentsRepositoty.find();
  return allAppointments;
};

export const getAppointmentsByIdServices = async (
  id: number
): Promise<Appointments> => {
  const appointment: Appointments | null = await appointmentsRepositoty.findOne(
    {
      where: { id: id },
    }
  );

  if (!appointment) throw new Error("Appointment not found");
  return appointment;
};

export const cancelAppointmentsService = async (id: number): Promise<void> => {
  const appointment: Appointments | null =
    await appointmentsRepositoty.findOneBy({
      id: id,
    });
  if (!appointment) throw Error("Appointment not found");
  appointment.status = "cancelled";
  await appointmentsRepositoty.save(appointment);
};
