import { Box, Button, Typography } from "@mui/material";
import image1 from "../assets/image/storytelling (1) 1.png";
import image2 from "../assets/image/storytelling (1) 2.png";
import cover1 from "..//assets/image/listcover1.png";
import deleteIcon from "..//assets/image/Group.png";
import { useCartFuntion } from "../services/cart/hooks/useCartFunction";
import { useEffect, useState } from "react";
import { ICartModel } from "../services/cart/types/cart";

function Cart() {
  const { getCart } = useCartFuntion();
  const [cartData, setCartData] = useState<ICartModel[]>([]);

  useEffect(() => {
    console.log("Start get Cart");

    getCart().then((result) => {
      setCartData(result);
    });
  }, []);

  useEffect(() => {
    console.log("Book data: ", cartData[0]);
  }, []);

  return (
    <Box>
      <img src={image1} alt="" style={{ width: "30%", position: "absolute", top: 0, zIndex: 1 }} />
      <img src={image2} alt="" style={{ width: "30%", position: "absolute", top: 0, right: 0, zIndex: 1 }} />
      <Box sx={{ width: "75%", margin: "10px auto" }}>
        <Typography variant="h4" sx={{ fontFamily: "inherit", marginBottom: 2 }}>
          My Cart
        </Typography>
        <Typography sx={{ marginBottom: 1 }}>Review You Order</Typography>
        <Box sx={{ display: "flex", gap: 4 }}>
          <Box sx={{ paddingY: 2, marginBottom: 10, flex: 2, borderTop: "2px solid black", borderBottom: "2px solid black" }}>
            {/* ini list produk */}

            <Box sx={{ display: "flex", gap: 1, marginBottom: 5 }}>
              <Box sx={{ flex: 11, display: "flex" }}>
                <Box sx={{ width: "20%" }}>
                  <img src={cover1} alt="" style={{ width: "100%" }} />
                </Box>
                <Box sx={{ paddingX: 2 }}>
                  <Typography variant="h5" sx={{ fontFamily: "inherit", fontWeight: "bold" }}>
                    Harry Potter and The Prisoner of Azkaban
                  </Typography>
                  <Typography sx={{ color: "gray", fontStyle: "italic", marginBottom: 4 }}>By. JK. Rowling</Typography>
                  <Typography sx={{ color: "#44B200" }}>Rp.75.000</Typography>
                </Box>
              </Box>
              <Box sx={{ flex: 1, display: "flex", justifyContent: "end" }}>
                <img src={deleteIcon} alt="" style={{ width: "20px", height: "25px", zIndex: 10, cursor: "pointer" }} />
              </Box>
            </Box>

            <Box sx={{ display: "flex", gap: 1, marginBottom: 5 }}>
              <Box sx={{ flex: 11, display: "flex" }}>
                <Box sx={{ width: "20%" }}>
                  <img src={cover1} alt="" style={{ width: "100%" }} />
                </Box>
                <Box sx={{ paddingX: 2 }}>
                  <Typography variant="h5" sx={{ fontFamily: "inherit", fontWeight: "bold" }}>
                    Harry Potter and The Prisoner of Azkaban
                  </Typography>
                  <Typography sx={{ color: "gray", fontStyle: "italic", marginBottom: 4 }}>By. JK. Rowling</Typography>
                  <Typography sx={{ color: "#44B200" }}>Rp.75.000</Typography>
                </Box>
              </Box>
              <Box sx={{ flex: 1, display: "flex", justifyContent: "end" }}>
                <img src={deleteIcon} alt="" style={{ width: "20px", height: "25px", zIndex: 10, cursor: "pointer" }} />
              </Box>
            </Box>

            <Box sx={{ display: "flex", gap: 1 }}>
              <Box sx={{ flex: 11, display: "flex" }}>
                <Box sx={{ width: "20%" }}>
                  <img src={cover1} alt="" style={{ width: "100%" }} />
                </Box>
                <Box sx={{ paddingX: 2 }}>
                  <Typography variant="h5" sx={{ fontFamily: "inherit", fontWeight: "bold" }}>
                    Harry Potter and The Prisoner of Azkaban
                  </Typography>
                  <Typography sx={{ color: "gray", fontStyle: "italic", marginBottom: 4 }}>By. JK. Rowling</Typography>
                  <Typography sx={{ color: "#44B200" }}>Rp.75.000</Typography>
                </Box>
              </Box>
              <Box sx={{ flex: 1, display: "flex", justifyContent: "end" }}>
                <img src={deleteIcon} alt="" style={{ width: "20px", height: "25px", zIndex: 10, cursor: "pointer" }} />
              </Box>
            </Box>

            {/* sampe sini */}
          </Box>
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", borderTop: "2px solid black", paddingY: 1 }}>
              <Typography>Subtotal</Typography>
              <Typography>134.000</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", borderBottom: "2px solid black", paddingBottom: 1 }}>
              <Typography>Qty</Typography>
              <Typography>2</Typography>
            </Box>
            <Box sx={{ width: "100%", marginTop: 2 }}>
              <Button sx={{ backgroundColor: "#393939", width: "100%", color: "white" }}>Pay</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Cart;
