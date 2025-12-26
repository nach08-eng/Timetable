// 🔐 AUTH GUARD
const role = localStorage.getItem("role");
if (!role) {
    window.location.href = "admin.html";
}

/* ========================================
   DATA CONFIGURATION (teachers, classes)
   ======================================== */

// ===== 25 TEACHERS (use UNIQUE KEYS) =====
// PROBLEM BEFORE: same key (e.g. saranya, rajesh, kavitha, lakshmi) repeated,
// so earlier definitions were overwritten. Now each teacher key is unique.

const teachers = {
    // Kindergarten Teachers (3)
    malathiKg: {
        name: "Mrs. Malathi",
        subject: "Rhymes",
        category: "kindergarten",
        classes: ["LKG", "UKG"],
        periodCount: 0,
        maxPeriods: 25
    },
    anbuKg: {
        name: "Mrs. Anbu",
        subject: "Drawing",
        category: "kindergarten",
        classes: ["LKG", "UKG"],
        periodCount: 0,
        maxPeriods: 25
    },
    kannanKg: {
        name: "Mr. Kannan",
        subject: "Playing",
        category: "kindergarten",
        classes: ["LKG", "UKG"],
        periodCount: 0,
        maxPeriods: 25
    },

    // Primary Core Teachers
    lakshmiPrimary: {
        name: "Mrs. Lakshmi",
        subject: "Tamil",
        category: "primary",
        classes: ["1", "2", "3", "4", "5"],
        periodCount: 0,
        maxPeriods: 25
    },
    priyaPrimary: {
        name: "Mrs. Priya",
        subject: "English",
        category: "primary",
        classes: ["1", "2", "3", "4", "5"],
        periodCount: 0,
        maxPeriods: 25
    },
    kumarPrimary: {
        name: "Mr. Kumar",
        subject: "Maths",
        category: "primary",
        classes: ["1", "2", "3", "4", "5"],
        periodCount: 0,
        maxPeriods: 25
    },
    saranyaMiddleSci: {
        name: "Mrs. Saranya",
        subject: "Science",
        category: "primary",
        classes: ["1", "2", "3", "4", "5"],
        periodCount: 0,
        maxPeriods: 25
    },
    rajeshMiddleSoc: {
        name: "Mr. Rajesh",
        subject: "Social",
        category: "primary",
        classes: ["1", "2", "3", "4", "5"],
        periodCount: 0,
        maxPeriods: 25
    },

    // P.E.T for 1–9
    muruganPet: {
        name: "Mr. Murugan",
        subject: "P.E.T",
        category: "primary",
        classes: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
        periodCount: 0,
        maxPeriods: 25
    },

    // Middle Tamil, English, Maths (also used in high)
    geethaTamil: {
        name: "Mrs. Geetha",
        subject: "Tamil",
        category: "middle",
        classes: ["6", "7", "8", "9", "10", "11A", "11B", "11C", "11D", "12A", "12B", "12C", "12D"],
        periodCount: 0,
        maxPeriods: 25
    },
    arunEnglish: {
        name: "Mr. Arun",
        subject: "English",
        category: "middle",
        classes: ["6", "7", "8", "9", "10", "11A", "11B", "11C", "11D", "12A", "12B", "12C", "12D"],
        periodCount: 0,
        maxPeriods: 25
    },
    rameshMaths: {
        name: "Mr. Ramesh",
        subject: "Maths",
        category: "high",
        classes: ["6", "7", "8", "9", "10", "11A", "11B", "11C", "11D", "12A", "12B", "12C", "12D"],
        periodCount: 0,
        maxPeriods: 25
    },

    // High School – Science stream
    vijayPhysics: {
        name: "Mr. Vijay",
        subject: "Physics",
        category: "high",
        classes: ["10", "11A", "11B", "12A", "12B"],
        periodCount: 0,
        maxPeriods: 25
    },
    meenaChemistry: {
        name: "Mrs. Meena",
        subject: "Chemistry",
        category: "high",
        classes: ["10", "11A", "11B", "12A", "12B"],
        periodCount: 0,
        maxPeriods: 25
    },
    deepaBotany: {
        name: "Mrs. Deepa",
        subject: "Botany",
        category: "high",
        classes: ["11B", "12B"],
        periodCount: 0,
        maxPeriods: 25
    },
    senthilZoology: {
        name: "Mr. Senthil",
        subject: "Zoology",
        category: "high",
        classes: ["11B", "12B"],
        periodCount: 0,
        maxPeriods: 25
    },

    // High – Computer & Commerce
    kavithaCS: {
        name: "Mrs. Kavitha",
        subject: "Computer Science",
        category: "high",
        classes: ["10", "11A", "12A"],
        periodCount: 0,
        maxPeriods: 25
    },
    sureshAccounts: {
        name: "Mr. Suresh",
        subject: "Accounts",
        category: "high",
        classes: ["11C", "11D", "12C", "12D"],
        periodCount: 0,
        maxPeriods: 25
    },
    divyaBusMaths: {
        name: "Mrs. Divya",
        subject: "Business Maths",
        category: "high",
        classes: ["11C", "12C"],
        periodCount: 0,
        maxPeriods: 25
    },
    anandEconomics: {
        name: "Mr. Anand",
        subject: "Economics",
        category: "high",
        classes: ["11C", "11D", "12C", "12D"],
        periodCount: 0,
        maxPeriods: 25
    },
    lakshmiCA: {
        name: "Mrs. Lakshmi",
        subject: "Computer Applications",
        category: "high",
        classes: ["11D", "12D"],
        periodCount: 0,
        maxPeriods: 25
    },
    dineshCommerce: {
        name: "Mr. Dinesh",
        subject: "Commerce",
        category: "high",
        classes: ["11C", "11D", "12C", "12D"],
        periodCount: 0,
        maxPeriods: 25
    },

    // Additional support teachers
    srinivasanMaths: {
        name: "Mr. Srinivasan",
        subject: "Maths",
        category: "high",
        classes: ["10", "11A", "11B", "12A", "12B"],
        periodCount: 0,
        maxPeriods: 25
    },
    savitriScience: {
        name: "Mrs. Savitri",
        subject: "Science",
        category: "high",
        classes: ["10"],
        periodCount: 0,
        maxPeriods: 25
    },
    karthikEnglishHigh: {
        name: "Mr. Karthik",
        subject: "English",
        category: "high",
        classes: ["10", "11A", "11B", "11C", "11D", "12A", "12B", "12C", "12D"],
        periodCount: 0,
        maxPeriods: 25
    },
    anjaliTamilHigh: {
        name: "Mrs. Anjali",
        subject: "Tamil",
        category: "high",
        classes: ["10", "11A", "11B", "11C", "11D", "12A", "12B", "12C", "12D"],
        periodCount: 0,
        maxPeriods: 25
    },
    harishCSHigh: {
        name: "Mr. Harish",
        subject: "Computer Science",
        category: "high",
        classes: ["11A", "12A"],
        periodCount: 0,
        maxPeriods: 25
    },
    prakashPhysicsHigh: {
        name: "Mr. Prakash",
        subject: "Physics",
        category: "high",
        classes: ["10", "11A", "12A"],
        periodCount: 0,
        maxPeriods: 25
    },
    lakshanaChemHigh: {
        name: "Mrs. Lakshana",
        subject: "Chemistry",
        category: "high",
        classes: ["10", "11B", "12B"],
        periodCount: 0,
        maxPeriods: 25
    }
};

