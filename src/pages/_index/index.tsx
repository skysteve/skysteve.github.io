import { Grid, Link } from "@mui/material";
import "./index.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { LinkedIn } from "@mui/icons-material";
import { SOCIAL_LINKS } from "../../constants";

export function PageIndex() {
  return (
    <>
      <br />
      <Grid container spacing={1}>
        <Grid xs={12} md={9} style={{ margin: "auto" }}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Steve Jenkins
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Software Engineer Full stack engineer team lead with a focus on
                frontend JavaScript and Node.js
              </Typography>
            </CardContent>
            <CardActions style={{ paddingLeft: "1rem" }}>
              {/* <Button size="small">Github</Button> */}
              {/* <Button size="small">LinkedIn</Button> */}
              <Link
                href={SOCIAL_LINKS.linkedIn}
                target="_blank"
                color="inherit"
                rel="noreferrer"
              >
                <LinkedIn />
              </Link>
            </CardActions>
          </Card>
          <div></div>
        </Grid>
        <Grid xs={12} md={3}>
          <img
            className="profile-picture"
            src="/assets/images/profile_6.jpg"
            alt="Profile with a view of mountains and a lake in the background"
          />
        </Grid>
      </Grid>
    </>
  );
}
