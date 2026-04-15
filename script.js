function generatePDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.setFontSize(14);
  doc.text("Online Learning Observation Form", 105, 15, null, null, "center");
  doc.save("Observation_Form.pdf");
}
