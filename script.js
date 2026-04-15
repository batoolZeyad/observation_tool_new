function generatePDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF("p", "mm", "a4");

  // TITLE
  doc.setFontSize(14);
  doc.text("ONLINE LEARNING OBSERVATION FORM", 105, 15, null, null, "center");

  // BASIC INFO
  doc.setFontSize(10);
  doc.text("Teacher: " + teacherName.value, 10, 30);
  doc.text("Observer: " + observerName.value, 10, 36);
  doc.text("Date: " + date.value + "    Time: " + time.value, 10, 42);

  // TABLE DATA
  const tableData = [];

  const rows = document.querySelectorAll("table tbody tr");

  rows.forEach((row, index) => {
    const cells = row.querySelectorAll("td");

    if (cells.length === 3) {
      const area = cells[0].innerText.trim();
      const observation = cells[1].innerText.trim();

      const radios = cells[2].querySelectorAll("input[type='radio']");
      let status = "N/A";
      if (radios[0]?.checked) status = "Observed";
      if (radios[1]?.checked) status = "Not Observed";

      const select = cells[2].querySelector("select");
      const quickComment = select ? select.value : "";

      const textarea = cells[2].querySelector("textarea");
      const comment = textarea ? textarea.value : "";

      tableData.push([
        area,
        observation,
        status + "\n" + quickComment + "\n" + comment
      ]);
    }
  });

  // TABLE
  doc.autoTable({
    head: [["Area", "Observation", "Comments"]],
    body: tableData,
    startY: 50,
    styles: {
      fontSize: 9,
      valign: "top"
    },
    headStyles: {
      fillColor: [31, 60, 136]
    }
  });

  // FINAL COMMENTS
  const finalY = doc.lastAutoTable.finalY + 10;
  doc.text("Final Comments & Summary:", 10, finalY);
  doc.text(finalComments.value || "-", 10, finalY + 6, { maxWidth: 180 });

  // SIGNATURES
  doc.line(20, finalY + 30, 80, finalY + 30);
  doc.line(120, finalY + 30, 180, finalY + 30);
  doc.text("Teacher’s Signature", 35, finalY + 36);
  doc.text("Observer’s Signature", 135, finalY + 36);

  // SAVE
  doc.save("Online_Learning_Observation_Form.pdf");
}
