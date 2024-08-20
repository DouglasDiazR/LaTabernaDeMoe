export enum AppointmentStatus {
  ACTIVE = "active",
  CANCELLED = "cancelled",
}

interface IAppointments {
  id: number;
  date: string;
  time: string;
  userId: number;
  status: AppointmentStatus;
  description: string;
}

export default IAppointments;