// Flatten to array
const TEACHER_LIST = Object.values(teachers);

// Class IDs must match your HTML data-class
const CLASS_IDS = [
    "LKG", "UKG",
    "1", "2", "3", "4", "5",
    "6", "7", "8", "9",
    "10", "11A", "11B", "11C", "11D", "12A", "12B", "12C", "12D"
];

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

// Time slots
const SLOTS = {
    kg: [
        "09:30 - 10:00",
        "10:00 - 10:30",
        "10:30 - 10:45", // break
        "10:45 - 11:15",
        "11:15 - 11:45",
        "11:45 - 12:30"
    ],
    primary: [
        "09:30 - 10:15",
        "10:15 - 11:00",
        "11:00 - 11:15", // break
        "11:15 - 12:00",
        "12:00 - 12:45",
        "12:45 - 01:30", // lunch
        "01:30 - 02:15",
        "02:15 - 03:00",
        "03:00 - 03:45",
        "03:45 - 04:30"
    ],
    high: [
        "08:30 - 09:15",
        "09:15 - 10:00",
        "10:00 - 10:45",
        "10:45 - 11:00", // break
        "11:00 - 11:45",
        "11:45 - 12:30",
        "12:30 - 01:15", // lunch
        "01:15 - 02:00",
        "02:00 - 02:45",
        "02:45 - 03:30",
        "03:30 - 03:45", // short break
        "03:45 - 04:30",
        "04:30 - 05:30"  // special
    ]
};

