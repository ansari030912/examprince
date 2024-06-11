/* eslint-disable @next/next/no-img-element */
import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const SafeCheckOutCard = () => {
  return (
    <Box
      sx={{
        boxShadow: "inset 0px 0px 8px rgba(0, 0, 0, 0.4)",
        // bgcolor: "transparent",
        borderRadius: "8px",
      }}
    >
      <Grid
        container
        className="text-white bg-blue-200"
        sx={{
          display: "flex",
          // mt: "10px",
          width: "100%",
          borderRadius: "8px",
          border: "1px solid #74aff7",
          boxShadow: "inset 0px 0px 8px rgba(0, 0, 0, 0.5)",
          // boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            padding: "10px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            width="100%"
            src="/safe_checkout_optimized.png"
            alt="safe_checkout_optimized"
          />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "10px",
            mt: "-12px",
          }}
        >
          <Typography
            variant="subtitle1"
            component="div"
            fontSize={15}
            className="text-gray-700 text-lg pl-1"
          >
            Your purchase with ExamPrince.com is safe and fast. The
            ExamPrince.com website is protected by 256-bit SSL from Cloudflare,
            the leader in online security.
          </Typography>
          <Link
            type="button"
            href="/"
            className="text-white underline  hover:text-blue-400 mt-2"
          >
            <Button fontWeight={"bold"} size="medium">
              Customer Support
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SafeCheckOutCard;
