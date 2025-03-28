import React from "react";
import { Card, CardContent, CardMedia } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import styles from "./Card.module.css";
import { Typography } from "@mui/material";

const AlbumCard = ({ product }) => {
  if (!product) {
    return null;
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Card className={styles.card}>
        <CardContent style={{ padding: "0px" }}>
          <CardMedia
            className={styles.cardimg}
            component="img"
            alt={product.title}
            height="140"
            image={product.image}
            style={{ objectFit: "cover" }}
          />

          <Stack direction="row" spacing={1} sx={{ marginTop: "8px" }}>
            <Chip
              className={styles.chips}
              label={
                product.follows
                  ? `${product.follows} Follows`
                  : `${product.likes} Likes`
              }
              sx={{ backgroundColor: "black", color: "white" }}
            />
          </Stack>
        </CardContent>
      </Card>

      <Typography
        variant="subtitle1"
        sx={{
          marginTop: "5px",
          color: "white",
          textAlign: "center",
          width: "100%",
        }}
        style={{
          
        }}
      >
        {product.title || "Untitled"}
      </Typography>
    </div>
  );
};

export default AlbumCard;
