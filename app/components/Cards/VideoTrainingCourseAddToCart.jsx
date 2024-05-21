"use client";
import { Icon } from "@iconify/react";
import { Snackbar, SnackbarContent } from "@mui/material";
import React, { useEffect, useState } from "react";

const VideoTrainingCourseAddToCart = ({ data }) => {
  const [addCart, setAddCart] = useState({
    cart: "",
    full_price: "165.97",
    off: "70",
    price: "69.99",
    title: "Full Premium Bundle",
    type: 6,
  });
  const [productData, setProductData] = useState({
    exam_title: "",
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    setAddCart({
      cart: data.cart,
      full_price: data.full_price,
      off: "40",
      price: data.price,
      title: data.title,
    });

    setProductData({ exam_title: data.title });
  }, [data]);

  const handleBoxClick = () => {
    localStorage.removeItem("CartExamData");
    localStorage.setItem("CartExamData", JSON.stringify(productData));
    localStorage.removeItem("ExamCartAdded");
    localStorage.setItem("ExamCartAdded", JSON.stringify(addCart));
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <SnackbarContent
          sx={{
            backgroundColor: "green",
          }}
          message={
            <span style={{ display: "flex", alignItems: "center" }}>
              <Icon
                icon="mdi:cart-outline"
                width="1.6em"
                height="1.4em"
                style={{ color: "white", marginRight: "2px" }}
              />
              Product added to cart!
            </span>
          }
        />
      </Snackbar>
      <div class="w-full px-2 mb-2 md:mb-0">
        <button
          onClick={handleBoxClick}
          class="block py-2 px-2 leading-8 w-full font-heading font-medium tracking-tighter text-lg text-white text-center bg-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-600 rounded-xl"
        >
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default VideoTrainingCourseAddToCart;
