import { Box, Typography } from "@mui/material";
import ListBookItem from "./ListBookItem";

const ListBook = () => {
  return (
    <Box sx={{ width: "85%" }}>
      <Box>
        <Typography variant="h4" sx={{ fontWeight: "bold", fontFamily: "inherit", textAlign: "center", marginBottom: 2 }}>
          List Book
        </Typography>
      </Box>
      <Box>
        <ListBookItem />
      </Box>
    </Box>
  );
};

export default ListBook;
