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
  removeFromCart,
  updateQuantity,
  clearCart,
} from "@/services/cart/cartSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { CartRequest } from "@/types/cart";
import { RootState } from "@/app/store";

type CartDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleRemoveFromCart = (productId: number) => {
    dispatch(removeFromCart(productId));
  };

  const handleUpdateQuantity = ({ productId, quantity }: CartRequest) => {
    dispatch(updateQuantity({ productId, quantity }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
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
              <TableCell>
                <Typography fontWeight="bold">Quantity</Typography>
              </TableCell>
              <TableCell>
                <Typography fontWeight="bold">Total Price</Typography>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
            {cartItems.map((item) => (
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
                    onClick={() =>
                      handleUpdateQuantity({
                        productId: item.product.id,
                        quantity: item.quantity - 1,
                      })
                    }
                  >
                    <RemoveIcon />
                  </IconButton>
                  {item.quantity}
                  <IconButton
                    onClick={() =>
                      handleUpdateQuantity({
                        productId: item.product.id,
                        quantity: item.quantity + 1,
                      })
                    }
                  >
                    <AddIcon />
                  </IconButton>
                </TableCell>
                <TableCell>{`$${(item.product.price * item.quantity).toFixed(
                  2
                )}`}</TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => handleRemoveFromCart(item.product.id)}
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
        <Grid item xs={12} md="auto">
          <Button variant="outlined" fullWidth onClick={onClose}>
            <Typography
              sx={{ px: "20px", py: "10px" }}
              variant="body2"
              fontWeight="bold"
              textTransform="none"
            >
              Close
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={12} md="auto">
          <Button variant="contained" fullWidth onClick={handleClearCart}>
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
        <Grid item xs={12} md="auto">
          <Button
            variant="contained"
            fullWidth
            onClick={() => console.log("Submit")}
          >
            <Typography
              sx={{ px: "20px", py: "10px" }}
              color="white"
              variant="body2"
              fontWeight="bold"
              textTransform="none"
            >
              Submit
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Drawer>
  );
};

export default CartDrawer;
