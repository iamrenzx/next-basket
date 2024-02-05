import {
  YouTube,
  FacebookOutlined,
  Twitter,
  Instagram,
} from "@mui/icons-material";
import {
  Box,
  Grid,
  Avatar,
  Rating,
  Typography,
  IconButton,
  Divider,
  Input,
  Button,
  TextField,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    // Implement your subscribe logic here
    console.log(`Subscribed with email: ${email}`);
  };
  return (
    <Box>
      <Box sx={{ background: "#fafafa" }}>
        <Grid container px={{ xl: 35, md: 10, xs: 5 }} pt={8}>
          <Grid
            container
            xs={12}
            pb={8}
            item
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item xs={12} md={6}>
              <Typography variant="h6" fontWeight="bold">
                Bandage
              </Typography>
            </Grid>
            <Grid item>
              <Link href="https://www.facebook.com" target="_blank" passHref>
                <IconButton color="primary">
                  <FacebookOutlined />
                </IconButton>
              </Link>
              <Link href="https://www.instagram.com" target="_blank" passHref>
                <IconButton color="primary">
                  <Instagram />
                </IconButton>
              </Link>
              <Link href="https://www.twitter.com" target="_blank" passHref>
                <IconButton color="primary">
                  <Twitter />
                </IconButton>
              </Link>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Divider variant="fullWidth"></Divider>
          </Grid>
        </Grid>
      </Box>
      <Grid container px={{ xl: 35, md: 10, xs: 5 }} py={10}>
        <Grid container xs={12} item justifyContent="space-between" spacing={3}>
          <Grid item xs={12} md={2}>
            <Typography variant="body1" fontWeight="bold">
              Company Info
            </Typography>
            <Link href="/about-us" target="_blank" passHref>
              <Typography
                my={2}
                color="textSecondary"
                variant="body2"
                fontWeight="bold"
              >
                About Us
              </Typography>
            </Link>
            <Link href="/carrier" target="_blank" passHref>
              <Typography
                my={2}
                color="textSecondary"
                variant="body2"
                fontWeight="bold"
              >
                Carrier
              </Typography>
            </Link>
            <Link href="/we-are-hiring" target="_blank" passHref>
              <Typography
                my={2}
                color="textSecondary"
                variant="body2"
                fontWeight="bold"
              >
                We are hiring
              </Typography>
            </Link>
            <Link href="/blog" target="_blank" passHref>
              <Typography
                my={2}
                color="textSecondary"
                variant="body2"
                fontWeight="bold"
              >
                Blog
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="body1" fontWeight="bold">
              Legal
            </Typography>
            <Link href="/about-us" target="_blank" passHref>
              <Typography
                my={2}
                color="textSecondary"
                variant="body2"
                fontWeight="bold"
              >
                About Us
              </Typography>
            </Link>
            <Link href="/carrier" target="_blank" passHref>
              <Typography
                my={2}
                color="textSecondary"
                variant="body2"
                fontWeight="bold"
              >
                Carrier
              </Typography>
            </Link>
            <Link href="/we-are-hiring" target="_blank" passHref>
              <Typography
                my={2}
                color="textSecondary"
                variant="body2"
                fontWeight="bold"
              >
                We are hiring
              </Typography>
            </Link>
            <Link href="/blog" target="_blank" passHref>
              <Typography
                my={2}
                color="textSecondary"
                variant="body2"
                fontWeight="bold"
              >
                Blog
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="body1" fontWeight="bold">
              Features
            </Typography>
            <Link href="/business-marketing" target="_blank" passHref>
              <Typography
                my={2}
                color="textSecondary"
                variant="body2"
                fontWeight="bold"
              >
                Business Marketing
              </Typography>
            </Link>
            <Link href="/user-analytics" target="_blank" passHref>
              <Typography
                my={2}
                color="textSecondary"
                variant="body2"
                fontWeight="bold"
              >
                User Analytics
              </Typography>
            </Link>
            <Link href="/live-chat" target="_blank" passHref>
              <Typography
                my={2}
                color="textSecondary"
                variant="body2"
                fontWeight="bold"
              >
                Live Chat
              </Typography>
            </Link>
            <Link href="/unlimited-support" target="_blank" passHref>
              <Typography
                my={2}
                color="textSecondary"
                variant="body2"
                fontWeight="bold"
              >
                Unlimited Support
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="body1" fontWeight="bold">
              Resources
            </Typography>
            <Link href="/ios-android" target="_blank" passHref>
              <Typography
                my={2}
                color="textSecondary"
                variant="body2"
                fontWeight="bold"
              >
                IOS & Android
              </Typography>
            </Link>
            <Link href="/watch-demo" target="_blank" passHref>
              <Typography
                my={2}
                color="textSecondary"
                variant="body2"
                fontWeight="bold"
              >
                Watch a Demo
              </Typography>
            </Link>
            <Link href="/customers" target="_blank" passHref>
              <Typography
                my={2}
                color="textSecondary"
                variant="body2"
                fontWeight="bold"
              >
                Customers
              </Typography>
            </Link>
            <Link href="/developer/api" target="_blank" passHref>
              <Typography
                my={2}
                color="textSecondary"
                variant="body2"
                fontWeight="bold"
              >
                API
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="body1" fontWeight="bold">
              Get in Touch
            </Typography>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <TextField
                variant="outlined"
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  mt: 2,
                }}
                InputProps={{
                  sx: {
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  },
                }}
                FormHelperTextProps={{
                  sx: {
                    mx: 0,
                  },
                }}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{
                  mt: 2,
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                }}
                onClick={handleSubscribe}
              >
                <Typography
                  color="white"
                  sx={{ textTransform: "none" }}
                  variant="body2"
                >
                  Subscribe
                </Typography>
              </Button>
            </Box>
            <Typography variant="caption" color="textSecondary">
              Lore imp sum dolor Amit
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Box sx={{ background: "#fafafa" }}>
        <Grid container px={{ xl: 35, md: 10, xs: 5 }} py={5}>
          <Grid
            container
            xs={12}
            item
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item>
              <Typography
                color="textSecondary"
                variant="body2"
                textAlign="center"
                fontWeight="bold"
              >
                Made With Love By Finland All Right Reserved
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
