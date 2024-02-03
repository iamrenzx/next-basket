import Link from "next/link";

import {
  Typography,
  Grid,
  Button,
  IconButton,
  Box,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  ArrowDropDown,
  ExpandMoreOutlined,
  FavoriteBorderOutlined,
  PersonOutlineOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { useState } from "react";
import { useRouter } from "next/router";
import CartDrawer from "./cart-drawer";
import { RootState } from "@/app/store";
import { useSelector } from "react-redux";
import WishlistDrawer from "./wishlist-drawer";

const Navigation = () => {
  const router = useRouter();
  const currentPage = router.pathname.split("/")[1];

  const headerStyle = currentPage === "product" ? { px: 20 } : {};
  const [shopMenu, setShopMenu] = useState<null | HTMLElement>(null);

  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [wishListIsOpen, setIsWishlistOpen] = useState(false);

  const items = ["Sample Item 1", "Sample Item 2"];

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

  const handleShopMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setShopMenu(event.currentTarget);
  };

  const handleShopMenuClose = () => {
    setShopMenu(null);
  };

  const handleOpenCart = () => {
    setCartIsOpen((prev) => !prev);
  };

  const handleOpenWishlist = () => {
    setIsWishlistOpen((prev) => !prev);
  };

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      sx={{ p: 3 }}
      gap={{
        xs: 4,
        md: 0,
      }}
    >
      <Grid item xs={12} md="auto">
        <Typography fontWeight="bold" variant="h4">
          Bandage
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid
          container
          sx={{ textAlign: "center" }}
          alignItems="center"
          justifyContent="center"
          gap={3}
        >
          <Grid item xs={12} md="auto">
            <Link href="/">
              <Typography
                color="textSecondary"
                sx={{
                  fontWeight: { md: "bold" },
                }}
                variant="body1"
              >
                Home
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={12} md="auto">
            <Button
              variant="text"
              color="inherit"
              sx={{ textTransform: "none", p: 0 }}
              onClick={handleShopMenuOpen}
              endIcon={<ExpandMoreOutlined />}
            >
              <Typography fontWeight="500" variant="body1">
                Shop
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={12} md="auto">
            <Link href="/about">
              <Typography
                color="textSecondary"
                sx={{
                  fontWeight: { md: "bold" },
                }}
                variant="body1"
              >
                About
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={12} md="auto">
            <Link href="/blog">
              <Typography
                color="textSecondary"
                sx={{
                  fontWeight: { md: "bold" },
                }}
                variant="body1"
              >
                Blog
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={12} md="auto">
            <Link href="/contact-us">
              <Typography
                color="textSecondary"
                sx={{
                  fontWeight: { md: "bold" },
                }}
                variant="body1"
              >
                Contact
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={12} md="auto">
            <Link href="/pages">
              <Typography
                color="textSecondary"
                sx={{
                  fontWeight: { md: "bold" },
                }}
                variant="body1"
              >
                Pages
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md="auto">
        <Grid
          container
          sx={{ textAlign: "center" }}
          alignItems="center"
          columnSpacing={1}
          justifyContent="flex-end"
        >
          <Grid item xs={12} md="auto">
            {/* Login button */}
            <Button variant="text" color="primary" fullWidth>
              <PersonOutlineOutlined sx={{ mr: 1 }} />
              <Typography
                variant="body1"
                sx={{
                  fontWeight: { md: "bold" },
                  textTransform: "none",
                }}
              >
                Login / Register
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={12} md="auto">
            {/* Search button */}
            <IconButton color="primary">
              <SearchOutlined />
            </IconButton>
          </Grid>
          <Grid item xs={12} md="auto" display="flex" alignItems="center">
            {/* Cart button */}
            <IconButton onClick={handleOpenCart} color="primary">
              <ShoppingCartOutlined />{" "}
            </IconButton>
            {cartItems.length !== 0 && (
              <Typography color="primary">{cartItems.length}</Typography>
            )}
          </Grid>
          <Grid item xs={12} md="auto" display="flex" alignItems="center">
            {/* Heart icon */}
            <IconButton onClick={handleOpenWishlist} color="primary">
              <FavoriteBorderOutlined />
            </IconButton>
            {wishlistItems.length !== 0 && (
              <Typography color="primary">{wishlistItems.length}</Typography>
            )}
          </Grid>
        </Grid>
      </Grid>

      {/* dropdown menu */}
      <Menu
        anchorEl={shopMenu}
        open={Boolean(shopMenu)}
        onClose={handleShopMenuClose}
      >
        {items.map((item, idx) => {
          return (
            <MenuItem key={item + idx}>
              <ListItemIcon>
                <ShoppingCartOutlined />
              </ListItemIcon>
              <Typography>{item}</Typography>
            </MenuItem>
          );
        })}
      </Menu>
      <CartDrawer isOpen={cartIsOpen} onClose={handleOpenCart} />
      <WishlistDrawer isOpen={wishListIsOpen} onClose={handleOpenWishlist} />
    </Grid>
  );
};

export default Navigation;
