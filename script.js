function generatePDF() {
    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("AL Wahda Private School", 10, 10);
    doc.setFontSize(12);
    doc.text("Classroom Observation Report", 10, 20);

    let y = 35;

    const fields = {
        "Teacher Name": teacherName.value,
        "Observer Name": observerName.value,
        "Grade / Subject": gradeSubject.value,
        "Date": date.value,
        "Lesson Objective": lessonObjective.value,
        "Classroom Environment (1–5)": environment.value,
        "Student Engagement (1–5)": engagement.value,
        "Teaching Strategies (1–5)": strategies.value,
        "Checklist": checkboxOption.value,
        "Comments": comments.value
    };

    for (const [label, value] of Object.entries(fields)) {
        doc.text(`${label}: ${value}`, 10, y);
        y += 10;
    }

    doc.save("Observation_Report.pdf");
}