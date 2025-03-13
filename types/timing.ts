export type Timing = {
  id: number
  icon: string
  title: string
  startHour: number
  startMinutes: number
  endHour: number
  endMinutes: number
  formattedStartTime: string
}

export const FullDayTiming: Timing = {
  id: 0,
  icon: 'ph:calendar',
  title: 'Full Day',
  startHour: 0,
  startMinutes: 0,
  endHour: 23,
  endMinutes: 59,
  formattedStartTime: '12AM',
}

export const NightTiming: Timing = {
  id: 1,
  icon: 'ph:moon-stars',
  title: 'Night',
  startHour: 0,
  startMinutes: 0,
  endHour: 5,
  endMinutes: 59,
  formattedStartTime: '12AM',
}

export const MorningTiming: Timing = {
  id: 2,
  icon: 'ph:sun-horizon',
  title: 'Morning',
  startHour: 6,
  startMinutes: 0,
  endHour: 11,
  endMinutes: 59,
  formattedStartTime: '6AM',
}

export const AfternoonTiming: Timing = {
  id: 3,
  icon: 'ph:sun',
  title: 'Afternoon',
  startHour: 12,
  startMinutes: 0,
  endHour: 17,
  endMinutes: 59,
  formattedStartTime: '12PM',
}

export const EveningTiming: Timing = {
  id: 4,
  icon: 'ph:cloud-sun',
  title: 'Evening',
  startHour: 18,
  startMinutes: 0,
  endHour: 23,
  endMinutes: 59,
  formattedStartTime: '6PM',
}

export const AllTimings: Timing[] = [
  FullDayTiming,
  NightTiming,
  MorningTiming,
  AfternoonTiming,
  EveningTiming,
]
