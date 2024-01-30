import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PhoneIcon from "@mui/icons-material/PhoneOutlined";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import Box from "@mui/material/Box";
import { Hidden } from "@mui/material";

const whiteSpace = {
  whiteSpace: "nowrap",
};

const Navigation = () => {
  return (
    <Hidden mdDown>
      <AppBar color="secondary" position="static">
        <Toolbar>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
            wrap="nowrap"
          >
            <Grid item>
              <Box display="flex" alignItems="center">
                <Typography variant="body2" sx={whiteSpace} fontWeight="bold">
                  <PhoneIcon />
                  (222) 555-0118
                </Typography>
                <Typography
                  sx={whiteSpace}
                  className="ml-3"
                  variant="body2"
                  fontWeight="bold"
                >
                  <EmailIcon /> michelle.rivera@example.com
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              {/* Follow Us */}
              <Typography sx={whiteSpace} variant="body2" fontWeight="bold">
                Follow Us and get a chance to win 80% off
              </Typography>
            </Grid>
            <Grid item>
              <Box display="flex" alignItems="center">
                <Typography sx={whiteSpace} variant="body2" fontWeight="bold">
                  Follow Us :
                </Typography>
                {/* Social Media Icons */}
                <IconButton color="inherit">
                  <InstagramIcon />
                </IconButton>
                <IconButton color="inherit">
                  <YouTubeIcon />
                </IconButton>
                <IconButton color="inherit">
                  <FacebookIcon />
                </IconButton>
                <IconButton color="inherit">
                  <TwitterIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Hidden>
  );
};

export default Navigation;
