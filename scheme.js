
const semesterSubjects = {
    'Semester 1': ['Subject 1', 'Subject 2', 'Subject 3'],
    'Semester 2': ['Subject 1', 'Subject 2', 'Subject 3', 'Subject 4'],
    'Semester 3': ['Subject 1', 'Subject 2', 'Subject 3', 'Subject 4', 'Subject 5'],
    'Semester 4': ['Subject 1', 'Subject 2'],
    'Semester 5': ['Subject 1', 'Subject 2', 'Subject 3', 'Subject 4', 'Subject 5', 'Subject 6'],
    'Semester 6': ['Subject 1', 'Subject 2', 'Subject 3', 'Subject 4', 'Subject 5', 'Subject 6', 'Subject 7']
};

function showSemesters() {
    const scheme = document.getElementById('syllabus-scheme').value;
    const semesters = Object.keys(semesterSubjects);
    const container = document.getElementById('semester-buttons');
    const subjectSection = document.getElementById('subject-section');

    // Clear previous buttons and subjects if any
    container.innerHTML = '';
    subjectSection.innerHTML = '';

    // Create and append buttons for each semester
    semesters.forEach((semester) => {
        const button = document.createElement('button');
        button.className = 'semester-button';
        button.innerHTML = semester;
        button.onclick = () => showSubjects(scheme, semester);
        container.appendChild(button);
    });
}

function showSubjects(scheme, semesterName) {
    const subjects = semesterSubjects[semesterName];
    const subjectSection = document.getElementById('subject-section');
    subjectSection.innerHTML = `<h2>${semesterName} - ${scheme}</h2>`;

    // Create and append subject buttons
    subjects.forEach((subject, index) => {
        const link = document.createElement('a');
        link.className = 'subject-link';
        link.href = `/semester-1/`; // Generate a unique href for each subject
        link.target = '_blank'; // Open in a new tab
        const button = document.createElement('button');
        button.className = 'subject-button';
        button.innerHTML = subject;
        button.onclick = () => alert(`Redirect to ${subject} of ${semesterName}`);
        subjectSection.appendChild(link);
        link.appendChild(button);
    });

    // Scroll to the subject section
    subjectSection.scrollIntoView({ behavior: 'smooth' });
}