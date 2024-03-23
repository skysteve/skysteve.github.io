import Toolbar from "@mui/material/Toolbar";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import { PDFDownloadLink } from "@react-pdf/renderer";
// import { ResumeDocument } from "../pages/resume/ResumeDocument";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import { useCallback } from "react";
import { Box, IconButton } from "@mui/material";
import { WrappedLink } from "./common/wrappedLink";
import { useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { LinkedIn } from "@mui/icons-material";
import { SOCIAL_LINKS } from "../constants";

interface HeaderProps {
  title: string;
}

export function Header(props: HeaderProps) {
  // const { title } = props;
  const { pathname } = useLocation();

  const showResume = pathname === "/resume";

  const onDownload = useCallback(() => {
    const link = document.createElement("a");
    link.download = `_Resume _Steve Jenkins.pdf`;
    link.href = "/_Resume _Steve Jenkins.pdf";
    link.click();
  }, []);

  return (
    <AppBar position="static" className="hide-print">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <WrappedLink to="/" color="inherit">
            <HomeIcon />
          </WrappedLink>
        </Typography>
        {showResume && (
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button sx={{ color: "#fff" }} onClick={onDownload}>
              <DownloadIcon color="action" sx={{ color: "#fff" }} />
              Download PDF
            </Button>
          </Box>
        )}
        <WrappedLink
          to={SOCIAL_LINKS.linkedIn}
          target="_blank"
          color="inherit"
          rel="noreferrer"
        >
          <IconButton size="large" color="inherit">
            <LinkedIn />
          </IconButton>
        </WrappedLink>
      </Toolbar>
    </AppBar>
  );
}
