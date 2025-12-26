// ========================================
// AUTOMATED TIMETABLE GENERATOR
// With Conflict Detection & Validation
// ========================================

class TimetableGenerator {
    constructor(teachers, timeSlots, subjectRequirements, classes) {
        this.teachers = teachers;
        this.timeSlots = timeSlots;
        this.subjectRequirements = subjectRequirements;
        this.classes = classes;
        this.timetables = {};
        this.teacherSchedule = {}; // Track teacher availability
        this.conflicts = [];
        this.peTeacherSchedule = {}; // Special tracking for PE teacher (grades 1-9)
    }

    // Main generation function
    generateAllTimetables() {
        console.log('🚀 Starting automated timetable generation...');
        this.resetSchedules();

        const levels = ['kindergarten', 'primary', 'middle', 'highschool'];

        for (const level of levels) {
            console.log(`\n📚 Generating ${level} timetables...`);
            const levelClasses = this.classes[level];

            for (const className of levelClasses) {
                const timetable = this.generateClassTimetable(level, className);
                this.timetables[className] = timetable;
            }
        }

        this.validateAllTimetables();
        this.generateReport();

        return {
            timetables: this.timetables,
            conflicts: this.conflicts,
            success: this.conflicts.length === 0
        };
    }

    // Generate timetable for a single class
    generateClassTimetable(level, className) {
        const config = this.timeSlots[level];
        const requirements = this.subjectRequirements[level];
        const availableTeachers = this.teachers[level];

        const timetable = [];
        const subjectCount = {};

        // Initialize subject count
        Object.keys(requirements).forEach(subject => {
            subjectCount[subject] = 0;
        });

        // Generate for each day
        for (let dayIndex = 0; dayIndex < 5; dayIndex++) {
            const day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'][dayIndex];
            const daySchedule = {
                day: day,
                periods: []
            };

            // Generate for each period
            for (let periodIndex = 1; periodIndex <= config.periods; periodIndex++) {
                // Handle breaks and lunch
                if (periodIndex === config.breakPeriod) {
                    daySchedule.periods.push({
                        period: periodIndex,
                        time: config.slots[periodIndex - 1],
                        subject: 'Break',
                        teacher: null,
                        isBreak: true
                    });
                    continue;
                }

                if (periodIndex === config.lunchPeriod) {
                    daySchedule.periods.push({
                        period: periodIndex,
                        time: config.slots[periodIndex - 1],
                        subject: 'Lunch',
                        teacher: null,
                        isBreak: true
                    });
                    continue;
                }

                // Assign subject and teacher
                const assignment = this.assignPeriod(
                    level,
                    className,
                    day,
                    periodIndex,
                    config.slots[periodIndex - 1],
                    requirements,
                    subjectCount,
                    availableTeachers
                );

                if (assignment) {
                    daySchedule.periods.push(assignment);
                    subjectCount[assignment.subject]++;
                }
            }

            timetable.push(daySchedule);
        }

        return timetable;
    }

    // Assign a period with conflict checking
    assignPeriod(level, className, day, period, timeSlot, requirements, subjectCount, availableTeachers) {
        // Get subjects that still need periods
        const needsMorePeriods = Object.keys(requirements).filter(subject =>
            subjectCount[subject] < requirements[subject]
        );

        if (needsMorePeriods.length === 0) {
            return null;
        }

        // Prioritize subjects that need more periods
        needsMorePeriods.sort((a, b) => {
            const aRemaining = requirements[a] - subjectCount[a];
            const bRemaining = requirements[b] - subjectCount[b];
            return bRemaining - aRemaining;
        });

        // Try to assign each subject
        for (const subject of needsMorePeriods) {
            // Special handling for PE (grades 1-9 share one teacher)
            if (subject === 'PE' && (level === 'primary' || level === 'middle')) {
                const peAssignment = this.assignPEPeriod(className, day, period, timeSlot);
                if (peAssignment) {
                    return peAssignment;
                }
                continue;
            }

            // Find available teacher for this subject
            const teacher = this.findAvailableTeacher(subject, day, period, timeSlot, availableTeachers);

            if (teacher) {
                // Mark teacher as busy
                this.markTeacherBusy(teacher.id, day, period, className, subject);

                return {
                    period: period,
                    time: timeSlot,
                    subject: subject,
                    teacher: teacher.name,
                    teacherId: teacher.id,
                    isBreak: false
                };
            }
        }

        // If no assignment possible, log conflict
        this.conflicts.push({
            class: className,
            day: day,
            period: period,
            reason: 'No available teacher found for remaining subjects'
        });

        return null;
    }

