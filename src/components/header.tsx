import Toolbar from "@mui/material/Toolbar";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { ResumeDocument } from "../pages/resume/ResumeDocument";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";

interface HeaderProps {
  title: string;
}

export function Header(props: HeaderProps) {
  const { title } = props;

  const showResume = window.location.pathname === "/resume";

  return (
    <AppBar position="static" className="hide-print">
      <Toolbar>
        {/* <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton> */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        {showResume && (
          <Button color="inherit">
            <DownloadIcon color="action" />
            <PDFDownloadLink
              className="download-resume"
              document={<ResumeDocument />}
              fileName="_Resume_Steve_Jenkins.pdf"
            >
              {({ blob, url, loading, error }) =>
                loading ? "Loading resume..." : "Download PDF"
              }
            </PDFDownloadLink>
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
