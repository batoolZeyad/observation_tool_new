function generatePDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF("p","mm","a4");

  doc.setFontSize(14);
  doc.text("ONLINE LEARNING OBSERVATION FORM", 105, 15, null, null, "center");

  doc.setFontSize(10);
  doc.text("Teacher: " + teacherName.value, 10, 30);
  doc.text("Observer: " + observerName.value, 10, 36);
  doc.text("Date: " + date.value + "    Time: " + time.value, 10, 42);

  doc.text("Final Comments:", 10, 55);
  doc.text(finalComments.value || "-", 10, 62, { maxWidth: 180 });

  doc.save("Online_Learning_Observation_Form.pdf");
}
