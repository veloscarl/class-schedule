// Define the schedule for each day with specific times and detailed descriptions
const schedule = {
    Monday: [
        { time: "6:00 AM", description: "Morning Exercise - Jogging and stretching exercises to start the day." },
        { time: "9:00 AM", description: "Math class - Algebra and geometry lessons." },
        { time: "11:00 AM", description: "Science class - Biology lab experiments." },
        { time: "2:00 PM", description: "History class - World War II history discussion." },
        { time: "4:00 PM", description: "Study Group - Group study session for upcoming exams." },
        { time: "7:00 PM", description: "Dinner - Family dinner time." },
        { time: "8:00 PM", description: "Homework - Complete assignments and review notes." }
    ],
    Tuesday: [
        { time: "6:00 AM", description: "Morning Exercise - Yoga and meditation." },
        { time: "10:00 AM", description: "English class - Literature and essay writing." },
        { time: "1:00 PM", description: "Physical Education - Basketball practice." },
        { time: "4:00 PM", description: "Library - Research for history project." },
        { time: "7:00 PM", description: "Dinner - Family dinner time." },
        { time: "8:00 PM", description: "Homework - Complete assignments and review notes." }
    ],
    Wednesday: [
        { time: "6:00 AM", description: "Morning Exercise - Jogging and stretching exercises to start the day." },
        { time: "9:00 AM", description: "Math class - Algebra and geometry lessons." },
        { time: "11:00 AM", description: "Art class - Painting and drawing session." },
        { time: "2:00 PM", description: "Computer Science - Coding and programming exercises." },
        { time: "4:00 PM", description: "Study Group - Group study session for upcoming exams." },
        { time: "7:00 PM", description: "Dinner - Family dinner time." },
        { time: "8:00 PM", description: "Homework - Complete assignments and review notes." }
    ],
    Thursday: [
        { time: "6:00 AM", description: "Morning Exercise - Yoga and meditation." },
        { time: "10:00 AM", description: "Science class - Chemistry lab experiments." },
        { time: "1:00 PM", description: "Music class - Guitar and piano practice." },
        { time: "4:00 PM", description: "Library - Research for science project." },
        { time: "7:00 PM", description: "Dinner - Family dinner time." },
        { time: "8:00 PM", description: "Homework - Complete assignments and review notes." }
    ],
    Friday: [
        { time: "6:00 AM", description: "Morning Exercise - Jogging and stretching exercises to start the day." },
        { time: "9:00 AM", description: "Math class - Algebra and geometry lessons." },
        { time: "11:00 AM", description: "History class - Ancient civilizations discussion." },
        { time: "2:00 PM", description: "Physical Education - Soccer practice." },
        { time: "4:00 PM", description: "Study Group - Group study session for upcoming exams." },
        { time: "7:00 PM", description: "Dinner - Family dinner time." },
        { time: "8:00 PM", description: "Homework - Complete assignments and review notes." }
    ],
    Saturday: [
        { time: "6:00 AM", description: "Morning Exercise - Yoga and meditation." },
        { time: "All day", description: "No classes - Study and review for upcoming exams." }
    ],
    Sunday: [
        { time: "6:00 AM", description: "Morning Exercise - Jogging and stretching exercises to start the day." },
        { time: "All day", description: "No classes - Rest and relax, spend time with family." }
    ]
};

// Get the current day of the week
const today = new Date().toLocaleString('en-US', { weekday: 'long' });

// Get the schedule table body element
const scheduleTableBody = document.getElementById('scheduleTableBody');

// Display the schedule for today in the table
if (schedule[today]) {
    schedule[today].forEach(activity => {
        const row = document.createElement('tr');
        const timeCell = document.createElement('td');
        const descriptionCell = document.createElement('td');

        timeCell.textContent = activity.time;
        descriptionCell.textContent = activity.description;

        row.appendChild(timeCell);
        row.appendChild(descriptionCell);
        scheduleTableBody.appendChild(row);
    });
} else {
    const row = document.createElement('tr');
    const noScheduleCell = document.createElement('td');
    noScheduleCell.colSpan = 2;
    noScheduleCell.textContent = "No schedule for today.";
    row.appendChild(noScheduleCell);
    scheduleTableBody.appendChild(row);
}
