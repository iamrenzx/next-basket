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
import { useRouter } from "next/router";

const whiteSpace = {
  whiteSpace: "nowrap",
};

const Header = () => {
  const router = useRouter();
  const currentPage = router.pathname.split("/")[1];

  const headerStyle = currentPage === "product" ? { px: 20 } : {};

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
                <PhoneOutlined sx={{ ml: 2, mr: 0.5 }} />
                <Typography variant="body2" sx={whiteSpace} fontWeight="bold">
                  (222) 555-0118
                </Typography>

                <EmailOutlined sx={{ ml: 2, mr: 0.5 }} />
                <Typography sx={whiteSpace} variant="body2" fontWeight="bold">
                  michelle.rivera@example.com
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
                <Link href="https://www.instagram.com" target="_blank" passHref>
                  <IconButton sx={{ color: "white" }}>
                    <Instagram />
                  </IconButton>
                </Link>
                <Link href="https://www.youtube.com" target="_blank" passHref>
                  <IconButton sx={{ color: "white" }}>
                    <YouTube />
                  </IconButton>
                </Link>
                <Link href="https://www.facebook.com" target="_blank" passHref>
                  <IconButton sx={{ color: "white" }}>
                    <FacebookOutlined />
                  </IconButton>
                </Link>
                <Link href="https://www.twitter.com" target="_blank" passHref>
                  <IconButton sx={{ color: "white" }}>
                    <Twitter />
                  </IconButton>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Hidden>
  );
};

export default Header;
