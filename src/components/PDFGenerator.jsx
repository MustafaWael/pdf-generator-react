import React, { useState } from "react";
import axios from "axios";

const PDFGenerator = ({ template, data, fileName }) => {
  const [loading, setLoading] = useState(false);

  const generatePDF = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/generate-pdf",
        {
          template: template,
          data: data,
        },
        {
          responseType: "blob"
        }
      );

      
      const file = new Blob([response.data], { type: "application/pdf" });

      const fileURL = URL.createObjectURL(file);
      const link = document.createElement("a");
      link.href = fileURL;
      link.download = fileName || "generated.pdf";
      link.click();
      URL.revokeObjectURL(fileURL);
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={generatePDF} disabled={loading}>
        {loading ? "Generating PDF..." : "Generate PDF"}
      </button>
    </div>
  );
};

export default PDFGenerator;