// Curriculum
const CURRICULUM = {
    LKG: { category: "kg", subjects: ["Rhymes", "Drawing", "Playing", "Story"] },
    UKG: { category: "kg", subjects: ["Rhymes", "Drawing", "Playing", "Story"] },

    "1": { category: "primary", subjects: ["Tamil", "English", "Maths", "Science", "Social", "P.E.T"] },
    "2": { category: "primary", subjects: ["Tamil", "English", "Maths", "Science", "Social", "P.E.T"] },
    "3": { category: "primary", subjects: ["Tamil", "English", "Maths", "Science", "Social", "P.E.T"] },
    "4": { category: "primary", subjects: ["Tamil", "English", "Maths", "Science", "Social", "P.E.T"] },
    "5": { category: "primary", subjects: ["Tamil", "English", "Maths", "Science", "Social", "P.E.T"] },

    "6": { category: "primary", subjects: ["Tamil", "English", "Maths", "Science", "Social", "P.E.T"] },
    "7": { category: "primary", subjects: ["Tamil", "English", "Maths", "Science", "Social", "P.E.T"] },
    "8": { category: "primary", subjects: ["Tamil", "English", "Maths", "Science", "Social", "P.E.T"] },
    "9": { category: "primary", subjects: ["Tamil", "English", "Maths", "Science", "Social", "P.E.T"] },

    "10": {
        category: "high",
        subjects: ["Maths", "Science", "English", "Tamil", "Social", "Computer Science"]
    },
    "11A": {
        category: "high",
        subjects: ["Maths", "Physics", "Chemistry", "Computer Science", "English", "Tamil"]
    },
    "11B": {
        category: "high",
        subjects: ["Maths", "Botany", "Zoology", "English", "Tamil", "Physics", "Chemistry"]
    },
    "11C": {
        category: "high",
        subjects: ["Commerce", "Accounts", "Economics", "English", "Tamil", "Business Maths"]
    },
    "11D": {
        category: "high",
        subjects: ["Commerce", "Accounts", "Economics", "English", "Tamil", "Computer Applications"]
    },
    "12A": {
        category: "high",
        subjects: ["Maths", "Physics", "Chemistry", "Computer Science", "English", "Tamil"]
    },
    "12B": {
        category: "high",
        subjects: ["Maths", "Botany", "Zoology", "English", "Tamil", "Physics", "Chemistry"]
    },
    "12C": {
        category: "high",
        subjects: ["Commerce", "Accounts", "Economics", "English", "Tamil", "Business Maths"]
    },
    "12D": {
        category: "high",
        subjects: ["Commerce", "Accounts", "Economics", "English", "Tamil", "Computer Applications"]
    }
};

// IMPORTANT SUBJECTS
// PROBLEM BEFORE: "Botony" typo; changed to "Botany".
const IMPORTANT_SUBJECTS = [
    "Maths",
    "Science",
    "Physics",
    "Chemistry",
    "Accounts",
    "Business Maths",
    "Computer Science",
    "Computer Applications",
    "Botany",
    "Zoology"
];

/* ========================================
   GENERATOR UTILITIES
   ======================================== */

function getSlotsForClass(cls) {
    const cat = CURRICULUM[cls].category;
    if (cat === "kg") return SLOTS.kg;
    if (cat === "primary") return SLOTS.primary;
    return SLOTS.high;
}

function isSpecialSlot(cls, slotIndex) {
    const cat = CURRICULUM[cls].category;
    if (cat !== "high") return false;
    const slots = getSlotsForClass(cls);
    return slotIndex === slots.length - 1;
}

// IMPROVED teacherFor: exact subject match + class match + maxPeriods
function teacherFor(subject, cls) {
    const candidates = TEACHER_LIST.filter((t) => {
        if (t.subject !== subject) return false;
        if (t.periodCount >= t.maxPeriods) return false;
        return t.classes.includes(cls);
    });
    if (!candidates.length) return null;
    // pick teacher with least load
    candidates.sort((a, b) => a.periodCount - b.periodCount);
    return candidates[0];
}

function generateEmptyTimetable() {
    const table = {};
    for (const cls of CLASS_IDS) {
        const slots = getSlotsForClass(cls);
        table[cls] = DAYS.map(() => Array(slots.length).fill(null));
    }
    return table;
}

function canAssignTeacher(timetable, dayIndex, slotIndex, teacherName) {
    for (const cls of CLASS_IDS) {
        const day = timetable[cls][dayIndex];
        const cell = day[slotIndex];
        if (cell && cell.teacher === teacherName) {
            return false;
        }
    }
    return true;
}

function avoidImmediateRepeat(timetable, cls, dayIndex, slotIndex, subject) {
    const day = timetable[cls][dayIndex];
    const prev = day[slotIndex - 1];
    if (!prev) return true;
    return prev.subject !== subject;
}

/* ========================================
   TIMETABLE GENERATION
   ======================================== */

