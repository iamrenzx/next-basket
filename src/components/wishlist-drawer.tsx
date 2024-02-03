import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Drawer,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  IconButton,
  Button,
  Typography,
  Paper,
  Grid,
} from "@mui/material";
import {
  removeFromWishlist,
  clearWishlist,
} from "@/services/wishlist/wishlistSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import { RootState } from "@/app/store";

type WishlistDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const WishlistDrawer = ({ isOpen, onClose }: WishlistDrawerProps) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

  const handleRemoveFromWishlist = (productId: number) => {
    dispatch(removeFromWishlist(productId));
  };

  const handleClearWishlist = () => {
    dispatch(clearWishlist());
  };

  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>
                <Typography fontWeight="bold">Title</Typography>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
            {wishlistItems.map((item) => (
              <TableRow key={item.product.id}>
                <TableCell>
                  <img
                    src={item.product.thumbnail}
                    alt={item.product.title}
                    style={{
                      width: 50,
                      height: 50,
                      objectFit: "cover",
                      borderRadius: "5px",
                    }}
                  />
                </TableCell>
                <TableCell>{item.product.title}</TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => handleRemoveFromWishlist(item.product.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Grid container gap={2} justifyContent="space-between" p={2}>
        <Button variant="outlined" onClick={onClose}>
          <Typography
            sx={{ px: "20px", py: "10px" }}
            variant="body2"
            fontWeight="bold"
            textTransform="none"
          >
            Close
          </Typography>
        </Button>
        <Button variant="contained" onClick={handleClearWishlist}>
          <Typography
            sx={{ px: "20px", py: "10px" }}
            color="white"
            variant="body2"
            fontWeight="bold"
            textTransform="none"
          >
            Clear
          </Typography>
        </Button>
      </Grid>
    </Drawer>
  );
};

export default WishlistDrawer;