    // Special handling for PE teacher (shared across grades 1-9)
    assignPEPeriod(className, day, period, timeSlot) {
        const peTeacher = this.teachers.primary.find(t => t.subjects.includes('PE'));

        if (!peTeacher) {
            this.conflicts.push({
                class: className,
                day: day,
                period: period,
                reason: 'PE teacher not found'
            });
            return null;
        }

        // Check if PE teacher is available
        const scheduleKey = `${day}-${period}`;

        if (!this.peTeacherSchedule[scheduleKey]) {
            // Check if this class already had PE this week
            const classKey = `${className}-week`;
            if (this.peTeacherSchedule[classKey]) {
                return null; // Class already has PE this week
            }

            // Assign PE
            this.peTeacherSchedule[scheduleKey] = className;
            this.peTeacherSchedule[classKey] = true;
            this.markTeacherBusy(peTeacher.id, day, period, className, 'PE');

            return {
                period: period,
                time: timeSlot,
                subject: 'PE',
                teacher: peTeacher.name,
                teacherId: peTeacher.id,
                isBreak: false
            };
        }

        return null; // PE teacher busy
    }

    // Find available teacher for a subject
    findAvailableTeacher(subject, day, period, timeSlot, availableTeachers) {
        const qualifiedTeachers = availableTeachers.filter(t =>
            t.subjects.includes(subject)
        );

        for (const teacher of qualifiedTeachers) {
            if (this.isTeacherAvailable(teacher.id, day, period)) {
                return teacher;
            }
        }

        return null;
    }

    // Check if teacher is available at given time
    isTeacherAvailable(teacherId, day, period) {
        const key = `${teacherId}-${day}-${period}`;
        return !this.teacherSchedule[key];
    }

    // Mark teacher as busy
    markTeacherBusy(teacherId, day, period, className, subject) {
        const key = `${teacherId}-${day}-${period}`;
        this.teacherSchedule[key] = {
            class: className,
            subject: subject
        };
    }

    // Reset all schedules
    resetSchedules() {
        this.teacherSchedule = {};
        this.peTeacherSchedule = {};
        this.conflicts = [];
        this.timetables = {};
    }

    // Validate all generated timetables
    validateAllTimetables() {
        console.log('\n✅ Validating timetables for conflicts...');

        // Check for teacher conflicts
        const teacherConflicts = this.detectTeacherConflicts();

        // Check for subject requirement fulfillment
        const requirementIssues = this.checkSubjectRequirements();

        // Check PE teacher constraint (only 1 period per week for grades 1-9)
        const peIssues = this.validatePEConstraint();

        this.conflicts = [...this.conflicts, ...teacherConflicts, ...requirementIssues, ...peIssues];
    }

    // Detect if any teacher is scheduled in multiple places at the same time
    detectTeacherConflicts() {
        const conflicts = [];
        const timeSlotMap = {};

        Object.keys(this.teacherSchedule).forEach(key => {
            const [teacherId, day, period] = key.split('-');
            const timeKey = `${day}-${period}`;

            if (!timeSlotMap[timeKey]) {
                timeSlotMap[timeKey] = {};
            }

            if (timeSlotMap[timeKey][teacherId]) {
                conflicts.push({
                    type: 'TEACHER_CONFLICT',
                    teacherId: teacherId,
                    day: day,
                    period: period,
                    classes: [timeSlotMap[timeKey][teacherId].class, this.teacherSchedule[key].class],
                    reason: `Teacher ${teacherId} scheduled in multiple classes at the same time`
                });
            } else {
                timeSlotMap[timeKey][teacherId] = this.teacherSchedule[key];
            }
        });

        return conflicts;
    }