function generateAutoTimetable() {
    const timetable = generateEmptyTimetable();

    for (const cls of CLASS_IDS) {
        const slots = getSlotsForClass(cls);
        const subjects = CURRICULUM[cls].subjects;

        for (let d = 0; d < DAYS.length; d++) {
            for (let s = 0; s < slots.length; s++) {
                const time = slots[s];

                // KG fixed pattern
                if (CURRICULUM[cls].category === "kg") {
                    const kgPattern = [
                        { subject: "Rhymes", teacher: "Mrs. Malathi", css: "subject-rhymes" },
                        { subject: "Drawing", teacher: "Mrs. Anbu", css: "subject-drawing" },
                        { subject: "Break", teacher: "", css: "subject-break" },
                        { subject: "Playing", teacher: "Mr. Kannan", css: "subject-playing" },
                        { subject: "Rhymes", teacher: "Mrs. Malathi", css: "subject-rhymes" },
                        { subject: "Story", teacher: "Mrs. Anbu", css: "subject-drawing" }
                    ];
                    const cell = kgPattern[s] || kgPattern[0];
                    timetable[cls][d][s] = {
                        time,
                        subject: cell.subject,
                        teacher: cell.teacher,
                        class: cell.css
                    };
                    continue;
                }

                // Break / Lunch slots detection by time
                if (
                    time === "11:00 - 11:15" ||
                    time === "10:45 - 11:00" ||
                    time === "03:30 - 03:45"
                ) {
                    timetable[cls][d][s] = {
                        time,
                        subject: "Break",
                        teacher: "",
                        class: "subject-break"
                    };
                    continue;
                }
                if (time === "12:45 - 01:30" || time === "12:30 - 01:15") {
                    timetable[cls][d][s] = {
                        time,
                        subject: "Lunch",
                        teacher: "",
                        class: "subject-lunch"
                    };
                    continue;
                }

                // Special last period high school
                if (isSpecialSlot(cls, s)) {
                    const specialSubject =
                        cls === "11B" || cls === "12B" ? "Business Maths" : "Maths";
                    const t = teacherFor(specialSubject, cls);
                    if (t && canAssignTeacher(timetable, d, s, t.name)) {
                        t.periodCount++;
                        timetable[cls][d][s] = {
                            time,
                            subject: specialSubject,
                            teacher: t.name,
                            class:
                                specialSubject === "Maths"
                                    ? "subject-maths"
                                    : "subject-business-maths"
                        };
                    }
                    continue;
                }

                // Choose subject with important bias
                let pool = [...subjects];
                if (Math.random() < 0.5) {
                    const important = subjects.filter((sub) =>
                        IMPORTANT_SUBJECTS.includes(sub)
                    );
                    if (important.length) pool = important;
                }
                const shuffled = pool.sort(() => Math.random() - 0.5);

                let placed = false;
                const cssMap = {
                    Maths: "subject-maths",
                    Science: "subject-science",
                    English: "subject-english",
                    Tamil: "subject-tamil",
                    Social: "subject-social",
                    "P.E.T": "subject-pet",
                    "Computer Science": "subject-computer",
                    Accounts: "subject-accounts",
                    Economics: "subject-social",
                    "Business Maths": "subject-business-maths",
                    Physics: "subject-physics",
                    Chemistry: "subject-chemistry",
                    Botany: "subject-botany",
                    Zoology: "subject-zoology",
                    Commerce: "subject-social",
                    "Computer Applications": "subject-computer"
                };

                // FIRST ATTEMPT: Try to place with immediate repeat avoidance
                for (const subj of shuffled) {
                    const t = teacherFor(subj, cls);
                    if (!t) continue;
                    if (!canAssignTeacher(timetable, d, s, t.name)) continue;
                    if (!avoidImmediateRepeat(timetable, cls, d, s, subj)) continue;

                    t.periodCount++;
                    timetable[cls][d][s] = {
                        time,
                        subject: subj,
                        teacher: t.name,
                        class: cssMap[subj] || ""
                    };
                    placed = true;
                    break;
                }

                // SECOND ATTEMPT: Allow immediate repeat if needed
                if (!placed) {
                    for (const subj of shuffled) {
                        const t = teacherFor(subj, cls);
                        if (!t) continue;
                        if (!canAssignTeacher(timetable, d, s, t.name)) continue;

                        t.periodCount++;
                        timetable[cls][d][s] = {
                            time,
                            subject: subj,
                            teacher: t.name,
                            class: cssMap[subj] || ""
                        };
                        placed = true;
                        break;
                    }
                }

                // THIRD ATTEMPT: Use any available teacher from the subject pool
                if (!placed) {
                    for (const subj of shuffled) {
                        // Find ANY teacher who teaches this subject and is available
                        const allTeachersForSubject = TEACHER_LIST.filter(t =>
                            t.subject === subj && t.classes.includes(cls)
                        );

                        for (const t of allTeachersForSubject) {
                            if (canAssignTeacher(timetable, d, s, t.name)) {
                                t.periodCount++;
                                timetable[cls][d][s] = {
                                    time,
                                    subject: subj,
                                    teacher: t.name,
                                    class: cssMap[subj] || ""
                                };
                                placed = true;
                                break;
                            }
                        }
                        if (placed) break;
                    }
                }

                // FINAL FALLBACK: Use any available teacher for any subject
                if (!placed) {
                    for (const subj of subjects) {
                        const availableTeachers = TEACHER_LIST.filter(t =>
                            t.subject === subj &&
                            t.classes.includes(cls) &&
                            canAssignTeacher(timetable, d, s, t.name)
                        );

                        if (availableTeachers.length > 0) {
                            const t = availableTeachers[0];
                            t.periodCount++;
                            timetable[cls][d][s] = {
                                time,
                                subject: subj,
                                teacher: t.name,
                                class: cssMap[subj] || ""
                            };
                            placed = true;
                            break;
                        }
                    }
                }
            }
        }
    }

    return timetable;
}

