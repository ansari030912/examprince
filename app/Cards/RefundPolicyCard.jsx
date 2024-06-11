import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";

const RefundPolicyCard = () => {
  return (
    <Card
      sx={{
        borderRadius: "8px",
        mb: "10px",
        boxShadow: "inset 0px 0px 8px rgba(0, 0, 0, 0.4)",
        zIndex: 100000,
      }}
    >
      <CardMedia
        sx={{ height: 100, zIndex: -1 }}
        image="/refund-policy.png"
        title="green iguana"
      />
      <CardContent>
        <Typography
          variant="body1"
          fontWeight={500}
          fontSize={18}
          className="text-gray-700"
        >
          ExamPrince.com has a remarkable success record. We&apos;re confident
          of our products and provide a no hassle refund policy.
        </Typography>
      </CardContent>
      <CardActions sx={{ mt: "-20px" }}>
        <Link href={"/refund-policy"}>
          <Button fontWeight={"bold"} size="medium">
            How our refund policy works?
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default RefundPolicyCard;
