"use client";
import { Icon } from "@iconify/react";
import {
  Box,
  Card,
  Grid,
  Snackbar,
  SnackbarContent,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const CertPriceCard = ({ data }) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const handleBoxClick = (item) => {
    localStorage.removeItem("ExamData");
    localStorage.setItem("ExamData", JSON.stringify(data));
    localStorage.removeItem("CartProducts");
    localStorage.setItem("CartProducts", JSON.stringify(item));
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <Grid container spacing={2}>
        {Array.isArray(data.exam_prices) &&
          data.exam_prices.map((item, index) => {
            const { title, full_price, price, off, cart } = item;
            return (
              <Grid item xs={12} md={4} key={index}>
                <Box
                  onClick={() => handleBoxClick(item)}
                  sx={{ cursor: "pointer" }}
                >
                  <Card
                    className="text-white bg-gradient-to-t from-blue-400 to-gray-900"
                    sx={{
                      backgroundColor: "#1F2937",
                      overflow: "hidden",
                      display: "flex",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                      borderRadius: "0px",
                      borderTopLeftRadius: "15px",
                      borderTopRightRadius: "0px",
                      borderBottomRightRadius: "15px",
                      borderBottomLeftRadius: "0px",
                    }}
                  >
                    <Box>
                      {off !== 0 && (
                        <div
                          style={{
                            color: "white",
                            backgroundColor: "#652E60",
                            padding: "10px",
                          }}
                          className="font-bold justify-center p-1"
                        >
                          <span
                            style={{
                              color: off >= 50 ? "#FFD700" : "white",
                            }}
                          >
                            {off}% Off
                          </span>
                          <div className="flex justify-center">
                            {off >= 50 ? (
                              <div className="flex justify-between">
                                <Icon
                                  icon="tdesign:cart-add"
                                  width="1.6em"
                                  height="1.6em"
                                  style={{ color: "white" }}
                                />
                              </div>
                            ) : (
                              <Icon
                                icon="tdesign:cart-add"
                                width="1.6em"
                                height="1.6em"
                                style={{ color: "white" }}
                              />
                            )}
                          </div>
                        </div>
                      )}
                    </Box>
                    <div
                      style={{
                        padding: "5px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        fontWeight={700}
                        color={"white"}
                        fontSize={12}
                        className="text-left"
                      >
                        {title}
                      </Typography>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                        }}
                      >
                        <div>
                          <span className="text-xl font-bold text-white dark:text-white">
                            ${price}
                          </span>
                          <span className="text-lg font-bold text-red-500 line-through ml-1">
                            ${full_price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Box>
              </Grid>
            );
          })}
      </Grid>
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
    </>
  );
};

export default CertPriceCard;
