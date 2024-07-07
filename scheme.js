const semesterSubjects = {
    'Semester 1': ['BMATS101', 'BMATS201', 'BPHYS102-202', 'BCHES102-202','BPOPS103-203','BCEDK103-203','BESCK104A-204A','BESCK104C-204C','BESCK104D-204D','BESCK104E-204E','BETCK105E-205E','BETCK105F-205F','BETCK105H-205H','BETCK105I-205I','BENGK106-206','BPWSK106-206','BIDTK158-258','BICOK107-207','BSFHK158-258','BPLCK105B-205B'],
    'Semester 2': ['Subject 1', 'Subject 2', 'Subject 3', 'Subject 4', 'Subject 5'],
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
    subjects.forEach((subject) => {
        const link = document.createElement('a');
        link.className = 'subject-link';
        link.href = `/subjects/${semesterName.toLowerCase().replace(/\s+/g, '-')}/${subject.replace(/\s+/g, '-').toLowerCase()}.html`;
        link.target = '_blank'; // Open in a new tab
        const button = document.createElement('button');
        button.className = 'subject-button';
        button.innerHTML = subject;
        link.appendChild(button);
        subjectSection.appendChild(link);
    });

    // Scroll to the subject section
    subjectSection.scrollIntoView({ behavior: 'smooth' });
}
