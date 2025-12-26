// ========================================
// TIMETABLE DATA & CONFIGURATION
// ========================================

// Teacher Database
const teachers = {
    // Kindergarten Teachers
    kindergarten: [
        { id: 'T001', name: 'Ms. Sarah Johnson', subjects: ['Play Time', 'Story Time', 'Numbers', 'Alphabets', 'Shapes', 'Rhymes'] },
        { id: 'T002', name: 'Ms. Emily Davis', subjects: ['Art & Craft', 'Drawing', 'Colors', 'Painting'] },
        { id: 'T003', name: 'Mr. David Miller', subjects: ['Music'] },
        { id: 'T004', name: 'Ms. Lisa Brown', subjects: ['Dance', 'Play Time'] },
        { id: 'T005', name: 'Mr. Tom Cooper', subjects: ['Games'] }
    ],

    // Primary Teachers (Grades 1-5)
    primary: [
        { id: 'T006', name: 'Mr. Robert Johnson', subjects: ['Math', 'Math Lab'] },
        { id: 'T007', name: 'Ms. Jennifer Williams', subjects: ['English', 'Reading'] },
        { id: 'T008', name: 'Dr. Michael Brown', subjects: ['Science', 'Lab'] },
        { id: 'T009', name: 'Mr. Thomas Davis', subjects: ['Social Studies', 'Geography'] },
        { id: 'T010', name: 'Mr. Tom Cooper', subjects: ['PE'], maxPeriodsPerWeek: 1 }, // ONE PE teacher for all 1-9
        { id: 'T002', name: 'Ms. Emily Davis', subjects: ['Art'] },
        { id: 'T003', name: 'Mr. David Miller', subjects: ['Music'] },
        { id: 'T011', name: 'Mr. James Wilson', subjects: ['Computer'] },
        { id: 'T012', name: 'Ms. Karen Anderson', subjects: ['Library'] }
    ],

    // Middle School Teachers (Grades 6-9)
    middle: [
        { id: 'T013', name: 'Dr. James Peterson', subjects: ['Mathematics', 'Algebra'] },
        { id: 'T014', name: 'Ms. Linda Roberts', subjects: ['English', 'Literature'] },
        { id: 'T015', name: 'Dr. Richard Clarke', subjects: ['Physics', 'Lab - Physics'] },
        { id: 'T016', name: 'Dr. Maria Martinez', subjects: ['Chemistry', 'Lab - Chemistry'] },
        { id: 'T017', name: 'Dr. Susan Lee', subjects: ['Biology', 'Lab - Biology'] },
        { id: 'T018', name: 'Mr. William Thompson', subjects: ['History'] },
        { id: 'T019', name: 'Ms. Patricia Garcia', subjects: ['Geography'] },
        { id: 'T010', name: 'Mr. Tom Cooper', subjects: ['PE'], maxPeriodsPerWeek: 1 }, // SAME PE teacher
        { id: 'T002', name: 'Ms. Emily Davis', subjects: ['Art'] },
        { id: 'T003', name: 'Mr. David Miller', subjects: ['Music'] },
        { id: 'T011', name: 'Mr. James Wilson', subjects: ['Computer Science'] }
    ],

    // High School Teachers (Grades 10-12)
    highschool: [
        { id: 'T013', name: 'Dr. James Peterson', subjects: ['Advanced Math', 'Calculus', 'Statistics'] },
        { id: 'T014', name: 'Ms. Linda Roberts', subjects: ['English Literature', 'Composition'] },
        { id: 'T015', name: 'Dr. Richard Clarke', subjects: ['Physics', 'AP Physics', 'Lab - Physics'] },
        { id: 'T016', name: 'Dr. Maria Martinez', subjects: ['Chemistry', 'Organic Chemistry', 'Lab - Chemistry'] },
        { id: 'T017', name: 'Dr. Susan Lee', subjects: ['Biology', 'AP Biology', 'Lab - Biology'] },
        { id: 'T020', name: 'Mr. William Harris', subjects: ['Economics', 'Business Studies'] },
        { id: 'T018', name: 'Mr. William Thompson', subjects: ['History'] },
        { id: 'T021', name: 'Mr. Steven Cooper', subjects: ['PE'] }, // Different PE teacher for high school
        { id: 'T011', name: 'Mr. James Wilson', subjects: ['Computer Science'] }
    ]
};

// Time Slots Configuration
const timeSlots = {
    kindergarten: {
        periods: 5,
        slots: ['8:30-9:15', '9:15-10:00', '10:00-10:30', '10:30-11:15', '11:15-12:00'],
        breakPeriod: 3 // Period 3 is break
    },
    primary: {
        periods: 9,
        slots: ['8:00-8:45', '8:45-9:30', '9:30-10:15', '10:15-10:45', '10:45-11:30', '11:30-12:15', '12:15-1:00', '1:00-2:00', '2:00-2:45'],
        breakPeriod: 4, // Period 4 is break
        lunchPeriod: 8  // Period 8 is lunch
    },
    middle: {
        periods: 9,
        slots: ['8:00-8:45', '8:45-9:30', '9:30-10:15', '10:15-10:45', '10:45-11:30', '11:30-12:15', '12:15-1:00', '1:00-2:00', '2:00-2:45'],
        breakPeriod: 4,
        lunchPeriod: 8
    },
    highschool: {
        periods: 10,
        slots: ['7:30-8:20', '8:20-9:10', '9:10-10:00', '10:00-10:30', '10:30-11:20', '11:20-12:10', '12:10-1:00', '1:00-2:00', '2:00-2:50', '2:50-3:30'],
        breakPeriod: 4,
        lunchPeriod: 8
    }
};

// Subject Requirements per Grade Level
const subjectRequirements = {
    kindergarten: {
        'Play Time': 2,
        'Art & Craft': 2,
        'Music': 2,
        'Story Time': 2,
        'Numbers': 1,
        'Colors': 1,
        'Alphabets': 1,
        'Drawing': 1,
        'Dance': 1,
        'Games': 1,
        'Shapes': 1,
        'Painting': 1,
        'Rhymes': 1
    },
    primary: {
        'Math': 5,
        'English': 5,
        'Science': 4,
        'Social Studies': 3,
        'PE': 1, // Only ONE period per week
        'Art': 2,
        'Music': 1,
        'Computer': 2,
        'Library': 1
    },
    middle: {
        'Mathematics': 5,
        'English': 4,
        'Physics': 3,
        'Chemistry': 3,
        'Biology': 3,
        'History': 2,
        'Geography': 2,
        'PE': 1, // Only ONE period per week
        'Art': 1,
        'Music': 1,
        'Computer Science': 2
    },
    highschool: {
        'Advanced Math': 6,
        'English Literature': 4,
        'Physics': 4,
        'Chemistry': 4,
        'Biology': 4,
        'Economics': 2,
        'History': 2,
        'PE': 2,
        'Computer Science': 2
    }
};

// Days of the week
const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

// Classes Configuration
const classes = {
    kindergarten: ['LKG', 'UKG'],
    primary: ['Grade1', 'Grade2', 'Grade3', 'Grade4', 'Grade5'],
    middle: ['Grade6', 'Grade7', 'Grade8', 'Grade9'],
    highschool: ['Grade10', 'Grade11', 'Grade12']
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        teachers,
        timeSlots,
        subjectRequirements,
        daysOfWeek,
        classes
    };
}
