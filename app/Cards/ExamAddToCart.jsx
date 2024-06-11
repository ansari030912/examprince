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

const ExamAddToCart = ({ data }) => {
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
        {Array.isArray(data?.exam_prices) &&
          data?.exam_prices.map((item, index) => {
            const { title, full_price, price, off, cart } = item;
            return (
              <Grid item xs={12} md={6} key={index}>
                <Box
                  onClick={() => handleBoxClick(item)}
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  <Card
                    className="text-white bg-gray-200"
                    sx={{
                      overflow: "hidden",
                      display: "flex",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.04)",
                        border: "none",
                      },
                      borderRadius: "0px",
                      borderTopLeftRadius: "15px",
                      borderTopRightRadius: "0px",
                      borderBottomRightRadius: "15px",
                      borderBottomLeftRadius: "0px",
                      boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    <Box>
                      {off !== 0 && (
                        <div
                          style={{
                            color: "white",
                            backgroundColor:
                              title === "Full Premium Bundle"
                                ? "#2880ed"
                                : title === "PDF & Test Engine Bundle"
                                ? "#1fad53"
                                : title === "Training Course Only"
                                ? "#FFB703"
                                : title === "Test Engine Only"
                                ? "#ef233c"
                                : title === "PDF Only"
                                ? "#003049"
                                : "",
                            padding: "10px",
                          }}
                          className="font-bold justify-center p-1"
                        >
                          <span
                            style={{
                              color:
                                title === "Full Premium Bundle"
                                  ? "white"
                                  : "white",
                              font: off >= 50 ? "bold" : "",
                            }}
                          >
                            {off}% Off
                          </span>
                          <div className="flex justify-center">
                            {title === "Full Premium Bundle" ? (
                              <div className="flex justify-between">
                                <Icon
                                  icon="tdesign:cart-add"
                                  width="1.8em"
                                  height="1.8em"
                                  style={{ color: "white" }}
                                />
                              </div>
                            ) : (
                              <Icon
                                icon="tdesign:cart-add"
                                width="1.8em"
                                height="1.8em"
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
                        color={"#1F2937"}
                        fontSize={18}
                        className="text-left"
                      >
                        {title}
                      </Typography>
                      <div>
                        <div className="flex justify-between">
                          <div>
                            <span className="text-2xl font-bold text-gray-500">
                              ${price}
                            </span>
                            <span className="text-xl font-medium text-red-500 line-through ml-1">
                              ${full_price}
                            </span>
                          </div>
                          {title === "Full Premium Bundle" ? (
                            <div className="align-right">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1.8em"
                                height="1.8em"
                                viewBox="0 0 48 48"
                              >
                                <path
                                  fill="#fff654"
                                  stroke="#2880ED"
                                  strokeLinejoin="round"
                                  strokeWidth="4"
                                  d="M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z"
                                />
                              </svg>
                            </div>
                          ) : title === "PDF & Test Engine Bundle" ? (
                            <div className="align-right">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1.8em"
                                height="1.8em"
                                viewBox="0 0 48 48"
                              >
                                <path
                                  fill="#fff654"
                                  stroke="#2880ED"
                                  strokeLinejoin="round"
                                  strokeWidth="4"
                                  d="M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z"
                                />
                              </svg>
                            </div>
                          ) : (
                            ""
                          )}
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

export default ExamAddToCart;