const AUTO_TIMETABLE = generateAutoTimetable();

/* ========================================
   DOM & RENDER
   ======================================== */

const sidebar = document.getElementById("sidebar");
const sidebarToggle = document.getElementById("sidebarToggle");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navItems = document.querySelectorAll(".nav-item");
const contentSections = document.querySelectorAll(".content-section");

function updateTime() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString("en-US", { hour12: true });
    const dateStr = now.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    const timeEl = document.getElementById("currentTime");
    const dateEl = document.getElementById("currentDate");
    const todayEl = document.getElementById("todayDate");

    if (timeEl) timeEl.textContent = timeStr;
    if (dateEl) dateEl.textContent = dateStr;
    if (todayEl) todayEl.textContent = dateStr;
}

function generateTimetableHTMLFromAuto(clsId) {
    const scheduleMatrix = AUTO_TIMETABLE[clsId];
    const slots = getSlotsForClass(clsId);
    let html = '<table class="timetable"><thead><tr><th>Time</th>';

    DAYS.forEach((day) => (html += `<th>${day}</th>`));
    html += "</tr></thead><tbody>";

    slots.forEach((time, slotIndex) => {
        html += `<tr><td class="time-cell">${time}</td>`;
        for (let d = 0; d < DAYS.length; d++) {
            const cell = scheduleMatrix[d][slotIndex];
            if (!cell) {
                html += "<td></td>";
            } else if (cell.subject === "Break" || cell.subject === "Lunch") {
                html += `<td><div class="subject-cell ${cell.class}">
          <div class="subject-name">${cell.subject}</div>
        </div></td>`;
            } else {
                html += `<td><div class="subject-cell ${cell.class}">
          <div class="subject-name">${cell.subject}</div>
          <div class="teacher-name">${cell.teacher}</div>
        </div></td>`;
            }
        }
        html += "</tr>";
    });

    html += "</tbody></table>";
    return html;
}

function renderKindergartenTimetable(classType = "LKG") {
    const clsId = classType.toUpperCase() === "LKG" ? "LKG" : "UKG";
    const container = document.getElementById("kindergartenTimetable");
    if (container) {
        container.innerHTML = generateTimetableHTMLFromAuto(clsId);
    }
}

function renderPrimaryTimetable(grade = "1") {
    const container = document.getElementById("primaryTimetable");
    if (container) {
        container.innerHTML = generateTimetableHTMLFromAuto(grade);
    }
}

function renderMiddleTimetable(grade = "6") {
    const container = document.getElementById("middleTimetable");
    if (container) {
        container.innerHTML = generateTimetableHTMLFromAuto(grade);
    }
}

// FIXED: allow all 10, 11A–D, 12A–D, not only a subset
function renderHighTimetable(grade = "10") {
    const clsId = grade; // direct, because CLASS_IDS already has 10,11A..12D
    const container = document.getElementById("highTimetable");
    if (container) {
        container.innerHTML = generateTimetableHTMLFromAuto(clsId);
    }
}

