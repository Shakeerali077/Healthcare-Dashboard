// src/data/dashboardData.js

export const patientActivityData = [
    { name: 'Mon', appointments: 5 },
    { name: 'Tue', appointments: 3 },
    { name: 'Wed', appointments: 4 },
    { name: 'Thu', appointments: 6 },
    { name: 'Fri', appointments: 2 },
    { name: 'Sat', appointments: 1 },
    { name: 'Sun', appointments: 0 },
];

export const organData = [
    { name: 'Lungs', date: 'Date: 28 Oct 2021', percentage: 75, status: 'Healthy' },
    { name: 'Teeth', date: 'Date: 28 Oct 2021', percentage: 60, status: 'Needs checkup' },
    { name: 'Bone', date: 'Date: 28 Oct 2021', percentage: 90, status: 'Healthy' },
];

// export const upcomingScheduleData = [
//     {
//         day: 'Thursday',
//         appointments: [
//             { time: '11:00 AM', label: 'Health checkup complete', type: 'health', bgColor: 'bg-indigo-100', textColor: 'text-indigo-800' },
//             { time: '14:00 PM', label: 'Ophthalmologist', type: 'ophthalmologist', bgColor: 'bg-rose-100', textColor: 'text-rose-800' },
//         ]
//     },
//     {
//         day: 'Saturday',
//         appointments: [
//             { time: '12:00 AM', label: 'Cardiologist', type: 'cardiologist', bgColor: 'bg-purple-100', textColor: 'text-purple-800' },
//             { time: '16:00 PM', label: 'Neurologist', type: 'neurologist', bgColor: 'bg-emerald-100', textColor: 'text-emerald-800' },
//         ]
//     },
// ];

// Simple calendar data for October 2021
export const calendarDays = [
    { day: 'Mon', date: 25, hasAppointment: false, isHighlighted: false },
    { day: 'Tues', date: 26, hasAppointment: true, isHighlighted: false },
    { day: 'Wed', date: 27, hasAppointment: false, isHighlighted: false },
    { day: 'Thurs', date: 28, hasAppointment: true, isHighlighted: false },
    { day: 'Fri', date: 29, hasAppointment: false, isHighlighted: false },
    { day: 'Sat', date: 30, hasAppointment: true, isHighlighted: true }, // Highlighted for Saturday
    { day: 'Sun', date: 31, hasAppointment: false, isHighlighted: false },
];

// Timeslots, some hardcoded as active for demonstration
export const timeSlots = [
    '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'
];

export const activeTimeSlots = {
    'Tues': ['09:00'], // Added 09:00 for Tuesday based on image
    'Thurs': ['11:00'],
    'Sat': ['09:00', '10:00'] // Multiple for Saturday
};

// --- Specific colors based on the design image ---
const BLUE_CARD_BG = '#dbeafe'; // Light blue, used for some cards (e.g., Dentist)
const BLUE_CARD_TEXT = '#1e40af'; // Darker blue for text on light blue cards
const GREEN_CARD_BG = '#d1fae5'; // Light green, used for some cards (e.g., Physiotherapy)
const GREEN_CARD_TEXT = '#065f46'; // Darker green for text on light green cards
const DEFAULT_CARD_BG = '#ffffff'; // White, for most cards
const DARK_BLUE_CARD_BG = 'rgba(87, 52, 129, 1.00)';// dark blue card background
const LIGHT_GRAY_CARD_BG = '#e5e7eb';// dark blue card background
const DEFAULT_WHITE_TEXT = '#ffffff'; // White, for most cards
const DEFAULT_CARD_TEXT = '#4b5563'; // Gray text on white cards
const ICON_LIGHT_BLUE = '#bfdbfe'; // Light blue for some icons
const ICON_LIGHT_GREEN = '#a7f3d0'; // Light green for some icons
const ICON_DEFAULT_GRAY = '#e5e7eb'; // Light gray for default icons


export const specificAppointments = [
    {
        title: 'Dentist',
        time: '09:00-11:00',
        doctor: 'Dr. Cameron Williamson',
        type: 'dentist',
        bgColor: DARK_BLUE_CARD_BG,
        textColor: DEFAULT_WHITE_TEXT
    },
    {
        title: 'Physiotherapy Appointment',
        time: '11:00-12:00',
        doctor: 'Dr. Kevin Djomes',
        type: 'physiotherapy',
        bgColor: LIGHT_GRAY_CARD_BG,
        textColor: DEFAULT_CARD_TEXT,
        iconBgColor: ICON_DEFAULT_GRAY,
    }
];


export const upcomingScheduleData = [
    {
        day: 'On Thursday',
        appointments: [
            {
                title: 'Health checkup complete',
                time: '09:00 - 10:00 AM',
                doctor: 'Dr. Marcus Horizon',
                type: 'health-checkup', // Custom type if no specific icon
                bgColor: LIGHT_GRAY_CARD_BG,
                textColor: DEFAULT_CARD_TEXT,
                iconBgColor: ICON_DEFAULT_GRAY,
            },
            {
                title: 'Ophthalmologist',
                time: '11:00 - 12:00 PM',
                doctor: 'Dr. Marcus Horizon',
                type: 'ophthalmologist', // Assuming you have an icon for this or use generic
                bgColor: LIGHT_GRAY_CARD_BG,
                textColor: DEFAULT_CARD_TEXT,
                iconBgColor: ICON_DEFAULT_GRAY,
            },

        ],
    },
    {
        day: 'On Saturday',
        appointments: [
            {
                title: 'Dentist',
                time: '09:00 - 10:00 AM',
                doctor: 'Dr. Marcus Horizon',
                type: 'dentist', // Matches your getAppointmentIcon
                bgColor: LIGHT_GRAY_CARD_BG,
                textColor: DEFAULT_CARD_TEXT,
                iconBgColor: ICON_DEFAULT_GRAY, // Specific icon background color
            },
            {
                title: 'Physiotherapy Appointment',
                time: '11:00 - 12:00 PM',
                doctor: 'Dr. Marcus Horizon',
                type: 'physiotherapy', // Matches your getAppointmentIcon
                bgColor: LIGHT_GRAY_CARD_BG,
                textColor: DEFAULT_CARD_TEXT,
                iconBgColor: ICON_DEFAULT_GRAY, // Specific icon background color
            },

        ],
    },
];