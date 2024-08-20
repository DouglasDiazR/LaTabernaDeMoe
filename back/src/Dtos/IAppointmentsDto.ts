import { AppointmentStatus } from "../interfaces/IAppointment";

interface IAppointmentsDto {
  name: string;
  date: string;
  time: string;
  status: AppointmentStatus;
}

export default IAppointmentsDto;
