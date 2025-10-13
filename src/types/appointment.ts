export interface TimeSlot {
  time: string;
  available: boolean;
  doctorName?: string;
}

export interface DaySchedule {
  date: Date;
  slots: TimeSlot[];
  isHoliday: boolean;
  holidayName?: string;
}

export interface Appointment {
  id: string;
  patientName: string;
  phoneNumber: string;
  email: string;
  date: Date;
  time: string;
  treatmentType: string;
  notes?: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  createdAt: Date;
}

export interface AppointmentFormData {
  patientName: string;
  phoneNumber: string;
  email: string;
  treatmentType: string;
  notes?: string;
}

export type CalendarView = 'month' | 'week' | 'day';