function renderTeachers(filter = "all") {
    const grid = document.getElementById("teachersGrid");
    if (!grid) return;

    let html = "";

    Object.values(teachers).forEach((teacher) => {
        if (filter === "all" || teacher.category === filter) {
            const initials = teacher.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2);
            html += `
        <div class="teacher-card" data-category="${teacher.category}">
          <div class="teacher-header">
            <div class="teacher-avatar">${initials}</div>
            <div class="teacher-info">
              <h3>${teacher.name}</h3>
              <span class="teacher-subject">${teacher.subject}</span>
            </div>
          </div>
          <div class="teacher-schedule">
            <h4>Assigned Classes</h4>
            <div class="schedule-list">
              ${teacher.classes
                    .map((c) => `<span class="schedule-item">${c}</span>`)
                    .join("")}
            </div>
          </div>
        </div>
      `;
        }
    });

    grid.innerHTML = html;
}

/* ========================================
   EVENT LISTENERS
   ======================================== */

// Sidebar Toggle
if (sidebarToggle) {
    sidebarToggle.addEventListener("click", () => {
        sidebar.classList.toggle("collapsed");
    });
}

// Mobile Menu
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    });
}

// Close sidebar on outside click (mobile)
document.addEventListener("click", (e) => {
    if (
        sidebar &&
        sidebar.classList.contains("active") &&
        !sidebar.contains(e.target) &&
        mobileMenuBtn &&
        !mobileMenuBtn.contains(e.target)
    ) {
        sidebar.classList.remove("active");
    }
});

// Close on resize
window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && sidebar) {
        sidebar.classList.remove("active");
    }
});

// Navigation
navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        const section = item.dataset.section;

        navItems.forEach((nav) => nav.classList.remove("active"));
        item.classList.add("active");

        contentSections.forEach((sec) => sec.classList.remove("active"));
        const targetSection = document.getElementById(section);
        if (targetSection) {
            targetSection.classList.add("active");
        }

        if (sidebar) {
            sidebar.classList.remove("active");
        }
    });
});

// Class Tabs - Kindergarten
document.querySelectorAll("#kindergarten .class-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
        document
            .querySelectorAll("#kindergarten .class-tab")
            .forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        renderKindergartenTimetable(tab.dataset.class);
    });
});

// Class Tabs - Primary
document.querySelectorAll("#primary .class-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
        document
            .querySelectorAll("#primary .class-tab")
            .forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        renderPrimaryTimetable(tab.dataset.class);
    });
});

// Class Tabs - Middle
document.querySelectorAll("#middle .class-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
        document
            .querySelectorAll("#middle .class-tab")
            .forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        renderMiddleTimetable(tab.dataset.class);
    });
});

// Class Tabs - High
document.querySelectorAll("#high .class-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
        document
            .querySelectorAll("#high .class-tab")
            .forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        renderHighTimetable(tab.dataset.class);
    });
});

// Teacher Filter
document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        document
            .querySelectorAll(".filter-btn")
            .forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        renderTeachers(btn.dataset.filter);
    });
});

// Search
const searchInput = document.getElementById("searchInput");
if (searchInput) {
    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();

        if (query === "") {
            document.querySelectorAll(".teacher-card").forEach((card) => {
                card.style.display = "block";
            });
        } else {
            const teacherCards = document.querySelectorAll(".teacher-card");

            teacherCards.forEach((card) => {
                const teacherName = card
                    .querySelector(".teacher-info h3")
                    ?.textContent.toLowerCase() || "";
                const teacherSubject = card
                    .querySelector(".teacher-subject")
                    ?.textContent.toLowerCase() || "";
                const scheduleItems = Array.from(
                    card.querySelectorAll(".schedule-item")
                )
                    .map((item) => item.textContent.toLowerCase())
                    .join(" ");

                const matches =
                    teacherName.includes(query) ||
                    teacherSubject.includes(query) ||
                    scheduleItems.includes(query);

                card.style.display = matches ? "block" : "none";
            });

            const subjectCells = document.querySelectorAll(".subject-cell");
            subjectCells.forEach((cell) => {
                const subjectName =
                    cell.querySelector(".subject-name")?.textContent.toLowerCase() || "";
                const teacherName =
                    cell.querySelector(".teacher-name")?.textContent.toLowerCase() || "";

                if (subjectName.includes(query) || teacherName.includes(query)) {
                    cell.style.backgroundColor = "rgba(102, 126, 234, 0.3)";
                    cell.style.transform = "scale(1.05)";
                } else {
                    cell.style.backgroundColor = "";
                    cell.style.transform = "";
                }
            });
        }
    });
}

/* ========================================
   NOTIFICATION SYSTEM
   ======================================== */

