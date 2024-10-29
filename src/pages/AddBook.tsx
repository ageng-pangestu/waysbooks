import { Box, Button, Input, TextareaAutosize, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addBookSchema, TAddBookSchema } from "../components/validators/addBookValidation";
import { IAddBookForm } from "../services/books/types/book";
import { useBookFuntion } from "../services/books/hooks/useBookFunction";

const AddBook = () => {
  const { addBook } = useBookFuntion();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TAddBookSchema>({
    resolver: zodResolver(addBookSchema),
  });

  const onSubmit = async (data: IAddBookForm) => {
    console.log("data: ", data);
    try {
      await addBook(data);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "60%", margin: "20px auto", gap: 2 }}>
      <Typography variant="h4" style={{ fontFamily: "inherit", fontWeight: "bold", marginBottom: 10 }}>
        Add Book
      </Typography>

      <Controller
        name="title"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Input
            {...field}
            disableUnderline
            sx={{
              backgroundColor: "#BCBCBC40",
              border: "2px solid #BCBCBC",
              borderRadius: "5px",
              padding: "2px 10px",
            }}
            placeholder="Title"
            error={!!errors.title}
          />
        )}
      />
      {errors.title && <Typography color="error">{errors.title.message}</Typography>}

      <Controller
        name="writer"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Input
            {...field}
            disableUnderline
            sx={{
              backgroundColor: "#BCBCBC40",
              border: "2px solid #BCBCBC",
              borderRadius: "5px",
              padding: "2px 10px",
            }}
            placeholder="Writer"
            error={!!errors.title}
          />
        )}
      />
      {errors.title && <Typography color="error">{errors.title.message}</Typography>}

      <Controller
        name="publicationDate"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Input
            {...field}
            disableUnderline
            sx={{
              backgroundColor: "#BCBCBC40",
              border: "2px solid #BCBCBC",
              borderRadius: "5px",
              padding: "2px 10px",
            }}
            placeholder="Publication Date"
            error={!!errors.publicationDate}
          />
        )}
      />
      {errors.publicationDate && <Typography color="error">{errors.publicationDate.message}</Typography>}

      <Controller
        name="pages"
        defaultValue=""
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            disableUnderline
            sx={{
              backgroundColor: "#BCBCBC40",
              border: "2px solid #BCBCBC",
              borderRadius: "5px",
              padding: "2px 10px",
            }}
            placeholder="Pages"
            error={!!errors.pages}
          />
        )}
      />
      {errors.pages && <Typography color="error">{errors.pages.message}</Typography>}

      <Controller
        name="isbn"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Input
            {...field}
            disableUnderline
            sx={{
              backgroundColor: "#BCBCBC40",
              border: "2px solid #BCBCBC",
              borderRadius: "5px",
              padding: "2px 10px",
            }}
            placeholder="ISBN"
            error={!!errors.isbn}
          />
        )}
      />
      {errors.isbn && <Typography color="error">{errors.isbn.message}</Typography>}

      <Controller
        name="price"
        defaultValue=""
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            disableUnderline
            sx={{
              backgroundColor: "#BCBCBC40",
              border: "2px solid #BCBCBC",
              borderRadius: "5px",
              padding: "2px 10px",
            }}
            placeholder="Price"
            error={!!errors.price}
          />
        )}
      />
      {errors.price && <Typography color="error">{errors.price.message}</Typography>}

      <Controller
        name="about"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextareaAutosize
            {...field}
            minRows={5}
            placeholder="About This Book"
            style={{
              backgroundColor: "#BCBCBC40",
              border: "2px solid #BCBCBC",
              borderRadius: "5px",
              padding: "10px",
              resize: "none",
            }}
          />
        )}
      />
      {errors.about && <Typography color="error">{errors.about.message}</Typography>}

      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Button onClick={handleSubmit(onSubmit)} sx={{ backgroundColor: "#393939", width: "100px", color: "white" }}>
          Add Book
        </Button>
      </Box>
    </Box>
  );
};

export default AddBook;
