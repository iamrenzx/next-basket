import Link from "next/link";
import {
  Hidden,
  AppBar,
  Toolbar,
  Grid,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import {
  Instagram,
  Twitter,
  FacebookOutlined,
  YouTube,
  PhoneOutlined,
  EmailOutlined,
} from "@mui/icons-material";

const whiteSpace = {
  whiteSpace: "nowrap",
};

const Header = () => {
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
                  <PhoneOutlined />
                  (222) 555-0118
                </Typography>
                <Typography
                  sx={whiteSpace}
                  className="ml-3"
                  variant="body2"
                  fontWeight="bold"
                >
                  <EmailOutlined /> michelle.rivera@example.com
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
                  <Instagram />
                </IconButton>
                <IconButton color="inherit">
                  <YouTube />
                </IconButton>
                <IconButton color="inherit">
                  <FacebookOutlined />
                </IconButton>
                <IconButton color="inherit">
                  <Twitter />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Hidden>
  );
};

export default Header;