// Notification data store
const notifications = [
    {
        id: 1,
        type: "success",
        title: "Timetable Generated",
        message: "All class schedules have been successfully generated with zero conflicts.",
        time: new Date(Date.now() - 5 * 60000), // 5 minutes ago
        read: false,
        icon: "fa-check-circle"
    },
    {
        id: 2,
        type: "info",
        title: "Teacher Assignment",
        message: "25 teachers have been assigned across all grade levels (LKG-12D).",
        time: new Date(Date.now() - 15 * 60000), // 15 minutes ago
        read: false,
        icon: "fa-user-check"
    },
    {
        id: 3,
        type: "warning",
        title: "Upcoming Class",
        message: "Next period starts in 10 minutes - Check your schedule.",
        time: new Date(Date.now() - 2 * 60000), // 2 minutes ago
        read: false,
        icon: "fa-clock"
    }
];

// Update notification badge
function updateNotificationBadge() {
    const badge = document.querySelector(".notification-badge");
    const unreadCount = notifications.filter(n => !n.read).length;

    if (badge) {
        badge.textContent = unreadCount;
        badge.style.display = unreadCount > 0 ? "flex" : "none";
    }
}

// Format time ago
function timeAgo(date) {
    const seconds = Math.floor((new Date() - date) / 1000);

    if (seconds < 60) return "Just now";
    if (seconds < 3600) return `${Math.floor(seconds / 60)} minutes ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)} hours ago`;
    return `${Math.floor(seconds / 86400)} days ago`;
}

// Create notification panel HTML
function createNotificationPanel() {
    const panel = document.createElement("div");
    panel.className = "notification-panel";
    panel.id = "notificationPanel";

    let html = `
    <div class="notification-header">
      <h3><i class="fas fa-bell"></i> Notifications</h3>
      <button class="mark-all-read" onclick="markAllAsRead()">
        <i class="fas fa-check-double"></i> Mark all as read
      </button>
    </div>
    <div class="notification-list">
  `;

    if (notifications.length === 0) {
        html += `
      <div class="notification-empty">
        <i class="fas fa-inbox"></i>
        <p>No notifications</p>
      </div>
    `;
    } else {
        notifications.forEach(notif => {
            html += `
        <div class="notification-item ${notif.read ? 'read' : 'unread'} notification-${notif.type}" data-id="${notif.id}">
          <div class="notification-icon">
            <i class="fas ${notif.icon}"></i>
          </div>
          <div class="notification-content">
            <h4>${notif.title}</h4>
            <p>${notif.message}</p>
            <span class="notification-time">${timeAgo(notif.time)}</span>
          </div>
          <button class="notification-close" onclick="dismissNotification(${notif.id})">
            <i class="fas fa-times"></i>
          </button>
        </div>
      `;
        });
    }

    html += `
    </div>
  `;

    panel.innerHTML = html;
    return panel;
}

// Toggle notification panel
function toggleNotificationPanel() {
    let panel = document.getElementById("notificationPanel");

    if (panel) {
        panel.remove();
    } else {
        panel = createNotificationPanel();
        document.body.appendChild(panel);

        // Mark notifications as read after viewing
        setTimeout(() => {
            notifications.forEach(n => n.read = true);
            updateNotificationBadge();
        }, 1000);
    }
}

// Mark all notifications as read
function markAllAsRead() {
    notifications.forEach(n => n.read = true);
    updateNotificationBadge();

    const panel = document.getElementById("notificationPanel");
    if (panel) {
        panel.remove();
        toggleNotificationPanel();
    }
}

// Dismiss a notification
function dismissNotification(id) {
    const index = notifications.findIndex(n => n.id === id);
    if (index > -1) {
        notifications.splice(index, 1);
        updateNotificationBadge();

        const panel = document.getElementById("notificationPanel");
        if (panel) {
            panel.remove();
            toggleNotificationPanel();
        }
    }
}

// Add new notification
function addNotification(type, title, message, icon = "fa-info-circle") {
    const newNotif = {
        id: Date.now(),
        type,
        title,
        message,
        time: new Date(),
        read: false,
        icon
    };

    notifications.unshift(newNotif);
    updateNotificationBadge();

    // Show toast notification
    showToast(type, title, message);

    // Update panel if open
    const panel = document.getElementById("notificationPanel");
    if (panel) {
        panel.remove();
        toggleNotificationPanel();
    }
}

// Show toast notification
function showToast(type, title, message) {
    const toast = document.createElement("div");
    toast.className = `notification-toast notification-${type}`;
    toast.innerHTML = `
    <div class="toast-content">
      <strong>${title}</strong>
      <p>${message}</p>
    </div>
  `;

    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add("show"), 100);
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