    // Check if all subject requirements are met
    checkSubjectRequirements() {
        const issues = [];

        Object.keys(this.timetables).forEach(className => {
            const timetable = this.timetables[className];
            const subjectCount = {};

            // Count subjects in timetable
            timetable.forEach(day => {
                day.periods.forEach(period => {
                    if (!period.isBreak) {
                        subjectCount[period.subject] = (subjectCount[period.subject] || 0) + 1;
                    }
                });
            });

            // Get level for this class
            let level = null;
            for (const [lvl, classes] of Object.entries(this.classes)) {
                if (classes.includes(className)) {
                    level = lvl;
                    break;
                }
            }

            if (level) {
                const requirements = this.subjectRequirements[level];

                // Check each requirement
                Object.keys(requirements).forEach(subject => {
                    const required = requirements[subject];
                    const actual = subjectCount[subject] || 0;

                    if (actual !== required) {
                        issues.push({
                            type: 'REQUIREMENT_MISMATCH',
                            class: className,
                            subject: subject,
                            required: required,
                            actual: actual,
                            reason: `${subject} has ${actual} periods but requires ${required}`
                        });
                    }
                });
            }
        });

        return issues;
    }

    // Validate PE teacher constraint (1 period per week for grades 1-9)
    validatePEConstraint() {
        const issues = [];
        const peClasses = [...this.classes.primary, ...this.classes.middle];

        peClasses.forEach(className => {
            const timetable = this.timetables[className];
            let peCount = 0;

            timetable.forEach(day => {
                day.periods.forEach(period => {
                    if (period.subject === 'PE') {
                        peCount++;
                    }
                });
            });

            if (peCount !== 1) {
                issues.push({
                    type: 'PE_CONSTRAINT_VIOLATION',
                    class: className,
                    actual: peCount,
                    required: 1,
                    reason: `${className} has ${peCount} PE periods but should have exactly 1 per week`
                });
            }
        });

        return issues;
    }

    // Generate comprehensive report
    generateReport() {
        console.log('\n' + '='.repeat(60));
        console.log('📊 TIMETABLE GENERATION REPORT');
        console.log('='.repeat(60));

        console.log(`\n✅ Total Classes: ${Object.keys(this.timetables).length}`);
        console.log(`⚠️  Total Conflicts: ${this.conflicts.length}`);

        if (this.conflicts.length === 0) {
            console.log('\n🎉 SUCCESS! All timetables generated without conflicts!');
        } else {
            console.log('\n❌ CONFLICTS DETECTED:');
            this.conflicts.forEach((conflict, index) => {
                console.log(`\n${index + 1}. ${conflict.type || 'GENERAL'}`);
                console.log(`   ${conflict.reason}`);
                if (conflict.class) console.log(`   Class: ${conflict.class}`);
                if (conflict.day) console.log(`   Day: ${conflict.day}`);
                if (conflict.period) console.log(`   Period: ${conflict.period}`);
            });
        }

        console.log('\n' + '='.repeat(60));
    }

    // Export timetable to JSON
    exportToJSON() {
        return JSON.stringify({
            timetables: this.timetables,
            conflicts: this.conflicts,
            generatedAt: new Date().toISOString()
        }, null, 2);
    }

    // Get timetable for specific class
    getTimetable(className) {
        return this.timetables[className];
    }

    // Get teacher schedule
    getTeacherSchedule(teacherId) {
        const schedule = {};

        Object.keys(this.teacherSchedule).forEach(key => {
            const [tId, day, period] = key.split('-');
            if (tId === teacherId) {
                if (!schedule[day]) {
                    schedule[day] = [];
                }
                schedule[day].push({
                    period: parseInt(period),
                    ...this.teacherSchedule[key]
                });
            }
        });

        return schedule;
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TimetableGenerator;
}
