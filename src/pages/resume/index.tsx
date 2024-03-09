import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { ResumeDocument } from "./ResumeDocument";
import "./resume.css";
import { Paper } from "@mui/material";

export function PageResume() {
  return (
    <>
      <Paper elevation={1}>
        <PDFViewer className="pdf-viewer" showToolbar={false}>
          <ResumeDocument />
        </PDFViewer>
      </Paper>
    </>
  );
}