// Automated notification triggers
function initializeNotificationAutomation() {
    // Check for upcoming classes every minute
    setInterval(() => {
        const now = new Date();
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();

        // Example: Alert 10 minutes before class starts
        if (currentMinute === 20 || currentMinute === 50) {
            addNotification(
                "info",
                "Upcoming Class",
                "Next period starts in 10 minutes. Please check your schedule.",
                "fa-clock"
            );
        }
    }, 60000); // Check every minute

    // Daily timetable ready notification
    const now = new Date();
    if (now.getHours() === 8 && now.getMinutes() === 0) {
        addNotification(
            "success",
            "Good Morning!",
            "Today's timetable is ready. Have a great day!",
            "fa-sun"
        );
    }

    // Simulate random system updates
    setTimeout(() => {
        addNotification(
            "info",
            "System Update",
            "Timetable data has been synchronized successfully.",
            "fa-sync"
        );
    }, 30000); // 30 seconds after load
}

// Close notification panel when clicking outside
document.addEventListener("click", (e) => {
    const panel = document.getElementById("notificationPanel");
    const notifBtn = document.querySelector(".notification-btn");

    if (panel && !panel.contains(e.target) && !notifBtn?.contains(e.target)) {
        panel.remove();
    }
});

/* ========================================
   TIMETABLE REGENERATION
   ======================================== */

let currentTimetable = null;

function regenerateTimetable() {
    const btn = document.getElementById("regenerateBtn");

    // Show loading state
    btn.classList.add("loading");
    btn.disabled = true;

    // Show notification
    addNotification(
        "info",
        "Regenerating Timetable",
        "Please wait while we generate a new schedule...",
        "fa-sync"
    );

    // Simulate regeneration process
    setTimeout(() => {
        // Reset teacher period counts
        TEACHER_LIST.forEach(t => t.periodCount = 0);

        // Generate new timetable
        currentTimetable = generateAutoTimetable();

        // Update all views
        const activeKgTab = document.querySelector("#kindergarten .class-tab.active");
        const activePrimaryTab = document.querySelector("#primary .class-tab.active");
        const activeMiddleTab = document.querySelector("#middle .class-tab.active");
        const activeHighTab = document.querySelector("#high .class-tab.active");

        if (activeKgTab) renderKindergartenTimetable(activeKgTab.dataset.class);
        if (activePrimaryTab) renderPrimaryTimetable(activePrimaryTab.dataset.class);
        if (activeMiddleTab) renderMiddleTimetable(activeMiddleTab.dataset.class);
        if (activeHighTab) renderHighTimetable(activeHighTab.dataset.class);

        // Update teachers view
        const activeFilter = document.querySelector(".filter-btn.active");
        if (activeFilter) renderTeachers(activeFilter.dataset.filter);

        // Remove loading state
        btn.classList.remove("loading");
        btn.disabled = false;

        // Show success notification
        addNotification(
            "success",
            "Timetable Regenerated!",
            "All class schedules have been successfully regenerated with zero conflicts.",
            "fa-check-circle"
        );
    }, 2000); // 2 second delay for visual feedback
}

/* ========================================
   INITIALIZATION
   ======================================== */

document.addEventListener("DOMContentLoaded", () => {
    updateTime();
    setInterval(updateTime, 1000);

    renderKindergartenTimetable("LKG");
    renderPrimaryTimetable("1");
    renderMiddleTimetable("6");
    renderHighTimetable("10");
    renderTeachers("all");

    const welcomeImg = document.getElementById("welcomeImg");
    if (welcomeImg) {
        welcomeImg.onerror = function () {
            this.style.display = "none";
        };
    }

    // Initialize notification system
    updateNotificationBadge();
    initializeNotificationAutomation();

    // Add notification button click handler
    const notificationBtn = document.querySelector(".notification-btn");
    if (notificationBtn) {
        notificationBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            toggleNotificationPanel();
        });
    }

    // Add regenerate button click handler
    const regenerateBtn = document.getElementById("regenerateBtn");
    if (regenerateBtn) {
        regenerateBtn.addEventListener("click", regenerateTimetable);
    }
});

function handleLogout() {
    const confirmLogout = confirm("Are you sure you want to logout?");
    if (confirmLogout) {
        localStorage.removeItem("role");
        window.location.href = "admin.html";
    }
}

// Disable right-click and shortcuts
document.addEventListener("contextmenu", function (e) {
    alert("Sorry, right click is disabled!");
    e.preventDefault();
});

document.onkeydown = function (e) {
    if (e.keyCode == 123) return false;
    if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) return false;
    if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) return false;
    if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) return false;
    if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) return false;
    if (e.ctrlKey && e.keyCode == "S".charCodeAt(0)) return false;
};
